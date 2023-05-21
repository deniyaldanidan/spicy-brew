'use client';

import URL_LIST, { deliveriesType, deliverableProducts } from '@/url';
import { notFound } from 'next/navigation';
import React, { ChangeEvent, useMemo, useState } from 'react';
import styles from './index.module.scss';
import { grindSizes, products } from '@/productList';
import BreadCrumb from '@/app/components/BreadCrumb';

type props = {
    params: {
        delivery: typeof deliveriesType[number],
        item: typeof deliverableProducts[number]
    }
}

const frequency = [
    {
        label: "Once a Week",
        value: 7
    },
    {
        label: "Twice a Month",
        value: 14
    },
    {
        label: "Once a Month",
        value: 28
    }
] as const;



export default function Page(props: props): React.JSX.Element {
    const { delivery: deliveryType, item: deliveryItemType } = props.params;
    
    const chosen_products_list = useMemo(() => products.filter(prd => prd.category === deliveryItemType), [deliveryItemType]);

    const [chosenProduct, setChosenProduct] = useState<typeof chosen_products_list[0] | null>(null);
    const [chosenFreq, setChosenFreq] = useState<number>(frequency[0].value);
    const [chosenGrind, setChosenGrind] = useState<typeof grindSizes[number]>("whole-beans");


    if (!deliveriesType.find(del => del === deliveryType) || !deliverableProducts.find(prd => prd === deliveryItemType)) {
        return notFound();
    }

    const handleFreqChg = (e:ChangeEvent<HTMLSelectElement>)=>{
        const chosenVal = parseInt(e.target.value);
        if (frequency.map(freq=>freq.value).find(val=>val===chosenVal)){
            setChosenFreq(chosenVal)
        }
    }

    const handleFlavorChg = (e:ChangeEvent<HTMLSelectElement>)=>{
        const curr_prod = chosen_products_list.find(prd=>prd.id===e.target.value);
        if (curr_prod?.id){
            setChosenProduct(curr_prod)
        }
    }

    const handleGrindChg = (e:ChangeEvent<HTMLSelectElement>)=>{
        if (grindSizes.find(grd=>grd===e.target.value)){
            setChosenGrind(e.target.value as any)
        }
    }

    return (
        <div className={styles.subscribePage}>
            <BreadCrumb current={deliveryType.replace("-", " ")} parents={[{ ...URL_LIST.subscribe, label: "Subscriptions" }]} />
            <div className={styles.sects}>
                <div className={styles.sect2}>
                    {chosenFreq}
                    {chosenProduct?.name}
                    {chosenGrind}
                </div>
                <div className={styles.sect1}>
                    <div className={styles.contents}>
                        <div>{deliveryType.split("-")[0]} Deliveries</div>
                        <div className={styles.inpGrp}>
                            <label htmlFor="flavor">Flavor</label>
                            <select id="flavor" onChange={handleFlavorChg}>
                                {
                                    chosen_products_list.map(prod => <option value={prod.id} key={prod.id}>{prod.name}</option>)
                                }
                            </select>
                        </div>
                        {
                            deliveryItemType === "coffee" ? (
                                <div className={styles.inpGrp}>
                                    <label htmlFor="grind">Grind Size</label>
                                    <select id="grind" onChange={handleGrindChg}>
                                        {
                                            grindSizes.map(size => <option value={size} key={size}>{size.replaceAll("-", " ")}</option>)
                                        }
                                    </select>
                                </div>
                            ) : ""
                        }
                        <div className={styles.inpGrp}>
                            <label htmlFor="frequency">Frequency</label>
                            <select id="frequency" onChange={handleFreqChg}>
                                {
                                    frequency.map(freq => <option value={freq.value} key={freq.value}>{freq.label}</option>)
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/**
 * inputs include
 * - flavours
 * - frequency === "week"(7 days) | "month"(once every 28 days) | "twice-month"(once every 14 days)
 * - Grind Size if coffee-beans === "Whole" | "Medium" | "Coarse" | "Fine"
 */
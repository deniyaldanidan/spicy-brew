'use client';

import URL_LIST from '@/url';
import { notFound } from 'next/navigation';
import React, { ChangeEvent, MouseEventHandler, useMemo, useRef, useState } from 'react';
import styles from './index.module.scss';
import BreadCrumb from '@/app/components/BreadCrumb';
import { between, imgPanZoomCalculator } from '@/libs/helpers';
import { discountInfo } from '../../data';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { FiChevronsRight } from 'react-icons/fi';
import Image from 'next/image';
import SelectGrp from '@/app/components/SelectGrp';
import clsx from 'clsx';
import products from '@/products.json';
import { grindSizes, deliveriesType, deliverableProducts } from '@/custTypes';


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
];

export default function Page(props: props): React.JSX.Element {
    const imgRef = useRef<HTMLImageElement>(null);
    const { delivery: deliveryType, item: deliveryItemType } = props.params;

    const chosen_products_list = useMemo(() => products.filter(prd => prd.category === deliveryItemType), [deliveryItemType]);

    const [chosenProduct, setChosenProduct] = useState<typeof chosen_products_list[0]>(chosen_products_list[0]);
    const [chosenFreq, setChosenFreq] = useState<number>(frequency[0].value);
    const [chosenGrind, setChosenGrind] = useState<typeof grindSizes[number]>("whole-beans");
    const [chosenSize, setChosenSize] = useState<number>(1);

    const [discountedPrice, truePrice] = useMemo(() => {
        if(!chosenProduct){
            return [0, 0];
        }
        const dels = parseInt(deliveryType.split("-")[0]);

        const discount = dels * chosenSize * chosenProduct.price * (discountInfo[deliveryType] / 100);
        const truePrice = dels * chosenSize * chosenProduct.price;
        return [Math.round(truePrice - discount), truePrice]
    }, [chosenProduct, chosenSize, deliveryType]);


    if (!deliveriesType.find(del => del === deliveryType) || !deliverableProducts.find(prd => prd === deliveryItemType) || !chosen_products_list.length) {
        return notFound();
    }

    const handleFreqChg = (e: ChangeEvent<HTMLSelectElement>) => {
        const chosenVal = parseInt(e.target.value);
        if (frequency.map(freq => freq.value).find(val => val === chosenVal)) {
            setChosenFreq(chosenVal)
        }
    }

    const handleFlavorChg = (e: ChangeEvent<HTMLSelectElement>) => {
        const curr_prod = chosen_products_list.find(prd => prd.id === e.target.value);
        if (curr_prod?.id) {
            setChosenProduct(curr_prod)
        }
    }

    const handleGrindChg = (e: ChangeEvent<HTMLSelectElement>) => {
        if (grindSizes.find(grd => grd === e.target.value)) {
            setChosenGrind(e.target.value as any)
        }
    }

    const handleSize = (e: ChangeEvent<HTMLSelectElement>) => {
        const mySize = parseInt(e.target.value);
        between(mySize, 1, 3) && setChosenSize(mySize);
    }

    const handleImgZMPN:MouseEventHandler<HTMLImageElement> = function(e){
        imgRef.current && imgPanZoomCalculator(imgRef.current, e)
    }

    return (<>
        <BreadCrumb current={deliveryType.replace("-", " ")} parents={[{ ...URL_LIST.subscribe, label: "Subscriptions" }]} />
        <div className={styles.subscribePage}>
            <div className={styles.sect1}>
                <div className={clsx(styles.pageTitle, styles.name)}>
                    <span>{chosenProduct.name}</span>
                    <span>-</span>
                    <span>{chosenProduct.roast} Roast</span>
                </div>
                <div className={styles.img_container}>
                    <Image src={URL_LIST.shop.imagePath(chosenProduct.category as any, chosenProduct.id)} alt={chosenProduct.name} priority quality={100} onMouseMove={handleImgZMPN} ref={imgRef} width={1000} height={650} />
                </div>
            </div>
            <div className={styles.sect2}>
                <div className={styles.pageTitle}>{deliveryType.split("-")[0]} Deliveries</div>
                <div className={styles.contents}>
                    <SelectGrp
                        inpName='Choose your Flavor'
                        inpId='flavor'
                        changeHandle={handleFlavorChg}
                        optList={chosen_products_list.map(itm => ({ value: itm.id, label: itm.name }))}
                    />
                    {
                        deliveryItemType === "coffee" ? (<SelectGrp
                            inpName='Choose your Grind Size'
                            inpId='grind'
                            changeHandle={handleGrindChg}
                            optList={grindSizes.map(grd => ({ label: grd.replaceAll("-", " "), value: grd }))}
                        />) : ""
                    }
                    <SelectGrp
                        inpId='freq'
                        inpName='Delivery Frequency'
                        changeHandle={handleFreqChg}
                        optList={frequency as any}
                    />
                    <SelectGrp
                        inpId='size'
                        inpName='Size'
                        changeHandle={handleSize}
                        optList={[1, 2, 3].map(sz => ({ label: `${chosenProduct.quantity.value * sz}g`, value: `${sz}` }))}
                    />
                    <div className={styles.priceInfo}>
                        <span>Rs. {discountedPrice}</span>
                        <span>Rs. {truePrice}</span>
                    </div>
                    <div className={styles.infoNote}>
                        <BsFillInfoCircleFill />
                        <span>Free Delivery for all orders above Rs. 1200</span>
                    </div>
                    <button>
                        Subscribe
                        <FiChevronsRight />
                    </button>
                </div>
            </div>
        </div>
    </>)
}
"use client";

import styles from '@/styles/_pages/subscribe-delivery.module.scss';
import '@/styles/selectGrp.scss';
import SelectGrp from '@/app/_components/SelectGrp';
import BreadCrumb from '@/app/_components/BreadCrumb';
import InfoBanner from '@/app/_components/InfoBanner';
import { useAuth } from '@/context/AuthContext';
import useSubscriptions from '@/context/SubscriptionContext';
import { discountInfo } from '../../../_assets/data';
import { between, imgPanZoomCalculator } from '@/libs/helpers';
import URL_LIST from '@/url';
import { grindSizes, frequency, freqs, freq_vals, deliverableProducts, deliveriesType, productsType } from '@/custTypes';
import React, { ChangeEvent, useMemo, useRef, useState, MouseEventHandler, TouchEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FiChevronsRight } from 'react-icons/fi';
import clsx from 'clsx';
import { useNotifications } from 'reapop';

export default function ViewProductSub({ chosen_products_list, deliveryType, deliveryItemType }: { chosen_products_list: productsType[], deliveryType: typeof deliveriesType[number], deliveryItemType: typeof deliverableProducts[number] }) {
    const imgRef = useRef<HTMLImageElement>(null);
    const { data } = useAuth();
    const { notify } = useNotifications();
    const router = useRouter();
    const { makeSubscription } = useSubscriptions();


    const [chosenProduct, setChosenProduct] = useState<typeof chosen_products_list[0]>(chosen_products_list[0]);
    const [chosenFreq, setChosenFreq] = useState<freqs>(frequency[0].value);
    const [chosenGrind, setChosenGrind] = useState<typeof grindSizes[number]>("whole-beans");
    const [chosenSize, setChosenSize] = useState<number>(1);

    const [loading, setLoading] = useState<boolean>(false);

    const [discountedPrice, truePrice] = useMemo(() => {
        if (!chosenProduct) {
            return [0, 0];
        }
        const dels = parseInt(deliveryType.split("-")[0]);

        const discount = dels * chosenSize * chosenProduct.price * (discountInfo[deliveryType] / 100);
        const truePrice = dels * chosenSize * chosenProduct.price;
        return [Math.round(truePrice - discount), truePrice]
    }, [chosenProduct, chosenSize, deliveryType]);



    const handleFreqChg = (e: ChangeEvent<HTMLSelectElement>) => {
        const chosenVal = parseInt(e.target.value);

        setChosenFreq((prev) => {
            const myVal = freq_vals.find(val => val === chosenVal)
            return typeof myVal === "undefined" ? prev : myVal
        })
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

    const handleImgZMPN: MouseEventHandler<HTMLImageElement> = function (e: any) {
        imgRef.current && imgPanZoomCalculator(imgRef.current, e as MouseEvent)
    }

    const handleImgZMPNTch: TouchEventHandler<HTMLImageElement> = function (e: any) {
        imgRef.current && imgPanZoomCalculator(imgRef.current, e as TouchEvent)
    }

    const subscribe = () => {
        setLoading(true)
        if (data.auth === "loading") {
            notify("Servers are full. Please try again later", "warning", { dismissAfter: 3 * 1000 });
            setLoading(false);
            return;
        }
        if (data.auth !== "auth") {
            notify("Please Login First.", "error", { dismissAfter: 3 * 1000 });
            setLoading(false);
            return;
        }

        makeSubscription({ productId: chosenProduct.id, productName: chosenProduct.name, size: chosenSize, gsize: deliveryItemType === "coffee" ? chosenGrind : undefined, category: chosenProduct.category as any, price: discountedPrice }, chosenFreq, deliveryType);

        notify("Subscription is made successfully", "success", { dismissAfter: 3 * 1000 });

        router.push(URL_LIST.home.path);
    }

    return (
        <div className={styles.subscribePage}>
            <div className={styles.sect1}>
                <div className={styles.brdcrmb_cont}>
                    <BreadCrumb current={deliveryType.replace("-", " ")} parents={[{ ...URL_LIST.subscribe, label: "Subscriptions" }]} />
                </div>
                <div className={styles.img_container}>
                    <Image src={URL_LIST.shop.imagePath(chosenProduct.category as any, chosenProduct.id)} alt={chosenProduct.name} priority quality={100} onMouseMove={handleImgZMPN} onTouchMove={handleImgZMPNTch} ref={imgRef} width={1000} height={650} />
                </div>
                <div className={clsx(styles.pageTitle, styles.name)}>
                    <span>{chosenProduct.name}</span>
                    <span>-</span>
                    <span>{chosenProduct.roast} Roast</span>
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
                    <div style={{ marginTop: "-15px", marginBottom: "15px" }}>
                        <InfoBanner text='Free Delivery for all orders above Rs. 1200' />
                    </div>
                    <button onClick={subscribe} disabled={loading}>
                        {
                            loading ? "....." : (<>
                                Subscribe
                                <FiChevronsRight />
                            </>)
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
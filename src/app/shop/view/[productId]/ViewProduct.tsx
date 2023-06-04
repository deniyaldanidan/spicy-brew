'use client';

import { deliverableProducts, grindSizes, productsType } from '@/custTypes';
import styles from './index.module.scss';
import Image from 'next/image';
import URL_LIST from '@/url';
import SelectGrp from '@/app/components/SelectGrp';
import React, { ChangeEvent, MouseEventHandler, useRef, useState } from 'react';
import InfoBanner from '@/app/components/InfoBanner';
import { between, imgPanZoomCalculator } from '@/libs/helpers';
import { discountInfo } from '@/app/subscribe/data';
import Link from 'next/link';


export default function ViewProduct({ product, crumb }: { product: productsType, crumb: React.JSX.Element }) {
    const [chosenGrind, setChosenGrind] = useState<typeof grindSizes[number]>(grindSizes[0]);
    const [chosenQty, setChosenQty] = useState<number>(1);
    const imgRef = useRef<HTMLImageElement>(null);


    const handleGrindChg = (e: ChangeEvent<HTMLSelectElement>) => {
        if (grindSizes.find(grd => grd === e.target.value)) {
            setChosenGrind(e.target.value as any)
        }
    }

    const handleQtyChg = (e: ChangeEvent<HTMLSelectElement>) => {
        const mySize = parseInt(e.target.value);
        between(mySize, 1, 3) && setChosenQty(mySize);
    }

    const handleImgZMPN: MouseEventHandler<HTMLImageElement> = (e) => {
        imgRef.current && imgPanZoomCalculator(imgRef.current, e);
    }

    return (
        <div className={styles.viewPage}>
            <div className={styles.section1}>
                <Image src={URL_LIST.shop.imagePath(product.category, product.id)} alt={product.name} width={1100} height={700} priority onMouseMove={handleImgZMPN} ref={imgRef} />
            </div>
            <div className={styles.section2}>
                {crumb}
                <div className={styles.sec_title}>{product.name}</div>
                {
                    product?.flavors?.length ? (
                        <div className={styles.sub_title}>
                            {
                                product.flavors.map(flv => <span key={flv}>{flv}</span>)
                            }
                        </div>
                    ) : ""
                }
                <div className={styles.description}>{product.description}</div>
                {
                    deliverableProducts.find(prd => prd === product.category)?.length ? (
                        <div className={styles.sub_title}>{product?.roast} Roast</div>
                    ) : ""
                }
                {
                    product.category === "coffee" ? (
                        <SelectGrp
                            inpName='Grind Size'
                            inpId='grind'
                            changeHandle={handleGrindChg}
                            optList={grindSizes.map(grnd => ({ label: grnd.replaceAll("-", " "), value: grnd }))}
                        />
                    ) : ""
                }
                <SelectGrp
                    inpName='Quantity'
                    inpId='quantity'
                    changeHandle={handleQtyChg}
                    optList={[1, 2, 3].map(qty => (
                        {
                            label: `${product.quantity.value * qty} ${product.quantity.units}`,
                            value: `${qty}`
                        }))}
                />
                <div className={styles.price}>Rs. {product.price * chosenQty}</div>
                <InfoBanner text='Free delivery for all orders above Rs. 1200' />
                <div className={styles.btn_grps}>
                    <button className={styles.primary}>
                        <span>Buy Now</span>
                    </button>
                    <button className={styles.secondary}>
                        <span>Add To Cart</span>
                    </button>
                </div>
                {
                    deliverableProducts.find(ptype => ptype === product.category)?.length ? (
                            <Link className={styles.subscribe_link} href={URL_LIST.subscribe.path}>Subscribe & Save upto {discountInfo['12-delivery']}%</Link>
                    ) : ""
                }
            </div>
        </div>
    )
}
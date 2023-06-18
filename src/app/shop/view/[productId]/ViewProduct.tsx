'use client';

import { deliverableProducts, deliveryPriceLimit, grindSizes, maxProductLimit, productsType } from '@/custTypes';
import styles from './index.module.scss';
import Image from 'next/image';
import URL_LIST from '@/url';
import SelectGrp from '@/app/components/SelectGrp';
import React, { ChangeEvent, MouseEventHandler, useMemo, useRef, useState } from 'react';
import InfoBanner from '@/app/components/InfoBanner';
import { between, imgPanZoomCalculator } from '@/libs/helpers';
import { discountInfo } from '@/app/subscribe/data';
import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';
import { useCart } from '@/app/context/CartContext';
import { useNotifications } from 'reapop';
import { useRouter } from 'next/navigation';


export default function ViewProduct({ product, crumb }: { product: productsType, crumb: React.JSX.Element }) {
    const [chosenGrind, setChosenGrind] = useState<typeof grindSizes[number]>(grindSizes[0]);
    const [chosenQty, setChosenQty] = useState<number>(1);
    const imgRef = useRef<HTMLImageElement>(null);

    const { data } = useAuth();
    const { items: cartItems, addItem } = useCart();
    const { notify } = useNotifications();
    const router = useRouter();



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

    const inCart: number = useMemo(() => {
        const currItem = cartItems.find(itm => {
            if (product.category === "coffee") {
                return (itm.productId === product.id) && (itm?.grindsize === chosenGrind)
            }
            return itm.productId === product.id
        })
        return currItem?.id?.length ? currItem.qty : 0
    }, [cartItems, chosenGrind, product])

    const addToCartFN = () => {
        if (data.auth === "loading"){
            notify("Servers are full. Please try again later", "warning", {dismissAfter: 4*1000})
            return ;
        }
        if (data.auth !== "auth") {
            notify("please login in first", "error", { dismissAfter: 3 * 1000 });
            return;
        }

        if ((inCart + chosenQty) <= maxProductLimit) {
            addItem({ productId: product.id, qty: chosenQty, grindsize: product.category === "coffee" ? chosenGrind : undefined })
            notify(`${product.name} is added to cart`, "success", { dismissAfter: 3 * 1000 });
            return;
        }
        notify("Maximum limit is reached.", "error", { dismissAfter: 4 * 1000 })
    }

    const buyFN = ()=>{
        if (data.auth === "loading"){
            notify("Servers are full. Please try again later", "warning", {dismissAfter: 4*1000})
            return ;
        }
        if (data.auth !== "auth"){
            notify("please login in first", "error", { dismissAfter: 3 * 1000 });
            return;
        }

        if (!(inCart >= maxProductLimit)){
            console.log("Adding to cart");
            addItem({productId: product.id, qty: chosenQty, grindsize: product.category === "coffee" ? chosenGrind: undefined});
        }
        router.push(URL_LIST.cart.path);
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
                <InfoBanner text={`Free delivery for all orders above Rs. ${deliveryPriceLimit}`} />
                <div className={styles.inCart_info}>
                    <div>
                        <strong>In Cart: </strong>
                        <span>
                            { inCart * product.quantity.value } {product.quantity.units}
                        </span>
                    </div>
                    <div>
                        <strong>Max Limit: </strong>
                        <span>
                            {maxProductLimit * product.quantity.value} {product.quantity.units}
                        </span>
                    </div>
                </div>
                <div className={styles.btn_grps}>
                    <button className={styles.primary} onClick={buyFN}>
                        {inCart >= maxProductLimit ? "View Cart": "Buy Now"}
                    </button>
                    <button className={styles.secondary} onClick={addToCartFN} disabled={inCart + chosenQty > maxProductLimit}>
                        Add To Cart
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
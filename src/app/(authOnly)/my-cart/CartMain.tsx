"use client";

import { useCart } from "@/app/context/CartContext";
import URL_LIST from "@/url";
import Link from "next/link";
import styles from './cartmain.module.scss';
import { deliveryPrice, deliveryPriceLimit, maxProductLimit, newProductObj } from "@/custTypes";
import products from '@/products.json';
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useMemo } from "react";
import useOrders from "@/app/context/OrderContext";
import { useNotifications } from "reapop";
import { useRouter } from "next/navigation";



export default function CartMain() {
    const { items, resetCart } = useCart();
    const {makeOrder} = useOrders();
    const {notify} = useNotifications();
    const router = useRouter()

    useEffect(()=>{
        router.prefetch(URL_LIST.home.path)
    }, [router])

    const myItems: newProductObj[] = useMemo(() => {
        const newItems: newProductObj[] = [];

        items.forEach(itm => {
            const myProduct = products.find(prd => prd.id === itm.productId);
            if (typeof myProduct === "undefined") {
                return undefined;
            }
            const n: newProductObj = {
                id: itm.id,
                product_name: myProduct.name,
                grindsize: itm.grindsize,
                product_price: myProduct.price,
                product_qty: myProduct.quantity.value,
                product_unit: myProduct.quantity.units,
                size: itm.qty,
            };
            newItems.push(n)
        })
        return newItems;
    }, [items]);

    const subTotal: number = useMemo(() => {
        return myItems.reduce((prev, curr) => prev + (curr.product_price * curr.size), 0)
    }, [myItems]);

    const checkout = ()=>{
        if (items?.length){
            makeOrder(myItems);
            notify("Order is successfully made", "success", {dismissAfter: 3*1000})
            resetCart();
            router.push(URL_LIST.home.path);
        }
    }


    return (
        !items.length ? <div className={styles.empty_notify}>Your cart is empty. <Link href={URL_LIST.shop.path}>Fill it up</Link></div> : (
            <div className={styles.view_cart}>
                <div className={styles.cart_items}>
                    {myItems.map(item => <CartItem key={item.id} item={item} />)}
                </div>
                <div className={styles.cart_stats}>
                    <div className={styles.stat}>
                        <span>SubTotal </span>
                        <span>Rs. {subTotal}</span>
                    </div>
                    <div className={styles.stat}>
                        <span>Delivery </span>
                        <span>Rs. {subTotal >= deliveryPriceLimit ? 0 : deliveryPrice}</span>
                    </div>
                    <div className={styles.stat}>
                        <span>Total </span>
                        <span>Rs. {subTotal >= deliveryPriceLimit ? subTotal : deliveryPrice + subTotal}</span>
                    </div>
                    <button onClick={checkout} >Checkout</button>
                </div>
            </div>
        )
    )
}


function CartItem({ item }: { item: newProductObj }) {
    const { manipulateItem, removeItem } = useCart();

    return (
        <div className={styles.cart_item}>
            <div className={styles.sec_1}>
                <div className={styles.item_info}>
                    <div className={styles.item_name}>{item.product_name}</div>
                    {item.grindsize ? <div className={styles.item_gsize}>{item.grindsize.replaceAll("-", " ")}</div> : ""}
                </div>
                <div className={styles.price_per_unit}>Rs.{item.product_price} per {item.product_qty} {item.product_unit}</div>
            </div>
            <div className={styles.sec_2}>
                <div className={styles.itm_btns}>
                    <div className={styles.itm_incr_decr}>
                        <button
                            onClick={() => manipulateItem(item.id, "incr")}
                            className={styles.icon_btn}
                            disabled={item.size >= maxProductLimit}
                        >
                            <AiFillPlusCircle />
                        </button>
                        <span className={styles.qty_value}>
                            {item.size * item.product_qty} {item.product_unit}
                        </span>
                        <button
                            onClick={() => manipulateItem(item.id, "decr")}
                            className={styles.icon_btn}
                            disabled={item.size <= 1}
                        >
                            <AiFillMinusCircle />
                        </button>
                    </div>
                    <div onClick={() => removeItem(item.id)} className={styles.itm_delete_btn}>remove</div>
                </div>
                <div className={styles.itm_total_price}>Rs. {item.product_price * item.size}</div>
            </div>
        </div>
    )
}
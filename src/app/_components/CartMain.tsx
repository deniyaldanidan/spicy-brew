"use client";

import styles from '@/styles/components/cartmain.module.scss';
import "@/styles/cartItem.scss";
import CartItem from "@/app/_components/CartItem";
import { useCart } from "@/context/CartContext";
import useOrders from "@/context/OrderContext";
import URL_LIST from "@/url";
import { deliveryPrice, deliveryPriceLimit, newProductObj } from "@/custTypes";
import products from '@/data/products.json';
import Link from "next/link";
import { useEffect, useMemo } from "react";
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
                category: myProduct.category as any,
                product_id: myProduct.id
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



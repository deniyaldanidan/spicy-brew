'use client';

import styles from './index.module.scss';
import useOrders from "@/app/context/OrderContext";
import Link from "next/link";
import URL_LIST from "@/url";
import { deliveryPrice, deliveryPriceLimit, orderDataType } from "@/custTypes";
import useCheckOrderStatus from "@/hooks/useCheckOrderStatus";
import { useMemo } from "react";


export default function Page() {
    const { orders } = useOrders();

    return (
        <div className={styles.page}>
            <div className={styles.pg_head}>My Orders</div>
            {orders.length ? (
                <div className={styles.orders_container}>
                    {
                        orders.map(ord => <OrderCard order={ord} key={ord.id} />)
                    }
                </div>
            ) : <div className={styles.orders_empty_info}>No orders are made Yet! <Link href={URL_LIST.shop.path}>Start Shopping</Link> </div>}
        </div>

    )
}

function OrderCard({ order }: { order: orderDataType }) {

    const { placed, delivered } = useCheckOrderStatus(new Date(order.orderedDate));


    const subTotal: number = useMemo(() => {
        return order.items.reduce((prev, curr) => prev + (curr.product_price * curr.size), 0)
    }, [order.items]);

    return (
        <div className={styles.order_card}>
            <div className={styles.card_content}>
                <div className={styles.cont1}>
                    <div className={styles.card_info1}>
                        <div className={styles.card_title}>Order #{order.id}</div>
                        <div className={styles.card_placed}>Placed: {placed.dt_string}</div>
                    </div>
                    <div className={styles.card_delivery}>{delivered.done ? `Delivered: ${delivered.dt_string}` : `Est. Delivery: ${delivered.dt_string}`}</div>
                </div>
                <div className={styles.cont2}>
                    <div className={styles.card_items}>({order.items.length} items)</div>
                    <div className={styles.card_price}>₹ {subTotal >= deliveryPriceLimit ? subTotal : deliveryPrice + subTotal}</div>
                </div>
            </div>
            <Link href={URL_LIST.myOrders.child(order.id)}>View</Link>
        </div>
    )
}
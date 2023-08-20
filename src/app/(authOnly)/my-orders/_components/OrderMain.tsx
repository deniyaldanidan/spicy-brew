"use client";

import styles from '@/styles/_pages/my-orders.module.scss';
import '@/styles/components/order-card.scss';
import OrderCard from '@/app/_components/OrderCard';
import useOrders from "@/context/OrderContext";
import URL_LIST from "@/url";
import Link from "next/link";

export default function OrderMain() {
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
"use client";

import styles from '@/styles/_pages/myOrderId.module.scss';
import '@/styles/orderItem.scss';
import OrderItem from '@/app/_components/OrderItem';
import BreadCrumb from '@/app/_components/BreadCrumb';
import OrderProgressBar from '@/app/_components/OrderProgressBar';
import useOrders from "@/context/OrderContext";
import useCheckOrderStatus from "@/hooks/useCheckOrderStatus";
import URL_LIST from '@/url';
import { deliveryPrice, deliveryPriceLimit } from '@/custTypes';

import { notFound } from "next/navigation";
import { useMemo } from 'react';

export default function Page({ params }: { params: { orderId: string } }) {

    const { orders } = useOrders();

    const order = useMemo(() => orders.find(ord => ord.id === params.orderId), [params.orderId, orders]);

    if (!order) {
        notFound();
    }

    const { placed, confirmed, shipped, delivered } = useCheckOrderStatus(new Date(order.orderedDate));

    const subTotal: number = useMemo(() => {
        return order.items.reduce((prev, curr) => prev + (curr.product_price * curr.size), 0)
    }, [order.items]);

    return (
        <div className={styles.page}>
            <BreadCrumb current="order" parents={[{ path: URL_LIST.myOrders.path, label: "My Orders" }]} />

            <div className={styles.pg_head}>Order #{order.id}</div>
            <div className={styles.order_smry}>
                <div className={styles.sec_head}>Order Activity</div>
                <OrderProgressBar dts={{ placed, confirmed, shipped, delivered }} />
            </div>
            <div className={styles.payment_smry}>
                <div className={styles.sec_head}>Payment Summary</div>
                <div className={styles.pymnt_cnts}>
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
                </div>
            </div>
            <div className={styles.order_itms_sec}>
                <div className={styles.sec_head}>Ordered Items:</div>
                <div className={styles.itms_list}>
                    {
                        order.items.map((itm) => <OrderItem key={itm.id} item={itm} />)
                    }
                </div>
            </div>
        </div>
    )
}



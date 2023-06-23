'use client';

import useOrders from "@/app/context/OrderContext";
import styles from './index.module.scss';
import Link from "next/link";
import URL_LIST from "@/url";
import { deliveryPrice, deliveryPriceLimit, orderDataType } from "@/custTypes";
import useCheckOrderStatus from "@/hooks/useCheckOrderStatus";
import { useMemo } from "react";


export default function Page() {
    const { orders } = useOrders();

    return (
        <div>
            <div>My Orders</div>
            {orders.length ? (
                <div className={styles.orders_container}>
                    {
                        orders.map(ord => <OrderCard order={ord} key={ord.id} />)
                    }
                </div>
            ) : <div>No orders are made Yet! <Link href={URL_LIST.shop.path}>Start Shopping</Link> </div>}
        </div>

    )
}

function OrderCard({ order }: { order: orderDataType }) {

    const { placed, delivered } = useCheckOrderStatus(new Date(order.orderedDate));


    const subTotal: number = useMemo(() => {
        return order.items.reduce((prev, curr) => prev + (curr.product_price * curr.size), 0)
    }, [order.items]);

    return (
        <div>
            <div>
                <div>
                    <div>Order #{order.id}</div>
                    <div>Placed on {placed.dt_string}</div>
                    <div>{delivered.done ? `Delivered on ${delivered.dt_string}` : `Est. Delivery on ${delivered.dt_string}`}</div>
                </div>
                <div>
                    <div>({order.items.length} items)</div>
                    <div>{delivered.done ? (order.rating ? "Stars" : "Not Rated YET") : ""}</div>
                    <div>₹ {subTotal >= deliveryPriceLimit ? subTotal : deliveryPrice + subTotal}</div>
                </div>
            </div>
            <Link href={URL_LIST.myOrders.child(order.id)}>View</Link>
        </div>
    )
}
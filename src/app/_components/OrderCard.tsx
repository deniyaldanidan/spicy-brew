import useCheckOrderStatus from "@/hooks/useCheckOrderStatus";
import { deliveryPrice, deliveryPriceLimit, orderDataType } from "@/custTypes";
import { useMemo } from "react";
import URL_LIST from "@/url";
import Link from "next/link";

/**
 * @requires /styles/components/order-card.scss
 */
export default function OrderCard({ order }: { order: orderDataType }) {

    const { placed, delivered } = useCheckOrderStatus(new Date(order.orderedDate));

    const subTotal: number = useMemo(() => {
        return order.items.reduce((prev, curr) => prev + (curr.product_price * curr.size), 0)
    }, [order.items]);

    return (
        <Link href={URL_LIST.myOrders.child(order.id)} className="order_card">
            <div className="cont1">
                <div className="card_info1">
                    <div className="card_title">Order #{order.id}</div>
                    <div className="card_placed">Placed: {placed.dt_string}</div>
                </div>
                <div className="card_delivery">{delivered.done ? `Delivered: ${delivered.dt_string}` : `Est. Delivery: ${delivered.dt_string}`}</div>
            </div>
            <div className="cont2">
                <div className="card_items">({order.items.length} items)</div>
                <div className="card_price">₹ {subTotal >= deliveryPriceLimit ? subTotal : deliveryPrice + subTotal}</div>
            </div>
        </Link>
    )
}
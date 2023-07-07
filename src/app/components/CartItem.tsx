"use client";

import { maxProductLimit, newProductObj } from "@/custTypes";
import { useCart } from "../context/CartContext";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

/**
*   @requires add cartItem.scss for styling
*/
export default function CartItem({ item }: { item: newProductObj }) {
    const { manipulateItem, removeItem } = useCart();

    return (
        <div className="cart_item">
            <div className="cart_itm_sec_1">
                <div className="cart_itm_item_info">
                    <div className={"item_name"}>{item.product_name}</div>
                    {item.grindsize ? <div className="item_gsize">{item.grindsize.replaceAll("-", " ")}</div> : ""}
                </div>
                <div className="cart_itm_price_per_unit">Rs.{item.product_price} per {item.product_qty} {item.product_unit}</div>
            </div>
            <div className="cart_itm_sec_2">
                <div className="cart_itm_itm_btns">
                    <div className="cart_itm_itm_incr_decr">
                        <button
                            onClick={() => manipulateItem(item.id, "incr")}
                            className="cart_itm_icon_btn"
                            disabled={item.size >= maxProductLimit}
                        >
                            <AiFillPlusCircle />
                        </button>
                        <span className="cart_itm_qty_value">
                            {item.size * item.product_qty} {item.product_unit}
                        </span>
                        <button
                            onClick={() => manipulateItem(item.id, "decr")}
                            className="cart_itm_icon_btn"
                            disabled={item.size <= 1}
                        >
                            <AiFillMinusCircle />
                        </button>
                    </div>
                    <div onClick={() => removeItem(item.id)} className="cart_itm_itm_delete_btn" >remove</div>
                </div>
                <div className="cart_itm_itm_total_price">Rs. {item.product_price * item.size}</div>
            </div>
        </div>
    )
}
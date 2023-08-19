import { newProductObj } from "@/custTypes";
import URL_LIST from "@/url";
import Image from "next/image";

/**
* @description A Component to showcase Ordered-Items 

* import `@/styles/orderItem.scss` for styling
*/
export default function OrderItem({ item }: { item: newProductObj }) {

    return (
        <div className="order-item">
            <Image src={URL_LIST.shop.imagePath(item.category, item.product_id)} alt={item.product_name} width={240} height={150} style={{ objectFit: "cover" }} />

            <div className="order-item-contents">
                <div className="order-item-metag1">
                    <span>{item.product_name}</span>
                    {item.grindsize ?<> <span>-</span> <span>{item.grindsize.replaceAll("-", " ")}</span> </>: ""}
                </div>
                <div className="order-item-metag2">
                    <div className="order-item-qty">{item.size} x {item.product_qty}{item.product_unit}</div>
                    <div className="order-item-price">₹ {item.product_price * item.size}</div>
                </div>
            </div>
        </div>
    )
}
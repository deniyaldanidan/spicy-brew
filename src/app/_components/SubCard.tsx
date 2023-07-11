import { subVal } from "@/custTypes";
import { date_formatter_1 } from "@/libs/helpers";
import URL_LIST from "@/url";
import Image from "next/image";
import Link from "next/link";
import { FaAnglesRight } from "react-icons/fa6";


/**
 * @requires /styles/components/sub-card.scss
 */
export default function SubCard({ subInfo }: { subInfo: subVal }) {
    const { item: subItem, deliveryType, timeStamp: subTimeStamp, id: subID } = subInfo;
    const { category: productCategory, productId, productName, price: productPrice, gsize } = subItem;

    return (
        <div className="sub_card">
            <Image src={URL_LIST.shop.imagePath(productCategory as any, productId)} alt={productName} width={270} height={180} style={{ objectFit: "cover" }} />
            <div className="card_content">
                <div className="prod_name"><span>{productName}</span>{gsize?.length ? <><span> - </span><span>{gsize.replace("-", " ")}</span></> : ""}</div>
                <div className="prod_date">Started on: {date_formatter_1(new Date(subTimeStamp))}</div>
                <div className="card_meta">
                    <div>{deliveryType.replace("-", " ")}</div>
                    <div>₹ {productPrice}</div>
                </div>
                <Link
                    href={URL_LIST.mySubscriptions.child(subID)}
                    className="card_link"
                >
                    <span>more details</span>
                    <FaAnglesRight className="link_icon" />
                </Link>
            </div>
        </div>
    )
}
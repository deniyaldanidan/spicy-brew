import Image from "next/image";
import Link from "next/link";
import { productsType } from "@/custTypes";
import URL_LIST from "@/url";

type props = {
    item: productsType
}

/**
 * 
 * @requires card1.scss This component requires the mentioned scss file. Which is in src/styles/components/card1.scss
 */
export default function Card1(props: props): JSX.Element {
    const { name, roast, price, category, id } = props.item;

    return (
        <div className="prod_card_1">
            <Image src={URL_LIST.shop.imagePath(category, id)} alt={name} height={200} width={400} />
            <div className="prod_card_1_contents">
                <div className="prod_card_1_cnts_title">{name}</div>
                {
                    roast?.length ? <div className="prod_card_1_cnts_roast">{roast} Roast</div> : ""
                }
                
            </div>
            <Link href={URL_LIST.shop.viewPath(id)} className="prod_card_1_footer">
                <span>Rs. {price}</span>
                <span>View Product</span>
            </Link>
        </div>
    )
}

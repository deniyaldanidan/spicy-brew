import Image from "next/image";
import styles from './index.module.scss';
import Link from "next/link";
import { productsType } from "@/custTypes";
import URL_LIST from "@/url";

type props= {
    item: productsType,
    height: number
}

export default function Card1 (props:props):JSX.Element{
    const {name, roast, flavors, price, category, id} = props.item;
    
    return (
        <div className={styles.card}>
            <Image src={URL_LIST.shop.imagePath(category, id)} alt={name} height={props.height} width={400} />
            <div className={styles.contents}>
                <div className={styles.title}>{name}</div>
                {
                    roast?.length ? <div className={styles.roast}>{roast} Roast</div> : ""
                }
                {
                    flavors?.length ? <div className={styles.flavors}>{flavors.map(flavor=><span key={flavor}>{flavor}</span>)}</div> : ""
                }
            </div>
            <Link href="#" className={styles.footer}>View Product ₹{price}</Link>
        </div>
    )
}
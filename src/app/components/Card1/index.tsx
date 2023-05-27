import Image from "next/image";
import styles from './index.module.scss';
import Link from "next/link";
import { productsType } from "@/custTypes";
import URL_LIST from "@/url";

type props = {
    item: productsType
}

export default function Card1(props: props): JSX.Element {
    const { name, roast, flavors, price, category, id } = props.item;

    return (
        <div className={styles.card}>
            <Image src={URL_LIST.shop.imagePath(category, id)} alt={name} height={200} width={400} />
            <div className={styles.contents}>
                <div className={styles.title}>{name}</div>
                {
                    roast?.length ? <div className={styles.roast}>{roast} Roast</div> : ""
                }
                
            </div>
            <Link href={URL_LIST.shop.viewPath(id)} className={styles.footer}>
                <span>Rs. {price}</span>
                <span>View Product</span>
            </Link>
        </div>
    )
}

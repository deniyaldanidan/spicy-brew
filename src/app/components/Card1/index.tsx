import Image, { StaticImageData } from "next/image";
import styles from './index.module.scss';
import Link from "next/link";

type props= {
    item: {
        image: StaticImageData;
        name: string;
        roast: string;
        flavors: string[];
        price: number;
    },
    height: number
}

export default function Card1 (props:props):JSX.Element{
    const {image, name, roast, flavors, price} = props.item;
    
    return (
        <div className={styles.card}>
            <Image src={image} alt={name} style={{height:`${props.height}px`}} />
            <div className={styles.contents}>
                <div className={styles.title}>{name}</div>
                <div className={styles.roast}>{roast} Roast</div>
                <div className={styles.flavors}>{flavors.map(flavor=><span key={flavor}>{flavor}</span>)}</div>
            </div>
            <Link href="#" className={styles.footer}>View Product ₹{price}</Link>
        </div>
    )
}
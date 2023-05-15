import React from "react";
import Image from "next/image";
import styles from './index.module.scss';
import { categoryContent } from "../data";
import Link from "next/link";



export default function ShopCategory(): React.JSX.Element {
    return (
        <div className={styles.category}>
            <div className={styles.title}>
                Shop By Category
            </div>
            <div className={styles.contents}>
                {
                    categoryContent.map(cont => (
                        <Link href={cont.path} className={styles.content} key={cont.label}>
                            <Image src={cont.image} alt={cont.label} quality={50} />
                            <p>{cont.label}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
import React from "react";
import styles from './index.module.scss';
import illustration from '../../../assets/bestsellers.svg';
import Image from "next/image";
import Link from "next/link";
import ItemsCarousel from "./ItemsCarousel";
import URL_LIST from "@/url";



export default function BestSellers(): React.JSX.Element {
    return (
        <div className={styles.bestsellers}>
            <div className={styles.title}>Bestsellers</div>
            <div className={styles.contents}>
                <div className={styles.infoCont}>
                    <p>Experience the delight of our top-rated coffees, adored by our customers. Discover your ideal flavor and join our love for exceptional coffee.</p>
                    <Image src={illustration} alt="bestsellers" quality={50} />
                    <Link href={URL_LIST.shop.path} className={styles.exploreBtn}>
                        Explore All
                    </Link>
                </div>
                <div className={styles.carouselWrapper}>
                    <ItemsCarousel />
                </div>
            </div>
        </div>
    )
}
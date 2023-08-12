import React from "react";
import styles from './index.module.scss';
import Link from "next/link";
import ItemsCarousel from "./ItemsCarousel";
import URL_LIST from "@/url";
import { bestsellers } from "../data";
import Card1 from "@/app/_components/Card1";
import '../../../../styles/components/card1.scss';



export default function BestSellers(): React.JSX.Element {
    return (
        <div className={styles.bestsellers}>
            <div className={styles.title}>Bestsellers</div>
            <div className={styles.descr}>Discover the delight of our top-rated coffees, beloved by our customers, and find your perfect flavor in our world of exceptional coffee.</div>
            <div className={styles.carouselWrapper}>
                <ItemsCarousel>
                    {bestsellers.map(item => (
                        <div key={item.id}>
                            <Card1 item={item as any} />
                        </div>
                    ))}
                </ItemsCarousel>
            </div>
            <Link href={URL_LIST.shop.path} className={styles.exploreBtn}>
                Explore All
            </Link>
        </div>
    )
}
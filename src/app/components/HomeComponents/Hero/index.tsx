import React from "react";
import styles from './index.module.scss';
import Link from "next/link";
import { TiChevronRight } from 'react-icons/ti';
import {IoIosStar, IoMdStarHalf} from 'react-icons/io';



export default function Hero(): React.JSX.Element {
    return (
        <div className={styles.hero}>
            <div className={styles.heroContents}>
                <div className={styles.title}>
                    Start your day on the right note with our delicious coffee
                </div>
                <div className={styles.subHead}>
                    Discover the world of coffee with our carefully selected blends. From exotic origins to unique roasts, we bring you the best coffee experience.
                </div>
                <Link className={styles.actionBtn} href="/shop">Shop now <TiChevronRight className={styles.actionIcon} /></Link>
                <div className={styles.rating}>
                    <div className={styles.ratingStars}>
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoMdStarHalf />
                    </div>
                    <div className={styles.ratingText}>
                        4.5 out of 5 Overall star rating for all local business
                    </div>
                </div>
            </div>
        </div>
    );
}
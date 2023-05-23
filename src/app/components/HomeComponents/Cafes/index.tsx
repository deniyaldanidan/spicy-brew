import Image from "next/image";
import React from "react";
import cafeHome from '@/assets/cafe-home-1.svg';
import Link from "next/link";

import styles from './index.module.scss';
import URL_LIST from "@/url";

export default function Cafes():React.JSX.Element{
    return (
        <div className={styles.cafes}>
            <div className={styles.title}>Our Cafes</div>
            <div className={styles.main}>
                <Image src={cafeHome} alt="Our Cafes" />
                <p>With more than 100+ cafes located in several cities throughout India, you can always find a great cup of coffee nearby. Our cafe&apos;s are welcoming and inclusive spaces that are perfect for lively conversation and big ideas. We pride ourselves on serving the best coffee around, So you can always count on a delicious and satisfying experience. Come visit us and see for yourself.</p>
            </div>
            <Link href={URL_LIST.cafes.path}>visit our cafes</Link>
        </div>
    )
}
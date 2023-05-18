import React from "react";
import styles from './index.module.scss';
import Image from "next/image";
import cover from './assets/Our-Story-Cover.jpg';
import BreadCrumb from "@/app/components/BreadCrumb";



export default function Page(): React.JSX.Element {
    return (
        <div className={styles.story}>
            <BreadCrumb current="Our Story"/>
            <div className={styles.headSection}>
                <Image src={cover} quality={40} alt="Our Story" />
                <div className={styles.contents}>
                    <div className={styles.title}>Our Story</div>
                    <div className={styles.description}>Discover the story of Spicy Brew, a coffee brand with a passion for quality and sustainability.</div>
                </div>
            </div>

            <div>
                
            </div>
        </div>
    )
}
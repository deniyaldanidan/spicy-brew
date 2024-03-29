import styles from '@/styles/_pages/subscribe.module.scss';
import BreadCrumb from "@/app/_components/BreadCrumb";
import { discountInfo, subData } from "./_assets/data";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Subscriptions",
    description: "Enjoy freshly roasted coffee delivered straight to your door with our convenient subscription service. Choose your favorite blend, set your delivery schedule, and let us take care of the rest."
}

export default function Page(): React.JSX.Element {
    return (
        <div className={styles.subscribe_page}>
            <div className={styles.hero}>
                <div className={styles.brdcrmb_cont}>
                    <BreadCrumb current="Subscriptions" bright />
                </div>
                <div className={styles.hero_title}>Subscriptions</div>
                <div className={styles.hero_description}>
                    Enjoy freshly roasted coffee delivered straight to your door with our convenient subscription service. Choose your favorite blend, set your delivery schedule, and let us take care of the rest. Plus, with our subscription service, you&apos;ll save up to <strong>{discountInfo["12-delivery"]}%</strong> versus buying individual packets.
                </div>
            </div>
            <div className={styles.sub_main}>
                {
                    subData.map(item => (
                        <div className={styles.sub_sect} key={item.section}>
                            <div className={styles.left}>
                                <div className={styles.main_head}>{item.section}</div>
                                <Image src={item.image} alt="Coffee Bean" />
                            </div>
                            <div className={styles.offers}>
                                {
                                    item.offers.map(off => (
                                        <div className={styles.offer} key={off.label}>
                                            <div className={styles.offer_head}>{off.label} save <span>{off.discount}%</span></div>
                                            <Link href={off.link}>subscribe</Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
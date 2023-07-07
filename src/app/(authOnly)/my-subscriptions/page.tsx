"use client";

import styles from '@/app/styles/_pages/my-subscriptions.module.scss';

import useSubscriptions from "@/app/context/SubscriptionContext";
import { subVal } from "@/custTypes";
import { date_formatter_1 } from "@/libs/helpers";
import URL_LIST from "@/url";
import Image from "next/image";
import Link from "next/link";
import {FaAnglesRight} from 'react-icons/fa6';


export default function Page() {
    const { subs } = useSubscriptions();

    return (
        <div className={styles.page}>
            <div className={styles.pg_head}>My Subscriptions</div>
            {
                subs.length ? (
                    <div className={styles.cards_list}>
                        {
                            subs.map(sub => <SubCard key={sub.id} subInfo={sub} />)
                        }
                    </div>
                ) : (
                    <div className={styles.empty_notice}>Currently, there are no active subscriptions. <Link href={URL_LIST.subscribe.path}>Start Subscribing Now</Link></div>
                )
            }
        </div>
    )
}

function SubCard({ subInfo }: { subInfo: subVal }) {
    const { item: subItem, deliveryType, timeStamp: subTimeStamp, id: subID } = subInfo;
    const { category: productCategory, productId, productName, price: productPrice, gsize } = subItem;

    return (

        <div className={styles.sub_card}>

            <Image src={URL_LIST.shop.imagePath(productCategory as any, productId)} alt={productName} width={270} height={180} style={{ objectFit: "cover" }} />
            <div className={styles.card_content}>
                <div className={styles.prod_name}><span>{productName}</span>{gsize?.length ? <><span> - </span><span>{gsize.replace("-", " ")}</span></> : ""}</div>
                <div className={styles.prod_date}>Started on: {date_formatter_1(new Date(subTimeStamp))}</div>
                <div className={styles.card_meta}>
                    <div>{deliveryType.replace("-", " ")}</div>
                    <div>₹ {productPrice}</div>
                </div>
                <Link
                    href={URL_LIST.mySubscriptions.child(subID)}
                    className={styles.card_link}
                >
                    <span>more details</span>
                    <FaAnglesRight className={styles.link_icon} />
                </Link>
            </div>
        </div>
    )
}
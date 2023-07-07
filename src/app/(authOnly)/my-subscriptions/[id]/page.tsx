"use client";

import styles from '@/app/styles/_pages/id-my-subscriptions.module.scss';

import BreadCrumb from "@/app/components/BreadCrumb";
import useSubscriptions from "@/app/context/SubscriptionContext";
import { date_formatter_1, date_formatter_2, subscriptionDeliveryCalculator } from "@/libs/helpers";
import URL_LIST from "@/url";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useMemo } from "react";


export default function Page({ params }: { params: { id: string } }) {
    const { id: subId } = params;
    const { subs } = useSubscriptions();

    const mySub = useMemo(() => {
        return subs.find(sb => sb.id === subId);
    }, [subs, subId])

    if (typeof mySub === "undefined") {
        notFound()
    }

    const { item: { category: productCategory, productId, productName, price: productPrice, gsize: productGrindSize }, deliveryType, timeStamp: initialDate, frequency } = mySub;

    const deliveryDetails = subscriptionDeliveryCalculator(new Date(initialDate), deliveryType, frequency);

    return (
        <div className={styles.page}>
            <BreadCrumb current="subscription" parents={[{ path: URL_LIST.mySubscriptions.path, label: "My Subscriptions" }]} />

            <div className={styles.pg_hd}>Subscription #{subId}</div>
            <div className={styles.pg_cntnts}>
                <div className={styles.cntnts_sec}>
                    <div className={styles.cntnts_hd}>Product Details</div>
                    <Image src={URL_LIST.shop.imagePath(productCategory as any, productId)} alt={productName} width={750} height={600} />
                    <div className={styles.cntnts_main}>
                        <div className={styles.cntnt}><span>Product Name:</span> <span>{`${productName}${(productCategory === "coffee" && typeof productGrindSize !== "undefined") ? ` - ${productGrindSize.replace("-", " ")}` : ""}`}</span></div>
                        <div className={styles.cntnt}><span>Product Catgory:</span> <span>{productCategory.replace("_", " ")}</span></div>
                        <div className={styles.cntnt}><span>Price Paid:</span> <span>₹ {productPrice}</span></div>
                    </div>
                </div>
                <div className={styles.cntnts_sec}>
                    <div className={styles.cntnts_hd}>Subscription Summary</div>
                    <div className={styles.cntnts_main}>
                        <div className={styles.cntnt}><span>Chosen Delivery Frequency: </span> <span>once every {frequency} days.</span></div>
                        <div className={styles.cntnt}><span>Total Deliveries:</span> <span>{deliveryDetails.length}</span></div>
                        <div className={styles.cntnt}><span>Started Subscription on: </span> <span>{date_formatter_1(new Date(initialDate))}</span></div>
                        {
                            deliveryDetails.map(dtObj => <div key={dtObj.label} className={styles.cntnt}><span>{dtObj.label}:</span> <span>{date_formatter_2(dtObj.value)}</span></div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
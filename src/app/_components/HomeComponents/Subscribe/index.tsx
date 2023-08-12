import React from "react";
import styles from './index.module.scss';
import Link from "next/link";
import URL_LIST from "@/url";


export default function Subscribe():React.JSX.Element{
    return (
        <div className={styles.section}>
            <div className={styles.left}>
                <div className={styles.title}>Subscribe to our monthly coffee delivery</div>
                <div className={styles.description}>By Subscribing to our service, you can enjoy the convenience of regulary scheduled coffee deliveries. Choose from a wide range of coffee option to suit your taste and never run out of your favorite brew again.</div>
            </div>
            <div className={styles.right}>
                <div className={styles.offerHighlight}>Save upto 25% by subscribing</div>
                <ul>
                    <li>Choose your coffee</li>
                    <li>Set Your Schedule</li>
                    <li>Change Anytime</li>
                </ul>
                <Link href={URL_LIST.subscribe.path}>Subscribe now</Link>
            </div>
        </div>
    )
}
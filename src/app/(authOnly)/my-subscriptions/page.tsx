"use client";

import styles from '@/styles/_pages/my-subscriptions.module.scss';
import '@/styles/components/sub-card.scss';
import SubCard from '@/app/_components/SubCard';
import useSubscriptions from "@/context/SubscriptionContext";
import URL_LIST from "@/url";
import Link from "next/link";


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

export const dynamic = "force-dynamic";

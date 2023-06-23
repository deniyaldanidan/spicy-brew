"use client";

import { useAuth } from "@/app/context/AuthContext";
import useOrders from "@/app/context/OrderContext";
import useSubscriptions from "@/app/context/SubscriptionContext";
import URL_LIST from "@/url";
import Image from "next/image";
import Link from "next/link";
import styles from './index.module.scss';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { AiFillWarning } from "react-icons/ai";
import { useState } from "react";
import useLogout from "@/hooks/useLogout";
import { useCart } from "@/app/context/CartContext";
import { useNotifications } from "reapop";
import { useRouter } from "next/navigation";


const overlayVariants:Variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            type: "spring"
        }
    }
}

const modalVariants:Variants = {
    hidden: {
        scale: 0,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            type: "spring"
        }
    }
}


export default function Page() {
    const { data } = useAuth();
    const { orders } = useOrders();
    const { subs } = useSubscriptions();
    const [active, setActive] = useState<boolean>(false);
    const logoutHandler = useLogout();
    const {deleteLocalUser, resetCart} = useCart();
    const {resetOrders} = useOrders();
    const {resetSubscriptions} = useSubscriptions();
    const {notify} = useNotifications();
    const router = useRouter()

    const openModal = () => {
        setActive(true);
    }

    const closeModal = () => {
        setActive(false);
    }

    const deleteAcc = ()=>{
        router.replace("/");
        setTimeout(()=>{
            logoutHandler();
        }, 1000)

        setTimeout(()=>{
            deleteLocalUser();
            resetCart();
            resetOrders();
            resetSubscriptions();
            notify("Account is successfully deleted", "info", {dismissAfter: 4*1000})
        }, 2000)
    }

    return (
        <div className={styles.acc_pg}>
            <div className={styles.pg_head}>
                <Image
                    src={`https://picsum.photos/seed/${data.username}/250/250`}
                    width={120}
                    height={120}
                    alt={data?.username || "user pic"}
                    priority
                />
                <p>@{data.username}</p>
            </div>

            <div className={styles.pg_card_container}>
                <div className={styles.pg_card}>
                    <div className={styles.card_head}>Orders</div>
                    {
                        orders.length ? (
                            <>
                                <div className={styles.card_text}>You&apos;ve made {orders.length} orders</div>
                                <Link href={URL_LIST.myOrders.path} prefetch={true}>View All</Link>
                            </>
                        ) : (
                            <>
                                <div className={styles.card_text}>You haven&apos;t made any orders yet!</div>
                                <Link href={URL_LIST.shop.path} prefetch={true} >Shop Now</Link>
                            </>
                        )
                    }
                </div>
                <div className={styles.pg_card}>
                    <div className={styles.card_head}>Subscriptions</div>
                    {
                        subs.length ? (
                            <>
                                <div className={styles.card_text}>You currently have {subs.length} active subscriptions.</div>
                                <Link href={URL_LIST.mySubscriptions.path} prefetch={true}>View All</Link>
                            </>
                        ) : (
                            <>
                                <div className={styles.card_text}>You have no active subscriptions.</div>
                                <Link href={URL_LIST.subscribe.path} prefetch={true} >Start Subscribing</Link>
                            </>
                        )
                    }
                </div>
            </div>

            <motion.button className={styles.acc_del_btn} whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(92, 5, 18, 0.65)", textShadow: "0px 0px 8px rgba(92, 5, 18, 0.4)", transition: { duration: 0.75, repeat: Infinity, repeatType: "reverse" } }} onClick={openModal} >
                Delete My Account
            </motion.button>

            <AnimatePresence initial={false}>
                {!active ? "" : (
                    <motion.div className={styles.modal_overlay} variants={overlayVariants} initial="hidden" animate="visible" exit="hidden" >
                        <motion.div className={styles.modal} style={{x: "-50%", y: "-25%"}} variants={modalVariants} >
                            <div className={styles.modal_head}><AiFillWarning /> <span>Account Deletion Warning</span></div>
                            <div className={styles.modal_text}>
                                Proceeding will permanently delete your account and all associated data. Confirm below to acknowledge this irreversible action.
                            </div>
                            <div className={styles.btn_grp}>
                                <button onClick={closeModal}>Cancel</button>
                                <button onClick={deleteAcc}>Yes, Delete My Account</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    )
}
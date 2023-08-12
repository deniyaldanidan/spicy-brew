"use client";

import styles from '@/styles/components/loginModal.module.scss';
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { MouseEvent, useCallback, useRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import LoginForm from './LoginForm';


export default function LoginModal() {
    const router = useRouter();
    const overlay = useRef<HTMLDivElement>(null);

    const closeModal = useCallback(() => {
        router.back()
    }, [router])

    const onClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
        if (e.target === overlay.current) {
            closeModal && closeModal()
        }
    }, [closeModal])


    return (
        <motion.div className={styles.login_modal_container} ref={overlay} onClick={onClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}>
            <motion.div className={styles.login_modal} style={{ x: "-50%", y: "-50%" }} initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25 }}>
                <div className={styles.login_pg}>
                    <div className={styles.s_1}>
                        <div className={styles.title}>Welcome to Spicy Brew</div>
                        <div className={styles.desc}>Simply provide any username. No password is required. Info entered will not be stored or used beyond this demo.</div>
                    </div>
                    <div className={styles.s_2}>
                        <LoginForm />
                    </div>
                </div>
                <div onClick={closeModal} className={styles.login_modal_close} ><AiOutlineCloseCircle /></div>
            </motion.div>
        </motion.div>
    )
};
"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { MouseEvent, ReactNode, useCallback, useRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from '@/styles/components/loginModal.module.scss';


export default function LoginModal({ children }: { children: ReactNode }) {
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
                {children}
                <div onClick={closeModal} className={styles.login_modal_close} ><AiOutlineCloseCircle /></div>
            </motion.div>
        </motion.div>
    )
};
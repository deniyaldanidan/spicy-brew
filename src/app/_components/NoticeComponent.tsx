"use client";

import { AnimatePresence, motion } from "framer-motion";
import styles from '@/styles/components/noticeComponent.module.scss';
import { Dispatch, ReactNode, SetStateAction } from "react";



export default function NoticeComponent({ visible, setVisible, children }: { visible: boolean, setVisible: Dispatch<SetStateAction<boolean>>, children: ReactNode }) {


    return (
        <AnimatePresence>
            {visible ? (
                <motion.div className={styles.notice_component} style={{ x: "-50%" }} initial={{ y: 70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 70, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <p>{children}</p>
                    <button onClick={() => setVisible(true)}>Ok, Got It!</button>
                </motion.div>
            ) : null}
        </AnimatePresence>
    )
}
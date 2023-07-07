"use client";

import URL_LIST from "@/url";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { MouseEvent, ReactNode, useCallback, useRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";


export default function LoginModal({ children }: { children: ReactNode }) {
    const router = useRouter();
    const overlay = useRef<HTMLDivElement>(null);
    const pathName = usePathname();


    const closeModal = useCallback(() => {
        router.back()
    }, [router])

    const onClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
        if (e.target === overlay.current) {
            closeModal && closeModal()
        }
    }, [closeModal])


    return (
        <AnimatePresence>
            {pathName === URL_LIST.login.path ? (
                <motion.div className="login-modal-container" ref={overlay} onClick={onClick} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.25}}>
                    <motion.div className="login-modal" style={{x: "-50%", y: "-50%"}} initial={{scale:0.5, opacity:0}} animate={{scale:1, opacity:1}} exit={{scale:0.5, opacity:0}} transition={{duration: 0.25}}>
                        {children}
                        <div onClick={closeModal} className="login-modal-close" ><AiOutlineCloseCircle /></div>
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    )
}
"use client";

import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, ReactNode, useCallback, useRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import URL_LIST from "@/url";


export default function Modal({ children }: { children: ReactNode }) {
    const router = useRouter();
    const overlay = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    const closeModal = useCallback(() => {
        router.back()
    }, [router])

    const onClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
        if (e.target === overlay.current) {
            closeModal && closeModal()
        }
    }, [closeModal])


    return (
        pathname === URL_LIST.login.path ? (
            <div className="login-modal-container" ref={overlay} onClick={onClick}>
                <div className="login-modal">
                    {children}
                    <div onClick={closeModal} className="login-modal-close" ><AiOutlineCloseCircle /></div>
                </div>
            </div>
        ) : null
    )
}
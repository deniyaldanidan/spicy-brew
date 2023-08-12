'use client';

import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
import styles from './index.module.scss';
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

type props = {
    menuLabel: ReactNode,
    opts: Array<{ label: string, path: string }>,
    children?: React.JSX.Element
}



export default function MenuDrpDwn(props: props): React.JSX.Element {
    const [active, setActive] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(()=>{
        setActive(false);
    }, [pathname])

    return (
        <div className={styles.menuDrpDwn} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
            <div className={styles.menuLabel}>{props.menuLabel}</div>
            <AnimatePresence>
                {
                    active ? (
                        <motion.div className={styles.menuOpts} style={{ x: "-50%" }} initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0, transition: {delay:0.35} }}>
                            {
                                props.opts.map(opt => <Link href={opt.path} key={opt.path} className={styles.opt}>{opt.label}</Link>)
                            }
                            {
                                (typeof props?.children !== "undefined") ? props.children : ""
                            }
                        </motion.div>
                    ) : ""}
            </AnimatePresence>
        </div>
    )
}
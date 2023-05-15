'use client';

import Link from "next/link";
import React, { useState } from "react";
import styles from './index.module.scss';
import { AnimatePresence, motion } from "framer-motion";

type props = {
    menuLabel: string,
    opts: Array<{ label: string, path: string }>
}



export default function MenuDrpDwn(props: props): React.JSX.Element {
    const [active, setActive] = useState<boolean>(false);

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
                        </motion.div>
                    ) : ""}
            </AnimatePresence>
        </div>
    )
}
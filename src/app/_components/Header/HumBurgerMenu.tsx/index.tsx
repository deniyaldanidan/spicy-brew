"use client";

import styles from './index.module.scss';
import { menus } from '../data';
import AuthMenu from '../AuthMenu';
import MotionedDropDwnMobile from './DropDownMobile';
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import clsx from 'clsx';

const menuVariants: Variants = {
    hidden: {
        opacity: 0,
        x: "70vw",
        transition: {
            when: "afterChildren",
            duration: 0.25,
            type: "tween"
        }
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            type: "tween",
            when: "beforeChildren"
        }
    }
}

const listVars: Variants = {
    hidden: {
        transition: {
            duration: 0,
            when: "beforeChildren",
            staggerChildren: 0.15,
            staggerDirection: -1
        }
    },
    visible: {
        transition: {
            duration: 0,
            when: "beforeChildren",
            staggerChildren: 0.15
        }
    }
}

const menuChildVars: Variants = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.1
        }
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.2
        }
    }
}


const MotionedLink = motion(Link);

export default function HumBurgerMenu() {
    const [active, setActive] = useState<boolean>(false);
    const pathName = usePathname();

    useEffect(() => {
        setActive(false);
    }, [pathName])


    return (
        <>
            <div className={styles.side_menu_bar}>
                <AuthMenu />
                <FiMenu onClick={() => setActive(prev => !prev)} className={styles.humburg_btn} />
            </div>
            {createPortal((<AnimatePresence>
                {active ? (
                    <motion.div className={styles.side_menu} variants={menuVariants} initial="hidden" animate="visible" exit="hidden">
                        <AiOutlineClose className={styles.close_btn} onClick={() => setActive(false)} />
                        <motion.div className={styles.menu_contents} variants={listVars}> {menus.map(menu => typeof menu?.children !== "undefined" ? (<MotionedDropDwnMobile
                            key={menu.label}
                            opts={menu as any}
                            currentPath={pathName}
                            variants={menuChildVars}
                            containerClass={styles.menuDrpDwn}
                            dropClass={styles.drpCntnts}
                            labelClass={styles.label}
                            currentPathClass={styles.current}
                        />) : (<MotionedLink
                            variants={menuChildVars}
                            href={menu?.path as string}
                            key={menu.label}
                            className={clsx(menu?.path === pathName && styles.current)}
                        >
                            {menu.label}
                        </MotionedLink>))}
                        </motion.div>
                    </motion.div>
                ) : ""}
            </AnimatePresence>), document.getElementById("portal1") as any)}
        </>
    )
}



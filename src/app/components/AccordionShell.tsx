'use client';

import useClickOutside from "@/hooks/useClickOutside";
import { AnimatePresence, Variants, motion } from "framer-motion";
import React, { useRef, useState } from "react";


type props = {
    children: React.ReactNode,
    headText: string,
    activeIcon: React.JSX.Element,
    passiveIcon: React.JSX.Element,
    headClassName: string,
    parentClassName: string,
    bodyClassName: string,
    clickOutside ?: true
}

const iconAnimations:Variants = {
    hidden: {
        y:-5,
        opacity:0
    },
    visible: {
        y:0,
        opacity:1,
        transition: {
            type:"spring",
            duration: 0.25
        }
    }
}


export default function AccordionShell({ children, headText, activeIcon, passiveIcon, headClassName, parentClassName, bodyClassName, clickOutside }: props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);

    useClickOutside(ref, () => {
        clickOutside && setIsOpen(false)
    })

    return (
        <div style={{ position: "relative" }} className={parentClassName} ref={ref}>
            <div onClick={() => setIsOpen(prev => !prev)} className={headClassName}>
                <span>{headText}</span>
                <AnimatePresence mode="wait" initial={false}>
                    {
                        isOpen ? <motion.span variants={iconAnimations} initial="hidden" animate="visible" exit="hidden" key={1} >{activeIcon}</motion.span> : <motion.span variants={iconAnimations} initial="hidden" animate='visible' exit="hidden" key={2} >{passiveIcon}</motion.span>
                    }
                </AnimatePresence>
            </div>
            <AnimatePresence>
                {
                    isOpen ? (
                        <motion.div
                            style={{ x: 0 }}
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1, transition:{delay:0.3} }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className={bodyClassName}
                        >
                            {children}
                        </motion.div>
                    ) : ""
                }
            </AnimatePresence>
        </div>
    )
}
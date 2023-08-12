import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaMinus, FaPlus } from 'react-icons/fa';
import clsx from "clsx";
import Link from "next/link";


type dropDownProps = {
    opts: {
        label: string,
        children: Array<{ path: string, label: string }>
    },
    currentPath: string,
    containerClass: string,
    labelClass: string,
    currentPathClass: string,
    dropClass: string
};

const MotionedLink = motion(Link);

const drpVars:Variants = {
    hidden: {
        opacity:0,
        transition: {
            type: "tween",
            duration: 0.3,
            when: "afterChildren",
            staggerDirection: -1,
            staggerChildren: 0.15
        }
    },
    visible: {
        opacity: 1,
        transition: {
            type: "tween",
            duration: 0.3,
            when: "beforeChildren",
            staggerDirection: 1,
            staggerChildren: 0.15
        }
    }
};

const linkVars:Variants = {
    hidden: {
        opacity: 0,
        x: 10,
        transition: {
            type: "tween",
            duration: 0.15
        }
    },
    visible: {
        opacity:1,
        x: 0,
        transition: {
            type: "tween",
            duration: 0.15
        }
    }
}

const DropDownMobile = (props: dropDownProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className={props.containerClass} ref={ref}>
            <div onClick={() => setOpen(prev => !prev)} className={props.labelClass}>
                <span>{props.opts.label}</span>
                {
                    open ? <FaMinus /> : <FaPlus />
                }
            </div>
            <AnimatePresence>
                {open ? (
                    <motion.div className={props.dropClass} variants={drpVars} initial="hidden" animate="visible" exit="hidden">
                        {props.opts.children.map(opt => (
                            <MotionedLink
                                key={opt.label}
                                href={opt.path}
                                className={clsx(props.currentPath === opt.path && props.currentPathClass)}
                                variants={linkVars}
                            >
                                {opt.label}
                            </MotionedLink>
                        ))}
                    </motion.div>
                ) : ""}
            </AnimatePresence>
        </div>
    )
}

const forwadedDropDownMobile = React.forwardRef(DropDownMobile);

const MotionedDropDwnMobile = motion(forwadedDropDownMobile);

export default MotionedDropDwnMobile;
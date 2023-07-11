import React, { useRef, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { AnimatePresence, motion } from 'framer-motion';
import useClickOutside from "@/hooks/useClickOutside";

type props<T> = {
    state: T,
    opts: {
        label: string,
        value: T
    }[],
    handleChg: (val: T) => void
}

/**
 * 
 * @requires styles/components/custSelect1.scss for styling
 */
export default function CustSelect1<T>({ state, opts, handleChg }: props<T>): React.JSX.Element {
    const [drpState, setDrpState] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);

    useClickOutside(ref, () => {
        setDrpState(false);
    })

    return (
        <motion.div className="cust_sel_1" initial={false} ref={ref}>
            <div className="cust_sel_1_label" onClick={() => setDrpState(prev => !prev)}>
                <span>{opts.find(opt=>opt.value===state)?.label}</span>
                <AiOutlineDown />
            </div>
            <AnimatePresence>
                {drpState ? (
                    <motion.div
                        className="cust_sel_1_drpDwn"
                        style={{ x: "-50%" }}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                    >
                        {
                            opts.map((opt, i) => (
                                <div key={i}
                                    className="cust_sel_1_opt"
                                    onClick={() => {
                                        setDrpState(false);
                                        handleChg(opt.value)
                                    }}
                                >{opt.label}</div>
                            ))
                        }

                    </motion.div>
                ) : ""}
            </AnimatePresence>
        </motion.div>
    )
}
"use client";

import useCheckOrderStatus from "@/hooks/useCheckOrderStatus";
import { useMemo } from "react";
import styles from './index.module.scss';
import clsx from "clsx";

export default function OrderProgressBar({dts}:{dts:ReturnType<typeof useCheckOrderStatus>}) {

    const {placed, confirmed, shipped, delivered} = dts;

    const lineClass = useMemo(() => {
        if (delivered.done) {
            return styles.stage4;
        } else if (shipped.done) {
            return styles.stage3;
        } else if (confirmed.done) {
            return styles.stage2;
        }
        return ""
    }, [delivered.done, shipped.done, confirmed.done]);

    return (
        <div className={styles.order_progress}>
            <div className={styles.lineBar}><div className={clsx(styles.line, lineClass)}></div></div>
            <div className={clsx(styles.circle, styles.circle1, styles.active)}></div>
            <div className={clsx(styles.circle, styles.circle2, confirmed.done && styles.active)}></div>
            <div className={clsx(styles.circle, styles.circle3, shipped.done && styles.active)}></div>
            <div className={clsx(styles.circle, styles.circle4, delivered.done && styles.active)}></div>

            <div className={clsx(styles.cont, styles.plcd)}>
                <span>Placed</span>
                <span>{placed.dt_string}</span>
            </div>
            <div className={clsx(styles.cont, styles.cfrmd)}>
                <span>Confirmed</span>
                <span>{confirmed.done ? confirmed.dt_string : ""}</span>
            </div>
            <div className={clsx(styles.cont, styles.shpd)}>
                <span>Shipped</span>
                <span>{shipped.done ? shipped.dt_string : ""}</span>
            </div>
            <div className={clsx(styles.cont, styles.dlvrd)}>
                <span>Delivered</span>
                <span>{delivered.done ? delivered.dt_string : ""}</span>
            </div>
        </div>
    )
}
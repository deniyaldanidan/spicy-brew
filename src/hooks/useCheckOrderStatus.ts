"use client";

import {calc_status, date_formatter_1} from "@/libs/helpers";
import { differenceInSeconds } from "date-fns";
import { useEffect, useState } from "react";



export default function useCheckOrderStatus(placed: Date) {
    const [currTime, setCurrTime] = useState<Date>(new Date());

    useEffect(()=>{
        const myInterval = setInterval(()=>{
            setCurrTime(new Date());
        }, 1000);

        return ()=>{
            clearInterval(myInterval);
        }
    }, []);

    const {confirmed, shipped, delivered} = calc_status(placed);


    return { 
        placed: { 
            dt_string: date_formatter_1(placed)
        },
        confirmed: {
            dt_string: date_formatter_1(confirmed),
            done: differenceInSeconds(confirmed, currTime) <= 0
        },
        shipped: {
            dt_string: date_formatter_1(shipped),
            done: differenceInSeconds(shipped, currTime) <= 0
        },
        delivered: {
            dt_string: date_formatter_1(delivered),
            done: differenceInSeconds(delivered, currTime) <= 0
        }
    };
}
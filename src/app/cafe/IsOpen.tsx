'use client';

import { timerangeToTimeArray } from "@/libs/helpers";
import { CSSProperties, useEffect, useState } from "react";
import { useMemo } from 'react';

const style: CSSProperties = {
    textAlign: "center",
    fontSize: "0.9em",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "1.125px",
}

export default function IsOpen({ timings }: { timings: string }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const timeArray: number[] = useMemo(() => timerangeToTimeArray(timings), [timings]);

    useEffect(() => {

        const now = new Date();
        const nowInMinutes = now.getHours() * 60 + now.getMinutes();

        setIsOpen(nowInMinutes >= timeArray[0] && nowInMinutes <= timeArray[1]);

    }, [timeArray]);

    return <p style={{ ...style, color: isOpen ? "#00bb33" : "#740112" }}>{isOpen ? "Open" : "Closed"} now</p>
}
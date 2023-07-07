"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { ReactNode } from "react";


export default function CheckLayoutSegment({key, children, segmentName}:{key:string, children:ReactNode, segmentName:string}){
    const parallelsegments = useSelectedLayoutSegment(key);
    
    return parallelsegments===segmentName ? null : <>{children}</>;
}
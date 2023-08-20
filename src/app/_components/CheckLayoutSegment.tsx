"use client";

import { usePathname/*, useSelectedLayoutSegment*/ } from "next/navigation";
import { ReactNode } from "react";


export default function CheckLayoutSegment({key, children, /*segmentName, */url}:{key:string, children:ReactNode, /*segmentName:string, */ url:string}){
    // const parallelsegments = useSelectedLayoutSegment(key);
    const pathName = usePathname();
    
    // return parallelsegments===segmentName ? null : (pathName === url ? <>{children}</> : null);
    // return <>{children}</>
    return pathName === url ? <>{children}</> : null;
    // return parallelsegments===segmentName ? (pathName === url ? <>{children}</> : null) : null;
}
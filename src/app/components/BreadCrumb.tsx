import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { HiChevronRight } from 'react-icons/hi'
import URL_LIST from "@/url";
import React from "react";

type props = {
    current: string,
    parents?: Array<{ path: string, label: string }>
}

export default function BreadCrumb({current, parents=[]}: props) {
    return (
        <div className="breadcrumb1">
            <Link href={URL_LIST.home.path}><AiFillHome /></Link>
            <HiChevronRight />
            {
                parents.map(parent => (
                    <React.Fragment key={parent.path}>
                        <Link href={parent.path}>{parent.label}</Link>
                        <HiChevronRight />
                    </React.Fragment>
                )
                )
            }
            <span>{current}</span>
        </div>
    )
}
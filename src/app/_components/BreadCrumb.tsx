import styles from '@/styles/components/breadCrumb.module.scss';
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { HiChevronRight } from 'react-icons/hi'
import URL_LIST from "@/url";
import React from "react";
import clsx from 'clsx';

type props = {
    current: string,
    parents?: Array<{ path: string, label: string }>,
    bright?: true
}

export default function BreadCrumb({ current, parents = [], bright }: props) {
    return (
        <div className={clsx(styles.breadcrumb1, bright && styles.bright)}>
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
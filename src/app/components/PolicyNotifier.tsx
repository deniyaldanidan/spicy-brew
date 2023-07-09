"use client";

import NoticeComponent from "@/app/components/NoticeComponent";
import Link from "next/link";
import {useState} from 'react';


export default function PolicyNotifier() {
    const [notified, setNotified] = useState<boolean>(false);

    return (
        <NoticeComponent visible={!notified} setVisible={setNotified}>
            The terms and policies on this page are generated by ChatGPT, an AI language model. If you find any mistakes or offensive content, please report them to me on <Link href="https://www.instagram.com/jzack_blaze/" target="_blank">Instagram</Link>. Thank you.
        </NoticeComponent>
    )
}
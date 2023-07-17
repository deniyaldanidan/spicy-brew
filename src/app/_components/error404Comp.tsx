'use client';

import styles from '@/styles/infoPage.module.scss';
import Error404 from '@/assets/404.svg';
import URL_LIST from '@/url';
import Image from 'next/image';
import React, {useEffect} from 'react';
import { useRouter } from 'next/navigation';
import { FaHome } from 'react-icons/fa';
import clsx from 'clsx';

export default function Error404Comp({ text }: { text: string }): React.JSX.Element {
    const router = useRouter();

    useEffect(()=>{
        const myTimeout = setTimeout(()=>router.replace(URL_LIST.home.path), 1000);
        return ()=>{
            clearTimeout(myTimeout);
        }
    }, [router]);

    return (
        <div className={clsx(styles.info_page, styles.error)}>
            <Image src={Error404} alt="Error 404 Happened" />
            <p>{text}. <br/>Redirecting to Home..</p>
            <button onClick={() => router.replace(URL_LIST.home.path)} >
                <span>Go Home</span>
                <FaHome />
            </button>
        </div>
    )
}
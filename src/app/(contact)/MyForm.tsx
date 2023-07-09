"use client";

import {ReactNode, FormEvent, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import URL_LIST from '@/url';
import { useNotifications } from 'reapop';
/**
 * 
 * @description This is just a demo non-functional form when submitted, it will take user to the HomePage and show a success pop-up.
 */
export default function MyForm({children}:{children:ReactNode}){
    const router = useRouter();
    const {notify} = useNotifications();

    useEffect(()=>{
        router.prefetch(URL_LIST.home.path)
    }, [router])
    
    const submitHandler = (e:FormEvent)=>{
        e.preventDefault();
        router.replace(URL_LIST.home.path);
        notify("Form is submitted", "success", {dismissAfter: 2*1000});
    }
    return <form onSubmit={submitHandler}>{children}</form>
}
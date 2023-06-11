"use client";

import { useAuth } from "@/app/context/AuthContext";
import URL_LIST from "@/url";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiUser } from "react-icons/fi";



export default function AuthMenu({ className }: { className: string }) {
    const { data, setAuthToken } = useAuth();

    const clickHandler = async () => {
        try {
            const res = await fetch("/api/logout", { next: { revalidate: 0 } })
            if (res.ok) {
                const data = await res.json();
                data?.success && setAuthToken(undefined)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return data.auth ? (
        <>
            <Link href={URL_LIST.account.path} className={className}><FiUser /></Link>
            <Link href={URL_LIST.cart.path} className={className}><AiOutlineShoppingCart /></Link>
            <button className={className} onClick={clickHandler}>Log Out</button>
        </>
    ) : (
        <Link href={URL_LIST.login.path} className={className}>Log In</Link>
    )

}
"use client";

import { useAuth } from "@/app/context/AuthContext";
import { useCart } from "@/app/context/CartContext";
import URL_LIST from "@/url";
import Link from "next/link";
import { FiUser } from "react-icons/fi";



export default function AuthMenu({ className }: { className: string }) {
    const { data, resetAuthState } = useAuth();
    const {items} = useCart();

    const clickHandler = async () => {
        try {
            const res = await fetch("/api/logout", { next: { revalidate: 0 } })
            if (res.ok) {
                const data = await res.json();
                data?.success && resetAuthState();
            }
        } catch (error) {
            console.log(error)
        }
    }



    return data.auth==="auth" ? (
        <>
            <Link href={URL_LIST.cart.path} className={className} >Cart &#x5B;{items?.length ? items.reduce((prev, curr)=>prev + curr.qty, 0) : 0}&#x5D;</Link>
            <Link href={URL_LIST.account.path} className={className}><FiUser /></Link>
            <button className={className} onClick={clickHandler}>Log Out</button>
        </>
    ) : (
        <Link href={URL_LIST.login.path} className={className}>Log In</Link>
    )

}
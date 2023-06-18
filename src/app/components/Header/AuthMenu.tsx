"use client";

import logout from "@/actions/logout";
import { useAuth } from "@/app/context/AuthContext";
import { useCart } from "@/app/context/CartContext";
import URL_LIST from "@/url";
import Link from "next/link";
import { useTransition } from "react";
import { FiUser } from "react-icons/fi";
import { useNotifications } from "reapop";



export default function AuthMenu({ className }: { className: string }) {
    const { data, resetAuthState } = useAuth();
    const {items} = useCart();
    const [_, startTransition] = useTransition();
    const {notify} = useNotifications();

    const clickHandler = () => {
        startTransition(async ()=>{   
            try {
                const res = await logout();
                res.success && resetAuthState();
            } catch (error) {
                console.log(error)
                notify("Logout Failed", "error", {dismissAfter: 3*1000})
            }
        })
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
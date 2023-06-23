"use client";

import { useAuth } from "@/app/context/AuthContext";
import { useCart } from "@/app/context/CartContext";
import URL_LIST from "@/url";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import MenuDrpDwn from "./MenuDrpDwn";
import useLogout from "@/hooks/useLogout";

const userMenuOpts = [{ label: "Account", path: URL_LIST.account.path }, { label: "Orders", path: URL_LIST.myOrders.path }, { label: "Subscriptions", path: URL_LIST.mySubscriptions.path }]

export default function AuthMenu({ className }: { className: string }) {
    const { data } = useAuth();
    const { items } = useCart();
    const logoutHandler = useLogout()

    return data.auth === "auth" ? (
        <>
            <MenuDrpDwn menuLabel={<FiUser />} opts={userMenuOpts}>
                <button onClick={logoutHandler}>Logout</button>
            </MenuDrpDwn>
            <Link href={URL_LIST.cart.path} className={className} >Cart &#x5B;{items?.length ? items.reduce((prev, curr) => prev + curr.qty, 0) : 0}&#x5D;</Link>
        </>
    ) : (
        <Link href={URL_LIST.login.path} className={className}>Log In</Link>
    )

}
"use client";

import logout from "@/actions/logout";
import { useAuth } from "@/app/context/AuthContext";
import { useTransition } from "react";
import { useNotifications } from "reapop";



export default function useLogout(){
    const {resetAuthState} = useAuth()
    const [_, startTransition] = useTransition();
    const { notify } = useNotifications();

    const logoutHandler = ()=>{
        startTransition(async () => {
            try {
                const res = await logout();
                if (res.success) {
                    resetAuthState();
                    notify("You're logged out", "info", {dismissAfter: 3*1000});
                }
            } catch (error) {
                console.log(error)
                notify("Logout Failed", "error", { dismissAfter: 3 * 1000 })
            }
        })
    }

    return logoutHandler;
};
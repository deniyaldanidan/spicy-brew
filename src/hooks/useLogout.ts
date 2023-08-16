"use client";

import { useAuth } from "@/context/AuthContext";
import { useNotifications } from "reapop";



export default function useLogout() {
    const { resetAuthState } = useAuth();
    const { notify } = useNotifications();

    const logoutHandler = async () => {
        try {
            const res = await fetch("/api/logout", {method: "GET", credentials: "include"});
            if (res.ok) {
                resetAuthState();
                notify("You're logged out", "info", { dismissAfter: 3 * 1000 });
            }
        } catch (error) {
            console.log(error)
            notify("Logout Failed", "error", { dismissAfter: 3 * 1000 })
        }

    }

    return logoutHandler;
};
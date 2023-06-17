'use client';

import { useNotifications } from "reapop";
import { useAuth } from "../context/AuthContext";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loader1 from "./Loader1";
import UnAuthenticated401 from "./UnAuthenticated401";


export default function AuthOnly({children}:{children:React.ReactNode}){
    const {data} = useAuth();
    const {notify} = useNotifications();
    const router = useRouter();

    useEffect(()=>{
        if (data.auth==="unauth"){
            router.replace("/")
            notify("Login First", "error", {dismissAfter: 4000, dismissible: true})
        }
    }, [data.auth, router, notify])

    if (data.auth==="loading"){
        return <Loader1 />
    }

    if (data.auth==="auth"){
        return <>{children}</>
    }

    return <UnAuthenticated401 text="UnAuthenticated Entry. Redirecting to HomePage..." />;
}


// "use client";

import React from "react";
import AuthOnly from "@/app/_components/AuthOnly";
import { Metadata } from "next";
// import dynamic from "next/dynamic";
// import Loader1 from "../_components/loaders/Loader1";

// const AuthOnly = dynamic(()=>import("@/app/_components/AuthOnly"), {ssr: false, loading: ()=><Loader1 />})

export const metadata: Metadata = {
    title: "DashBoard"
}

export default function Layout({ authroutes }: { authroutes: React.ReactNode}) {
    return (
        <AuthOnly>{authroutes}</AuthOnly>
    )
}
import React from "react";
import AuthOnly from "@/app/_components/AuthOnly";
import { Metadata } from "next";


export const metadata:Metadata = {
    title: "DashBoard"
}

export default function Layout({children}:{children:React.ReactNode}){
    return <AuthOnly>{children}</AuthOnly>
}
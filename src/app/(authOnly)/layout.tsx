import React from "react";
import AuthOnly from "../components/AuthOnly";



export default function Layout({children}:{children:React.ReactNode}){
    return <AuthOnly>{children}</AuthOnly>
}
"use server";

import { cookies } from "next/headers";

export default async function logout(){
    const authCookie = cookies().get("auth");

    if (authCookie?.value?.length){
        cookies().set("auth", "", {maxAge:0, httpOnly:true})
    }

    return {success: true};
}
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(){
    const authCookie = cookies().get("auth");

    if (authCookie?.value?.length){
        cookies().set("auth", "", {maxAge:0, httpOnly:true})
    }

    return NextResponse.json({success: true});
}
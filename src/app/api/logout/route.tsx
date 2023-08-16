
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(){

    cookies().set("auth", "", {maxAge:0, httpOnly:true});

    return NextResponse.json({success: true});
}
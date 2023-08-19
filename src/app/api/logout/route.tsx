
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        cookies().set("auth", "", {maxAge:0, httpOnly:true});
        return NextResponse.json({success: true});
    }
    catch (err){
        console.log("Error happened in logout", err);
        return NextResponse.json({failed: true}, {status: 500})
    }
}
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";
import validator from "validator";
import { cookies } from "next/headers";


export async function POST(request:Request){
    const {uname} = await request.json();

    if (!uname?.length || !validator.isAlphanumeric(uname, "en-US", {ignore: "_"})) {
        return NextResponse.json({success: false});
    }

    const accToken = sign({ username: uname }, process.env.REFRESH_SECRET as string, { expiresIn: "6h" });

    const authToken = sign({ username: uname }, process.env.SECRET_KEY as string, { expiresIn: "1d" });

    cookies().set("auth", authToken, { httpOnly: true, maxAge: 60 * 60 * 24, sameSite: "strict" });

    return NextResponse.json({success: true, accToken})
}
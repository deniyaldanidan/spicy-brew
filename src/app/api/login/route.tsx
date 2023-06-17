import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";
import validator from "validator";
import { cookies } from "next/headers";


export async function POST(request: Request) {
    try {
        const { uname } = await request.json();

        if (!uname?.length || !validator.isAlphanumeric(uname, "en-US", { ignore: "_" }) || !validator.isLength(uname, { min: 2, max: 12 })) {
            return NextResponse.json({ success: false }, { status: 400 });
        }

        const accToken = sign({ username: uname }, process.env.REFRESH_SECRET as string, { expiresIn: "6h" });

        const authToken = sign({ username: uname }, process.env.SECRET_KEY as string, { expiresIn: "1d" });

        cookies().set("auth", authToken, { httpOnly: true, maxAge: 60 * 60 * 24, sameSite: "strict" });

        return NextResponse.json({ success: true, accToken })
    } catch (error) { 
        if (error instanceof SyntaxError && error.message.toLowerCase() === "unexpected end of json input"){
            return NextResponse.json({success: false}, {status: 400});
        }
        // In Production systems, write this error to a file..
        console.log(error);
        return NextResponse.json({success: false}, {status: 409})
    }
}
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { sign, verify } from "jsonwebtoken";
import validator from "validator";
import { authReturnType } from "@/custTypes";


export async function GET():Promise<NextResponse<authReturnType>> {
    const cookieStore = cookies();
    const authToken = cookieStore.get('auth')?.value;

    try {
        if (!authToken?.length) {
            return NextResponse.json({ auth: false })
        }

        if (!validator.isJWT(authToken)) {
            return NextResponse.json({ auth: false });
        }

        const decoded:any = verify(authToken, process.env.SECRET_KEY as string);

        if (!decoded?.username?.length) {
            return NextResponse.json({ auth: false })
        }

        const accToken = sign({ username: decoded.username }, process.env.REFRESH_SECRET as string, { expiresIn: "6h" });

        return NextResponse.json({ auth: true, accToken });
    } catch (error) {
        return NextResponse.json({ auth: false })
    }
}
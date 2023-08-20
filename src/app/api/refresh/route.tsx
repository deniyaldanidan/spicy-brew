import { MyValErr } from "@/libs/helpers";
import { sign, verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import validator from "validator";

export async function GET() {
    try {
        const cookieStore = cookies();
        const authToken = cookieStore.get('auth')?.value;

        if (!authToken?.length) {
            throw new MyValErr("Invalid");
        }

        if (!validator.isJWT(authToken)) {
            throw new MyValErr("Invalid");
        }

        const decoded: any = verify(authToken, process.env.SECRET_KEY as string);

        if (!decoded?.username?.length) {
            throw new MyValErr("Invalid");
        }

        const accToken = sign({ username: decoded.username }, process.env.REFRESH_SECRET as string, { expiresIn: "6h" });

        return NextResponse.json({ auth: true, accToken });
    } catch (error) {
        if (!(error instanceof MyValErr)) {
            console.log(error);
        }

        cookies().set("auth", "", { maxAge: 0, httpOnly: true, secure: true });
        return NextResponse.json({ auth: false }, { status: 401 })
    }
}

export const dynamic = "force-dynamic";
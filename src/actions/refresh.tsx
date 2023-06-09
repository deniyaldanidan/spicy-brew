"use server";

import { cookies } from "next/headers";
import { sign, verify } from "jsonwebtoken";
import validator from "validator";
import { MyValErr } from "@/libs/helpers";

export default async function refresh(){
    const cookieStore = cookies();
    const authToken = cookieStore.get('auth')?.value;

    try {
        if (!authToken?.length) {
            throw new MyValErr("Invalid");
        }

        if (!validator.isJWT(authToken)) {
            throw new MyValErr("Invalid");
        }

        const decoded:any = verify(authToken, process.env.SECRET_KEY as string);

        if (!decoded?.username?.length) {
            throw new MyValErr("Invalid");
        }

        const accToken = sign({ username: decoded.username }, process.env.REFRESH_SECRET as string, { expiresIn: "6h" });

        return { auth: true as const, accToken };
    } catch (error) {
        if (!(error instanceof MyValErr)){
            console.log(error);
        } 

        cookies().set("auth", "", {maxAge: 0, httpOnly: true});
        return { auth: false as const }
    }
}
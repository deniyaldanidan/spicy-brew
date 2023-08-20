"use server";

import { sign } from "jsonwebtoken";
import validator from "validator";
import { cookies } from "next/headers";

export default async function login(uname: string) {
    try {
        if (!uname?.length || !validator.isAlphanumeric(uname, "en-US", { ignore: "_" }) || !validator.isLength(uname, { min: 2, max: 12 })) {
            return { success: false as const, reason: "Invalid Username" };
        }

        const accToken = sign({ username: uname }, process.env.REFRESH_SECRET as string, { expiresIn: "6h" });

        const authToken = sign({ username: uname }, process.env.SECRET_KEY as string, { expiresIn: "1d" });

        cookies().set("auth", authToken, { httpOnly: true, maxAge: 60 * 60 * 24, sameSite: "strict", secure: true });

        return { success: true as const, accToken }
    } catch (error) {
        return { success: false as const, reason: "Login error happened" }
    }
}
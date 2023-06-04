'use client';

import { genRandomWithinRange } from "@/libs/helpers";
import Image from "next/image";
import { useMemo } from "react";



export default function UserImage({ gender, username }: { gender: string, username: string }) {
    
    const num = useMemo(()=>genRandomWithinRange(75, 0), []);
    

    return <Image src={`https://xsgames.co/randomusers/assets/avatars/${gender}/${num}.jpg`} width={50} height={50} alt={username} style={{ borderRadius: "50%" }} />
}
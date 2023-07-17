"use client";

import { useEffect, useState } from "react";


export default function Page() {
    const [isErr, setIsErr] = useState(false);
    
    useEffect(()=>{
        if (isErr){
            throw new Error("Heelo");
        }
    }, [isErr]);

    return (
        <button onClick={()=>{setIsErr(prev=>!prev)}} style={{backgroundColor: "#212", color: "#dfc", padding: "12.5px 50px", borderRadius: "10px", cursor: "pointer", margin: "200px auto", display: "block", width: "fit-content", fontSize: "1.05rem", fontWeight: 500}}>Click Me To Error</button>
    )
}
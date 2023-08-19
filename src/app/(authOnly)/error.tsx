"use client";

import ErrorHandler from "@/app/_components/ErrorHandler";

type errProps = {
    error: Error,
    reset: ()=>void
}

export default function Error({error, reset}:errProps){
    
    return <ErrorHandler reset={reset} homeBTN />
}
"use client";

import ErrorHandler from "@/app/_components/ErrorHandler";

type errProps = {
    error: Error & { digest?: string },
    reset: () => void
}

export default function GlobalError({ error, reset }: errProps) {

    return (
        <html>
            <body>
                <ErrorHandler reset={reset} />
            </body>
        </html>
    )
}
// import ACCMAIN from "./_components/ACCMAIN";

import SquareLoader from "@/app/_components/loaders/SquareLoader"
import nextDynamic from "next/dynamic"

const ACCMAIN = nextDynamic(()=>import("./_components/ACCMAIN"), {ssr: false, loading: ()=><SquareLoader />})

export const dynamic = "force-dynamic";

export default function Page() {
    return <ACCMAIN />
}
// import ACCMAIN from "./_components/ACCMAIN";

import SquareLoader from "@/app/_components/loaders/SquareLoader"
import dynamic from "next/dynamic"

// export const dynamic = "force-dynamic";
const ACCMAIN = dynamic(()=>import("./_components/ACCMAIN"), {ssr: false, loading: ()=><SquareLoader />})


export default function Page() {
    return <ACCMAIN />
}
// import MySubMain from "./_components/MySubMain";

import SquareLoader from "@/app/_components/loaders/SquareLoader"
import nextDynamic from "next/dynamic"


const MySubMain = nextDynamic(() => import("./_components/MySubMain"), { loading: () => <SquareLoader />, ssr: false });

export const dynamic = "force-dynamic";

export default function Page() {
    return <MySubMain />
}
// import MySubMain from "./_components/MySubMain";

import SquareLoader from "@/app/_components/loaders/SquareLoader"
import dynamic from "next/dynamic"

// export const dynamic = "force-dynamic";

const MySubMain = dynamic(() => import("./_components/MySubMain"), { loading: () => <SquareLoader />, ssr: false });

export default function Page() {
    return <MySubMain />
}
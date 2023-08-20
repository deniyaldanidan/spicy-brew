import SquareLoader from "@/app/_components/loaders/SquareLoader";
import nextDynamic from "next/dynamic";
// import OrderMain from "./_components/OrderMain";

const OrderMain = nextDynamic(()=>import("./_components/OrderMain"), {loading: ()=><SquareLoader />, ssr: false});

export const dynamic = "force-dynamic";

export default function Page() {
    return <OrderMain />
}
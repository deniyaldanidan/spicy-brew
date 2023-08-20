import SquareLoader from "@/app/_components/loaders/SquareLoader";
import dynamic from "next/dynamic";
// import OrderMain from "./_components/OrderMain";

const OrderMain = dynamic(()=>import("./_components/OrderMain"), {loading: ()=><SquareLoader />, ssr: false});

// export const dynamic = "force-dynamic";

export default function Page() {
    return <OrderMain />
}
import styles from '@/styles/_pages/cafe.module.scss';
import '@/styles/components/cafe-box.scss';
import OptsBox from "@/app/_components/cafes/OptsBox";
import Pagination from "@/app/_components/pagination";
import CafeBox from '@/app/_components/cafes/CafeBox';
import URL_LIST from "@/url";
import getCafes from "@/libs/getCafes";
import Image from "next/image";
import React from "react";
import { Metadata } from 'next';

type props = {
    searchParams: {
        [key: string]: string
    }
}

export const metadata:Metadata = {
    title: "Our Cafe's",
    description: "Find our cafe's near your locality",
    keywords: ["Spicy Brew's Cafe's", "Cafe's belongs to the Spicy Brew", "Spicy Brew Cafe"]
}

export default async function Page({ searchParams }: props) {
    const req_state = searchParams['state'];
    const req_city = searchParams['city'];
    const pageNo = searchParams['page'];

    const data: ReturnType<typeof getCafes> = getCafes(req_state, req_city, parseInt(pageNo));

    const queryFn = (page: number) => {
        return (
            {
                ...(req_state?.length ? { state: req_state, ...(req_city?.length ? { city: req_city } : null) } : null),
                page
            }
        )
    }

    return (
        <div className={styles.cafePage}>
            <div className={styles.heroSec}>
                <Image src={URL_LIST.blogImagePath(7)} alt="Cafe Home Page" quality={70} width={1100} height={400} priority style={{ objectFit: "cover", objectPosition: "center" }} />
            </div>
            <div className={styles.optSection}>
                <OptsBox no={data.size} defaultStt={req_state} defaultCity={req_city} />
            </div>

            <div className={styles.contents}>
                <div className={styles.contTitle}>Cafe&apos;s Near You</div>
                <div className={styles.cafeLists}>
                    {
                        data.cafes.map((cf) => <CafeBox cf={cf} key={cf.id} />)
                    }
                </div>
                {
                    typeof data.curr_page === "number" ? (
                        <Pagination
                            curr_page={data.curr_page}
                            totalPages={data.totalPages}
                            prevhref={{
                                pathname: URL_LIST.cafes.path,
                                query: queryFn(data.curr_page - 1)
                            }}
                            nexthref={{
                                pathname: URL_LIST.cafes.path,
                                query: queryFn(data.curr_page + 1)
                            }}
                        />
                    ) : ""
                }
            </div>
        </div>
    )
}
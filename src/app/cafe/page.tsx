import BreadCrumb from "../components/BreadCrumb";
import styles from './index.module.scss';
import Image from "next/image";
import OptsBox from "./OptsBox";
import getCafes from "@/libs/getCafes";
import { cafeType } from "@/custTypes";
import Link from "next/link";
import URL_LIST from "@/url";
import { IoMdCafe } from "react-icons/io";
import { IoLocationSharp } from 'react-icons/io5';
import { FaPhoneAlt } from "react-icons/fa";
import { BsClockFill } from "react-icons/bs";
import { BiLinkExternal } from 'react-icons/bi';
import IsOpen from './IsOpen';
import React from "react";
import Pagination from "../components/pagination";

type props = {
    searchParams: {
        [key: string]: string
    }
}

const CafeBox = ({ cf }: { cf: cafeType }): React.JSX.Element => {
    return (
        <div className={styles.cafe_box}>
            <div className={styles.box_head}>
                <div className={styles.box_title}>
                    <IoMdCafe />
                    <span>{cf.name}</span>
                </div>
                <div className={styles.box_subtitle}>{cf.locality}</div>
            </div>
            <div className={styles.box_body}>
                <div className={styles.box_body_cont_top}>
                    <IoLocationSharp />
                    {cf.address}
                </div>
                <div className={styles.box_body_cont_bottom}>
                    <div>
                        <span><FaPhoneAlt /> Phone No.</span>
                        <span>{cf.phoneNo}</span>
                    </div>
                    <div>
                        <span><BsClockFill /> Timings</span>
                        <span>{cf.timings}</span>
                    </div>
                    <IsOpen timings={cf.timings} />
                </div>
                <Link href="https://danithedev.tech" className={styles.box_cta}>
                    <BiLinkExternal /> <span>Website</span>
                </Link>
            </div>
        </div>
    )
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
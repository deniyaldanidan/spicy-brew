import BreadCrumb from "../components/BreadCrumb";
import heroImg from '@/assets/blog/blog7.jpg'
import styles from './index.module.scss';
import Image from "next/image";
import OptsBox from "./OptsBox";
import getCafes from "@/libs/getCafes";

type props = {
    searchParams: {
        [key: string]: string
    }
}

export default async function Page ({searchParams}:props){
    const req_state = searchParams['state'];
    const req_city = searchParams['city'];
    const pageNo = searchParams['page'];

    const data = getCafes(req_state, req_city, parseInt(pageNo));
    console.log(data.cafes.map(cf=>cf.id), data.totalPages);

    return (
        <>
            <BreadCrumb current="Our Cafe's"/>
            <div className={styles.cafePage}>
                <div className={styles.heroSec}>
                    <Image src={heroImg} alt="Cafe Home Page" quality={70} />
                </div>
                <OptsBox no={data.size} defaultStt={req_state} defaultCity={req_city} />
            </div>
        </>
    )
}

/**
 * What's going to be in this page?
 * 
 * There will be box on top which will has something similar like third-wave-coffee but doesn't gonna have a map button or use my current location btn and no of cafe will be on right side of the head
 * 
 * Other things just follow that page....
 * 
 */
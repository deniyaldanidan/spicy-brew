import Image from 'next/image';
import styles from './index.module.scss';
import heroImg from './newsroom.jpg';
import getPress from '@/libs/getPress';
import { pressData } from '@/custTypes';
import Link from 'next/link';

const PressCard = ({data}:{data:pressData})=>{
    return (
        <div className={styles.card}>
            <div className={styles.title}>{data.title}</div>
            <div className={styles.meta}>
                <span>{data.date}</span>
                <span>{data.by}</span>
            </div>
            <Link href="https://danithedev.tech/" >Read More</Link>
        </div>
    )
}


export default function Press() {
    const {data} = getPress();

    return (
        <div className={styles.press_page}>
            <div className="hero-type-1">
                <Image src={heroImg} alt='NewsRoom' priority quality={100} />
                <div className="contents">
                    <div className="title">Newsroom</div>
                    <div className="desc">Find out what people are raving about when it comes to Spicy Brew&#x2019;s delicious coffee!</div>
                </div>
            </div>

            <div className={styles.page_contents}>
                {
                    data.map(press=><PressCard key={press.id} data={press} /> )
                }
            </div>
        </div>
    )
}
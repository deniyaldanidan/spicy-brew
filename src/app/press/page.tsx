import styles from '@/styles/_pages/press.module.scss';
import heroImg from './_assets/newsroom.jpg';
import getPress from '@/libs/getPress';
import { pressData } from '@/custTypes';
import Link from 'next/link';
import HeroType1 from '../_components/HeroType1';
import { Metadata } from 'next';

export const metadata:Metadata = {
    title: "Newsroom",
    description: "Find out what people are raving about when it comes to Spicy Brew\'s delicious coffee!"
}

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
            <HeroType1 image={heroImg} imageAlt='Newsroom' title='Newsroom' desc='Find out what people are raving about when it comes to Spicy Brew&#x2019;s delicious coffee!' />

            <div className={styles.page_contents}>
                {
                    data.map(press=><PressCard key={press.id} data={press} /> )
                }
            </div>
        </div>
    )
}
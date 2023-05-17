'use client';

import Image from 'next/image';
import { pressList } from '../data';
import styles from './index.module.scss';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';



export default function Press() {
    const [emblaRef] = useEmblaCarousel({ slidesToScroll: 2, startIndex: 0, align: "start", dragFree: true, loop: true });

    return (
        <div className={styles.press_section}>
            <div className={styles.title}>
                Press
            </div>
            <div className={styles.embla}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        {
                            pressList.map(press => (
                                <div className={styles.embla__slide} key={press.title}>
                                    <Image src={press.image} alt={press.title} />
                                    <div className={styles.slide_contents}>
                                        <div className={styles.slide__title}>{press.title}</div>
                                        <div className={styles.slide__meta}>
                                            <span>{press.by}</span>
                                            <span>{press.date}</span>
                                        </div>
                                        <Link href='https://danithedev.tech'>Read More</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.btns}>

                </div>
            </div>
        </div>
    )
}
'use client';

import Image from 'next/image';
import { pressList } from '../data';
import styles from './index.module.scss';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { BsArrowRight } from 'react-icons/bs';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useCallback } from 'react';



export default function Press() {

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            slidesToScroll: 1,
            startIndex: 0,
            align: "start",
            dragFree: true,
            loop: true
        },
        [
            Autoplay({
                delay: 2000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
                rootNode: (emblaRoot) => emblaRoot.parentElement
            })
        ]);

    const prevAction = useCallback(() => { emblaApi && emblaApi.scrollPrev() }, [emblaApi]);

    const nextAction = useCallback(() => { emblaApi && emblaApi.scrollNext() }, [emblaApi]);

    const resetPlay = useCallback(() => {
        if (emblaApi) {
            emblaApi.plugins().autoplay?.reset();
            emblaApi.plugins().autoplay?.play(false)
        }
    }, [emblaApi]);

    return (
        <div className={styles.press_section}>
            <div className={styles.title}>
                Press
            </div>
            <div className={styles.embla} onMouseLeave={resetPlay}>
                <div className={styles.btns}>
                    <button onClick={prevAction}><FaAngleLeft /></button>
                    <button onClick={nextAction}><FaAngleRight /></button>
                </div>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        {
                            pressList.map(press => (
                                <div className={styles.embla__slide} key={press.title}>
                                    <Image src={press.image} alt={press.title} quality={60} />
                                    <div className={styles.slide_contents}>
                                        <div className={styles.slide__title}>{press.title}</div>
                                        <div className={styles.slide__meta}>
                                            <span>{press.by}</span>
                                            <span>{press.date}</span>
                                        </div>
                                        <Link href='https://danithedev.tech'>
                                            <span>
                                                Read More
                                            </span>
                                            <BsArrowRight className={styles.slide__linkIcon} />
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
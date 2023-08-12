'use client';

import Image from 'next/image';
import pressList from '@/data/press.json'
import styles from './index.module.scss';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { BsArrowRight } from 'react-icons/bs';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useCallback } from 'react';
import URL_LIST from '@/url';
import { useMediaQuery } from 'react-responsive';



export default function Press() {

    const isBelow525px = useMediaQuery({query: '(max-width: 525px)'});

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            slidesToScroll: 1,
            startIndex: 0,
            align: "start",
            // dragFree: true,
            loop: true
        },
        [
            Autoplay({
                delay: 5000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
                rootNode: (emblaRoot) => emblaRoot.parentElement,
                playOnInit: !isBelow525px
            })
        ]);

    const prevAction = useCallback(() => { emblaApi && emblaApi.scrollPrev() }, [emblaApi]);

    const nextAction = useCallback(() => { emblaApi && emblaApi.scrollNext() }, [emblaApi]);

    const resetPlay = useCallback(() => {
        if (isBelow525px){
            return;
        }
        
        if (emblaApi) {
            emblaApi.plugins().autoplay?.reset();
            emblaApi.plugins().autoplay?.play(false)
        }
    }, [emblaApi, isBelow525px]);

    return (
        <div className={styles.press_section}>
            <div className={styles.title}>
                Newsroom
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
                                    <Image src={URL_LIST.blogImagePath(press.id)} alt={press.title} quality={60} width={400} height={300} priority />
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
'use client';

import React, { useCallback, useEffect, useState } from "react";
import { bestsellers } from "../data";
import useEmblaCarousel from 'embla-carousel-react';
import styles from './itemsCar.module.scss';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';
import Card1 from "../../Card1";


export default function ItemsCarousel(): React.JSX.Element {
    const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 1, startIndex: 0, align: "start", dragFree: true });
    const [canPrev, setCanPrev] = useState<boolean>(false);
    const [canNext, setCanNext] = useState<boolean>(false);

    const prevAction = useCallback(() => { emblaApi && emblaApi.scrollPrev() }, [emblaApi]);

    const nextAction = useCallback(() => { emblaApi && emblaApi.scrollNext() }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (emblaApi) {
            setCanPrev(emblaApi.canScrollPrev());
            setCanNext(emblaApi.canScrollNext());
        }
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);

    }, [emblaApi, onSelect]);

    return (
        <div className={styles.embla}>
            <div className={styles.embla__btns}>
                <button className={styles.embla__btn} onClick={prevAction} disabled={!canPrev} >
                    <FaAngleDoubleLeft />
                </button>
                <button className={styles.embla__btn} onClick={nextAction} disabled={!canNext} >
                    <FaAngleDoubleRight />
                </button>
            </div>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {
                        bestsellers.map(item => (
                            <div className={styles.embla__slide} key={item.id}>
                                <Card1 item={item} height={255} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

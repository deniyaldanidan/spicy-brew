'use client';

import React, { ReactNode, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import styles from './itemsCar.module.scss';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';


export default function ItemsCarousel({children}:{children:ReactNode}): React.JSX.Element {
    const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 2, startIndex: 0, align: "start", breakpoints:{'(max-width: 1200px)': {slidesToScroll: 1}} });
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
                    {children}
                </div>
            </div>
        </div>
    )
}

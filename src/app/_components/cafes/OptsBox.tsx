'use client';

import styles from '@/styles/components/optsBox.module.scss';
import '@/styles/components/custSelect1.scss';
import CustSelect1 from "@/app/_components/CustSelect1";
import cafeLocations from '@/data/cafeLocations.json';
import URL_LIST from "@/url";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const sttList = cafeLocations.map(loc => ({ label: loc.stateName, value: loc.stateName }))

type props = {
    no: number,
    defaultStt: string,
    defaultCity: string
}

const pathname: string = URL_LIST.cafes.path;

export default function OptsBox({ no, defaultStt, defaultCity }: props): React.JSX.Element {
    const [chosenStt, setChosenStt] = useState<string>(() => cafeLocations.find(stt => stt.stateName === defaultStt) ? defaultStt : "");
    const [chosenCity, setChosenCity] = useState<string>(() => defaultCity ? defaultCity : "");

    const cityList: { value: typeof chosenCity, label: string }[] = useMemo(() => {
        const locObj = cafeLocations.find(loc => loc.stateName === chosenStt);
        return locObj ? locObj.cities.map(cit => ({ label: cit.cityName, value: cit.cityName })) : []
    }, [chosenStt]);


    useEffect(() => {
        setChosenCity(prev => {
            return cityList.find(cty => cty.value === prev) ? prev : ""
        })
    }, [cityList])


    const handleSttChg = (val: typeof chosenStt) => {
        cafeLocations.find(loc => loc.stateName === val) ? setChosenStt(val) : setChosenStt("")
    }

    const handleCityChg = (val: typeof chosenCity) => {
        cityList.find(cty => cty.value === val) ? setChosenCity(val) : setChosenCity("")
    }

    const query: { state?: string, city?: string } = useMemo(() => {
        return {...(chosenStt.length ? {state: chosenStt, ...(chosenCity.length ? {city: chosenCity} : null)} : null )}
    }, [chosenStt, chosenCity])

    return (
        <div className={styles.optsBox}>
            <div className={styles.head}>
                <span>Find a cafe</span>
                <span>{no} Cafes</span>
            </div>
            <div className={styles.optsCnts}>
                <CustSelect1<typeof chosenStt> state={chosenStt} opts={[{ label: "--Select State--", value: "" }, ...sttList]} handleChg={handleSttChg} />
                <CustSelect1<typeof chosenCity> state={chosenCity} opts={[{ label: "--Select City--", value: "" }, ...cityList]} handleChg={handleCityChg} />
                <Link href={{ pathname, query }} className={styles.opts_btn}>
                    <FaSearch />
                    <span>Search</span>
                </Link>
            </div>
        </div>
    )
}
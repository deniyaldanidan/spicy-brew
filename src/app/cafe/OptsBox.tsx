'use client';

import React, { useEffect, useMemo, useState } from "react";
import styles from './optsBox.module.scss';
import cafeLocations from '@/cafeLocations.json';
import CustSelect1 from "../components/CustSelect1";
import URL_LIST from "@/url";
import { useRouter } from "next/navigation";

const sttList = cafeLocations.map(loc=>({label: loc.stateName, value: loc.stateName}))

type props = {
    no:number,
    defaultStt: string,
    defaultCity: string
}

export default function OptsBox({no, defaultStt, defaultCity}:props): React.JSX.Element {
    const router = useRouter();
    const [chosenStt, setChosenStt] = useState<string>(()=>cafeLocations.find(stt=>stt.stateName===defaultStt) ? defaultStt : "");
    const [chosenCity, setChosenCity] = useState<string>(()=>defaultCity?defaultCity: "");

    const cityList:{value:typeof chosenCity, label:string}[] = useMemo(()=>{
        const locObj = cafeLocations.find(loc=>loc.stateName===chosenStt);
        return locObj ? locObj.cities.map(cit=>({label:cit.cityName, value:cit.cityName})) : []
    }, [chosenStt]);


    useEffect(()=>{
        setChosenCity(prev=>{
            return cityList.find(cty=>cty.value===prev) ? prev : ""
        })
    }, [cityList])


    const handleSttChg = (val:typeof chosenStt)=>{
        cafeLocations.find(loc=>loc.stateName===val) ? setChosenStt(val) : setChosenStt("")
    }

    const handleCityChg = (val:typeof chosenCity)=>{
        cityList.find(cty=>cty.value===val) ? setChosenCity(val) : setChosenCity("")
    }

    const clickHandle = ()=>{
        router.push(URL_LIST.cafes.filter(chosenStt, chosenCity));
    }

    return (
        <div className={styles.optsBox}>
            <div className={styles.head}>
                <span>Find a cafe</span>
                <span>{no} Cafes</span>
            </div>
            <div className={styles.optsCnts}>
                <CustSelect1<typeof chosenStt> state={chosenStt} opts={[{label: "--Select State--", value: ""}, ...sttList]} handleChg={handleSttChg} />
                <CustSelect1<typeof chosenCity> state={chosenCity} opts={[{label: "--Select City--", value: ""}, ...cityList]} handleChg={handleCityChg}  />
                <button onClick={clickHandle}>Search</button>
            </div>
        </div>
    )
}
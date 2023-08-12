"use client";

import Image from "next/image";
import footerLogo from '@/assets/footer-logo.svg';
import {useMediaQuery} from 'react-responsive';


export default function FooterLogo({containerClass}:{containerClass:string}){

    const isTablet = useMediaQuery({query: '(max-width: 720px)'});


    return isTablet ? <></> : (
        <div className={containerClass}>
            <Image src={footerLogo} alt="Spicy Brew" />
        </div>
    )
}
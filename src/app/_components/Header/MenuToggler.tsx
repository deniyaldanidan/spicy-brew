"use client";

import { useMediaQuery } from "react-responsive";
import React from 'react';


export default function MenuToggler({DesktopMenu, MobileMenu}:{DesktopMenu:React.JSX.Element, MobileMenu:React.JSX.Element}){
    const isBelow1100 = useMediaQuery({query: '(max-width: 1100px)'});

    return isBelow1100 ? MobileMenu : DesktopMenu
}
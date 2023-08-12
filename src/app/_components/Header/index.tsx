import styles from './index.module.scss';
import headerLogo from '@/assets/header-logo.svg';
import LoadingHeader from './LoadingHeader';
import HumBurgerMenu from './HumBurgerMenu.tsx';
import DesktopMenu from './DesktopMenu';
import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';


const MenuToggler = dynamic(()=>import('./MenuToggler'), {ssr: false, loading: ()=><LoadingHeader />});

export default function Header(): React.JSX.Element {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Image src={headerLogo} alt="Spicy Brew - The Best of the best coffee brand" priority />
            </div>
            <MenuToggler MobileMenu={<HumBurgerMenu />} DesktopMenu={<DesktopMenu />} />
        </div>
    )
}


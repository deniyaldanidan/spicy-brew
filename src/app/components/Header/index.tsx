import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import headerLogo from '../../assets/header-logo.svg';
import Image from 'next/image';
import MenuDrpDwn from './MenuDrpDwn';
import { AboutOpts, HowToOpts, shopOpts } from './data';


export default function Header ():React.JSX.Element{
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Image src={headerLogo} alt="Spicy Brew - The Best of the best coffee brand" />
            </div>
            <div className={styles.menu}>
                <Link href="/" className={styles.menuItem}>Home</Link>
                <MenuDrpDwn menuLabel='Shop' opts={shopOpts} />
                <Link href="/subscribe" className={styles.menuItem}>Subscribe</Link>
                <Link href="/cafe" className={styles.menuItem}>Cafe&apos;s</Link>
                <MenuDrpDwn menuLabel="How To's" opts={HowToOpts} />
            </div>
            <div className={styles.menu}>
                <MenuDrpDwn menuLabel='About' opts={AboutOpts} />
                <Link href="/contact" className={styles.menuItem}>Contact</Link>
                <Link href="/logIn" className={styles.menuItem}>Log In</Link>
                <Link href="/cart"><AiOutlineShoppingCart/></Link>
            </div>
        </div>
    )
}
import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import headerLogo from '../../assets/header-logo.svg';
import Image from 'next/image';
import MenuDrpDwn from './MenuDrpDwn';
import URL_LIST, { shopType } from '@/url';

const shopOpts = [ { path: URL_LIST.shop.path, label: "All" }, ...shopType.map(t => ({ label: t.replaceAll("-", " "), path: URL_LIST.shop.filter(t) })) ]

export default function Header(): React.JSX.Element {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Image src={headerLogo} alt="Spicy Brew - The Best of the best coffee brand" />
            </div>
            <div className={styles.menu}>
                <Link href={URL_LIST.home.path} className={styles.menuItem}>{URL_LIST.home.label}</Link>
                <MenuDrpDwn menuLabel={URL_LIST.shop.label} opts={shopOpts} />
                <Link href={URL_LIST.subscribe.path} className={styles.menuItem}>{URL_LIST.subscribe.label}</Link>
                <Link href={URL_LIST.cafes.path} className={styles.menuItem}>Cafe&apos;s</Link>
                <MenuDrpDwn menuLabel={URL_LIST.howTos.label} opts={Object.values(URL_LIST.howTos.path_children)} />
            </div>
            <div className={styles.menu}>
                <MenuDrpDwn menuLabel={URL_LIST.about.label} opts={Object.values(URL_LIST.about.path_children)} />
                <Link href={URL_LIST.contact.path} className={styles.menuItem}>{URL_LIST.contact.label}</Link>
                <Link href={URL_LIST.login.path} className={styles.menuItem}>Log In</Link>
                <Link href={URL_LIST.cart.path}><AiOutlineShoppingCart /></Link>
            </div>
        </div>
    )
}
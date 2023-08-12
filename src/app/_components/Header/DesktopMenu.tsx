import styles from './desktop-menu.module.scss';
import Link from 'next/link';
import MenuDrpDwn from './MenuDrpDwn';
import URL_LIST from '@/url';
import AuthMenu from './AuthMenu';
import { shopOpts } from './data';


export default function DesktopMenu() {
    return (
        <>
            <div className={styles.menu}>
                <Link href={URL_LIST.home.path} className={styles.menuItem}>{URL_LIST.home.label}</Link>
                <MenuDrpDwn menuLabel={URL_LIST.shop.label} opts={shopOpts} />
                <Link href={URL_LIST.subscribe.path} className={styles.menuItem}>{URL_LIST.subscribe.label}</Link>
                <Link href={URL_LIST.cafes.path} className={styles.menuItem}>Cafe&apos;s</Link>
                <MenuDrpDwn menuLabel={URL_LIST.howTos.label} opts={Object.values(URL_LIST.howTos.path_children)} />
            </div>
            <div className={styles.menu}>
                <Link href={URL_LIST.about.path} className={styles.menuItem}>{URL_LIST.about.label}</Link>
                <Link href={URL_LIST.contact.path} className={styles.menuItem}>{URL_LIST.contact.label}</Link>
                <AuthMenu className={styles.menuItem} />
            </div>
        </>
    )
}
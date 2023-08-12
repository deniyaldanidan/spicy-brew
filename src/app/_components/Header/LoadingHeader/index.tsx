import styles from './index.module.scss';
import URL_LIST from '@/url';
import Link from 'next/link';


export default function LoadingHeader(){
    return (
        <>
            <div className={styles.loading_menu}>
                <Link href={URL_LIST.home.path}>Home</Link>
                <Link href={URL_LIST.shop.path}>Shop</Link>
                <Link href={URL_LIST.subscribe.path}>Subscribe</Link>
                <Link href={URL_LIST.cafes.path}>Cafe&apos;s</Link>
                <Link href={URL_LIST.howTos.path_children.guides.path}>How To&apos;s</Link>
            </div>
            <div className={styles.loading_menu}>
                <Link href={URL_LIST.about.path}>Our Story</Link>
                <Link href={URL_LIST.contact.path}>Contact</Link>
            </div>
        </>
    )
}
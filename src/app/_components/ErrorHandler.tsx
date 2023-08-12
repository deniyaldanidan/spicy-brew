import styles from '@/styles/infoPage.module.scss';
import errorImg from '@/assets/error.png';
import URL_LIST from '@/url';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import clsx from 'clsx';

export default function ErrorHandler({reset, homeBTN}:{reset:()=>void, homeBTN?:true}) {
    const router = useRouter();

    return (
        <div className={clsx(styles.info_page, styles.error)}>
            <Image src={errorImg} alt="Error Happened"/>
            <p>Sorry, An Error Happened. Click Try again{homeBTN ? " or Go Home" : ""}.</p>
            <div className={styles.btn_grps}>
                <button onClick={() => reset()}>Try Again</button>
                {
                    homeBTN ? <button onClick={() => router.replace(URL_LIST.home.path)}>Go Home</button> : ""
                }
            </div>
        </div>
    )
}
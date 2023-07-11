import Image from "next/image";
import Error401 from '@/assets/401.svg';
import styles from '@/styles/infoPage.module.scss';
import clsx from "clsx";

export default function UnAuthenticated401({text}:{text:string}){
    return (
        <div className={clsx(styles.info_page, styles.error)}>
            <Image src={Error401} alt="Error 404 Happened" priority={true} />
            <p>{text}</p>
        </div>
    )
}
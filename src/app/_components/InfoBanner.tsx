import React from 'react';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import styles from '@/styles/components/infoBanner.module.scss';


export default function InfoBanner ({ text }: { text: string }):React.JSX.Element{
    return (
        <div className={styles.info_banner}>
            <BsFillInfoCircleFill />
            <span>{text}</span>
        </div>
    )
}
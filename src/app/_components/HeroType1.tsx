import styles from '@/styles/components/hero-type-1.module.scss';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import clsx from 'clsx';
import Image from 'next/image';

type props = {
    image: StaticImport,
    imageAlt: string,
    title: string,
    desc: string,
    enlarged ?: true
}

export default function HeroType1({image, imageAlt, title, desc, enlarged}:props) {
    return (
        <div className={styles.hero_type_1}>
            <Image src={image} alt={imageAlt} priority quality={100} />
            <div className={styles.contents}>
                <div className={styles.title}>{title}</div>
                <div className={clsx(styles.desc, enlarged && styles.enlarged)}>{desc}</div>
            </div>
        </div>
    )
}
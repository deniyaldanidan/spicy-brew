import styles from '@/styles/components/hero-type-1.module.scss';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

type props = {
    image: StaticImport,
    imageAlt: string,
    title: string,
    desc: string
}

export default function HeroType1({image, imageAlt, title, desc}:props) {
    return (
        <div className={styles.hero_type_1}>
            <Image src={image} alt={imageAlt} priority quality={100} />
            <div className={styles.contents}>
                <div className={styles.title}>{title}</div>
                <div className={styles.desc}>{desc}</div>
            </div>
        </div>
    )
}
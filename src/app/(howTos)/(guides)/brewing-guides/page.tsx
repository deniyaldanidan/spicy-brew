import URL_LIST from "@/url";
import Image from "next/image";
import styles from '../main.module.scss';
import Link from "next/link";
import getGuides from "@/libs/getGuides";
import clsx from 'clsx';



export default function Page(){

    const {guides} = getGuides();

    return (
        <div className={styles.guides_page}>
            <div className={styles.hero}>
                <div className={styles.title}>Coffee Brewing Guides</div>
                <div className={styles.desc}>Discover expert guides to perfect your coffee brewing skills.</div>
            </div>
            <div className={styles.guides}>
                {
                    guides.map(guide=>(
                        <div key={guide.id} className={clsx(styles.guide_card, styles.guide_div)}>
                            <Image src={URL_LIST.guideImagePath(guide.id)} alt={guide.title} priority width={320} height={280} quality={50} />
                            <div className={styles.card_conts}>
                                <div className={styles.title}>{guide.title}</div>
                                <div className={styles.excerpt}>{guide.excerpt.slice(0,80)}...</div>
                                <div className={styles.meta}>
                                    <span>{guide["Total Time"]}</span>
                                    <Link href={"https://danithedev.tech/"}>Read More..</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
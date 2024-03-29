import styles from '@/styles/_pages/guides.module.scss';
import URL_LIST from "@/url";
import Image from "next/image";
import Link from "next/link";
import getGuides from "@/libs/getGuides";
import clsx from 'clsx';
import { Metadata } from 'next';

export const metadata:Metadata = {
    title: "Brewing Guides",
    description: "Brewing Guides from Spicy Brew"
}

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
                            <Image src={URL_LIST.guideImagePath(guide.id)} alt={guide.title} priority width={750} height={600} quality={95} />
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
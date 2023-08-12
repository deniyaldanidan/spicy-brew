import styles from '@/styles/_pages/careers.module.scss';
import heroImg from './_assets/careers.jpg';
import AccordionShell from '@/app/_components/AccordionShell';
import perks from '@/data/careerPerks.json'
import getCareers from '@/libs/getCareers';
import { careerCategories } from '@/custTypes';
import { HiMinus, HiPlus } from 'react-icons/hi';
import { MdOutlineWorkHistory } from 'react-icons/md';
import { BsCurrencyRupee } from 'react-icons/bs';
import HeroType1 from '../_components/HeroType1';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Careers",
    description: "Job Openings in Spicy Brew"
}

export default function Page() {
    const { data } = getCareers();

    return (
        <>
            <HeroType1 image={heroImg} imageAlt='Careers' title='Careers' desc='Join the Spicy Brew team and make your mark in the world of coffee! Explore our current job openings and apply for a fulfilling career with a company that values its people' />
            <div className={styles.career_page}>
                <div className={styles.careers}>
                    <div className={styles.title}>Current Openings</div>
                    <div className={styles.career_list} >
                        {careerCategories.map(cat => (
                            <div key={cat} className={styles.career_section}>
                                <div className={styles.career_head}>{cat}</div>
                                <div className={styles.section_list}>
                                    {data.filter(career => career.category === cat).map(career => (
                                        <AccordionShell
                                            key={career.id}
                                            headText={career.title}
                                            parentClassName={styles.opening_card}
                                            headClassName={styles.opening_label}
                                            bodyClassName={styles.opening_body}
                                            activeIcon={<HiMinus />}
                                            passiveIcon={<HiPlus />}
                                        >
                                            <div className={styles.opening_desc}>{career.description}</div>
                                            <div className={styles.opening_meta}>
                                                <span><MdOutlineWorkHistory /> {career.Experience}</span>
                                                <span>
                                                    <BsCurrencyRupee />
                                                    {career.Salary}
                                                </span>
                                            </div>
                                            <button>Apply now</button>
                                        </AccordionShell>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.perks}>
                    <div className={styles.perks_head}>Perks and Benefits</div>
                    <div className={styles.perks_list}>
                        {
                            perks.map(perk => (
                                <div key={perk.title} className={styles.perk}>
                                    <div className={styles.perk_title}>{perk.title}</div>
                                    <div className={styles.perk_desc}>{perk.description}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className={styles.welcome}>
                    <div className={styles.title}>Spicy Brew welcomes you all!</div>
                    <div className={styles.desc}>
                        Join us on our exciting coffee journey! Explore diverse career opportunities and be part of a team passionate about exceptional coffee. From baristas to marketers, unleash your creativity and expertise at Spicy Brew. Let&apos;s brew greatness together!
                    </div>
                </div>
            </div>
        </>
    )
}
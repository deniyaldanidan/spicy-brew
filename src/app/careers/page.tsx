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


export default function Page() {

    const { data } = getCareers();


    return (
        <div className={styles.career_page}>
            <HeroType1 image={heroImg} imageAlt='Careers' title='Careers' desc='Join the Spicy Brew team and make your mark in the world of coffee! Explore our current job openings and apply for a fulfilling career with a company that values its people' enlarged  />

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
                <div className={styles.title}>Join our coffee journey: Spicy Brew welcomes you all!</div>
                <div className={styles.desc}>
                    At Spicy Brew, we believe in the power of coffee to create memorable moments and ignite passion. We are thrilled to welcome coffee enthusiasts, innovators, and dreamers to join us on our exciting coffee journey. Explore our diverse range of career opportunities and be a part of a vibrant team that shares a deep love for exceptional coffee. From baristas and roasters to marketers and researchers, we offer a variety of roles that allow you to unleash your creativity, expertise, and dedication. Discover a fulfilling career at Spicy Brew and let&apos;s brew greatness together!
                </div>
            </div>
        </div>
    )
}
import { FAQCategories } from '@/custTypes';
import styles from './index.module.scss';
import Link from 'next/link';
import URL_LIST from '@/url';
import getFaqs from '@/libs/getFaqs';
import AccordionShell from '../../components/AccordionShell';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';


const myPath: string = URL_LIST.howTos.path_children.faqs.path;


const FAQ = ({ faq }: { faq: any }) => {
    return (
        <AccordionShell
            parentClassName={styles.faq}
            bodyClassName={styles.answer}
            headClassName={styles.question}
            headText={faq.question}
            activeIcon={<AiOutlineUp />}
            passiveIcon={<AiOutlineDown />}
        >
            {faq.answer}
        </AccordionShell>
    )
}


export default function Page() {

    const { data } = getFaqs();

    return (
        <div className={styles.faqPage}>
            <div className={styles.hero_section}>
                <div className={styles.title}>FAQs</div>
                <div className={styles.page_desc}>Your questions, our solutions.</div>
            </div>
            <div className={styles.page_links}>
                {
                    FAQCategories.map(cat => <Link href={`${myPath}#${cat}`} scroll={false} key={cat}>{cat}</Link>)
                }
            </div>
            <div className={styles.faq_sections}>
                {FAQCategories.map(cat => (
                    <div className={styles.faq_section} key={cat} id={cat}>
                        <div className={styles.sec_title}>{cat}</div>
                        <div className={styles.sec_contents}>
                            {data.filter(faq => faq.category === cat).map(faq => <FAQ key={faq.id} faq={faq} />)}
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.still_have}>
                <div className={styles.contents}>
                    <div className={styles.title}>Still Need Help?</div>
                    <div className={styles.desc}>Can&apos;t find what you&apos;re looking for? Chat with us!</div>
                </div>
                <Link href={URL_LIST.contact.path} scroll>Get In Touch</Link>
            </div>
        </div>
    )
}
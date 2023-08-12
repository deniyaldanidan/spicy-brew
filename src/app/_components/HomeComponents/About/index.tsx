import Image from 'next/image';
import styles from './index.module.scss';
import Link from 'next/link';
import URL_LIST from '@/url';
import aboutPic from './about.jpg'


export default function About() {
    return (
        <div className={styles.about}>
            <div className={styles.section_title}>About Us</div>
            <div className={styles.section_content}>
                <Image src={aboutPic} alt="About Us" />
                <div className={styles.section_cont}>
                    <p>
                        <span>Welcome to Spicy Brew, where quality, sustainability, and the art of coffee unite. Founded in 2004 by Mark Twain and Michael Sanders, we source beans directly from small farms, ensuring fair prices and sustainable practices. With meticulous roasting, we craft truly exceptional coffee experiences, driven by our core values and passion for specialty coffee.</span>
                        <span>Spicy Brew offers an enriching coffee experience with a commitment to sustainability. Join us in savoring the finest coffee moments and making a positive impact on the environment and communities we support. Celebrate the artistry, joy, and unity in every sip of Spicy Brew - your extraordinary coffee journey awaits!</span>
                    </p>
                    <Link href={URL_LIST.about.path}>Read More</Link>
                </div>
            </div>
        </div>
    )
}
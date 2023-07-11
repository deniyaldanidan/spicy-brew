import React from "react";
import styles from '@/styles/components/footer.module.scss';
import Image from "next/image";
import footerLogo from '@/assets/footer-logo.svg';
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import URL_LIST from "@/url";

const companyList = [URL_LIST.partner, URL_LIST.careers, URL_LIST.press, URL_LIST.howTos.path_children.faqs];
const policyList = [URL_LIST.termsNConditions, URL_LIST.privacy, URL_LIST.shipping, URL_LIST.returnsNCancellations];

export default function Footer(): React.JSX.Element {
    return (
        <div className={styles.footer}>
            <div className={styles.primary}>
                <div className={styles.footerLogo}>
                    <Image src={footerLogo} alt="Spicy Brew" />
                </div>
                <div className={styles.subscribe}>
                    <div className={styles.subscribeHead}>Subscribe to our newsletter</div>
                    <div className={styles.subscribeInpGrp}>
                        <input type="email" placeholder="example@example.com" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
            <div className={styles.secondary}>
                <div className={styles.footerMenu}>
                    <div className={styles.menuHead}>Company</div>
                    {
                        companyList.map(comp=><Link href={comp.path} key={comp.path}>{comp.label}</Link>)
                    }
                </div>
                <div className={styles.footerMenu}>
                    <div className={styles.menuHead}>Policies</div>
                    {
                        policyList.map(pol=><Link href={pol.path} key={pol.path}>{pol.label}</Link>)
                    }
                </div>
                <div className={styles.footerMenu}>
                    <div className={styles.menuHead}>Contact</div>
                    <p className={styles.address}>
                        <span>
                            Ground Floor,
                        </span>
                        <span>
                            Sunflower Avenue,
                        </span>
                        <span>
                            Anna Road, Chennai,
                        </span>
                        <span>
                            Tamil Nadu 600002.
                        </span>
                    </p>
                    <Link href="tel: +91 72 30912456" className={styles.telephone}>+91 72 30912456</Link>
                    <Link href={URL_LIST.contact.path}>Get In Touch</Link>
                </div>
                <div className={styles.socials}>
                    <div className={styles.socialsHead}>Follow us on</div>
                    <div className={styles.socialsContents}>
                        <BsFacebook className={styles.socialIcon} />
                        <BsInstagram className={styles.socialIcon} />
                        <BsTwitter className={styles.socialIcon} />
                    </div>
                </div>
            </div>
            <div className={styles.tertiary}>
                <span>Copyright &copy; 2023 <Link href="https://danithedev.tech">Dani&apos;s Products.</Link></span>
                <span>All rights reserved.</span>
            </div>
        </div>
    );
}
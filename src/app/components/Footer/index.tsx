import React from "react";
import styles from './index.module.scss';
import Image from "next/image";
import footerLogo from '../../assets/footer-logo.svg';
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';



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
                    <Link href="/partner-with-us">Partner with us</Link>
                    <Link href="/careers">Careers</Link>
                    <Link href="/press">Press</Link>
                    <Link href="faq">FAQ</Link>
                </div>
                <div className={styles.footerMenu}>
                    <div className={styles.menuHead}>Policies</div>
                    <Link href="/terms-n-conditions">Terms & Conditions</Link>
                    <Link href="/privacy">Privacy Policy</Link>
                    <Link href="/shipping">Shipping</Link>
                    <Link href="returns-n-cancellations">Returns & Cancellations</Link>
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
                    <Link href="/contact">Get In Touch</Link>
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
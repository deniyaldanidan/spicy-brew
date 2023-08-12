import styles from '@/styles/_pages/our-story.module.scss';
import cover from './_assets/Our-Story-Cover.jpg';
import beginnings from './_assets/beginnings.svg';
import coffee from './_assets/coffee.svg';
import values from './_assets/values.svg';
import future from './_assets/future.svg';
import URL_LIST from "@/url";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Our Story",
    description: "Discover the story of Spicy Brew, a coffee brand with a passion for quality and sustainability."
}

export default function Page(): React.JSX.Element {
    return (
        <div className={styles.story}>
            <div className={styles.headSection}>
                <Image src={cover} quality={40} alt="Our Story" />
                <div className={styles.contents}>
                    <div className={styles.title}>Our Story</div>
                    <div className={styles.description}>Discover the story of Spicy Brew, a coffee brand with a passion for quality and sustainability.</div>
                </div>
            </div>
            {/* Beginnings */}
            <div className={styles.section1}>
                <div className={styles.head}>Our Beginnings</div>
                <div className={styles.section_contents}>
                    <div className={styles.contents}>
                        <p>
                            <span>
                                <strong>Spicy Brew</strong> was founded in 2004 by Mark Twain and Michael Sanders, two coffee lovers with a passion for quality and sustainability. From the very beginning, we&apos;ve been committed to sourcing our beans directly from small farms and ensuring fair prices and sustainable practices. Our roasting process is carefully calibrated to bring out the unique flavors of each bean, resulting in truly exceptional coffee.
                            </span>
                            <span>
                                Over the years, <strong>Spicy Brew</strong> has grown from a small café in Chennai to a thriving brand with locations across the country. Despite our growth, we&apos;ve never lost sight of our core values and commitment to quality. We&apos;re proud to be part of the specialty coffee movement and are excited to continue sharing our passion with the world.
                            </span>
                        </p>
                    </div>
                    <Image src={beginnings} alt="Our Beginnings" quality={50} priority />
                </div>
            </div>
            {/* Coffee */}
            <div className={clsx(styles.section1, styles.section1_reverse)}>
                <div className={styles.head}>Our Coffee</div>
                <div className={styles.section_contents}>
                    <div className={styles.contents}>
                        <p>
                            <span>
                                At <strong>Spicy Brew</strong>, we&apos;re passionate about delivering exceptional coffee. Our beans are sourced directly from farms in <strong>Kodagu, Nilgris and Wayanad</strong>, where we work closely with farmers to ensure fair prices and sustainable practices. Our expert roasters carefully roast each batch to bring out the unique flavors and aromas of the beans.
                            </span>
                            <span>
                                Our coffee menu features a wide range of blends and single-origin offerings, each with its own unique flavor profile. Whether you prefer a light and fruity blend or a dark and bold roast, we have something for everyone at Spicy Brew. Come explore our coffee menu and discover your new favorite cup.
                            </span>
                        </p>
                        <Link href={URL_LIST.shop.filter("coffee")}>Explore Menu <FaAngleRight className={styles.linkIcon} /></Link>
                    </div>
                    <Image src={coffee} alt="Our Coffee" quality={50} />
                </div>
            </div>
            {/* Values */}
            <div className={clsx(styles.section1, styles.section2)}>
                <div className={styles.head}>Our Values</div>
                <div className={styles.section_contents}>
                    <div className={styles.contents}>
                        <p>
                            <span>
                                At <strong>Spicy Brew</strong>, we believe in doing business in a way that benefits everyone involved. From the farmers who grow our coffee beans to the customers who enjoy our products, we are committed to making a positive impact at every step of the way.
                            </span>
                        </p>
                        <div className={styles.highlightedList}>
                            <div className={styles.HLItem}>
                                <div className={styles.itemHead}>Sustainability</div>
                                <div className={styles.itemContent}>
                                    We are committed to minimizing our environmental impact and promoting sustainable practices throughout our supply chain. This includes sourcing our beans from farms that use eco-friendly methods and reducing waste in our cafés.
                                </div>
                            </div>
                            <div className={styles.HLItem}>
                                <div className={styles.itemHead}>Fairness</div>
                                <div className={styles.itemContent}>
                                    We believe in paying fair prices to our farmers and treating all of our employees with respect and dignity. By doing business in an ethical and transparent manner, we hope to create a better future for everyone involved.
                                </div>
                            </div>
                            <div className={styles.HLItem}>
                                <div className={styles.itemHead}>Community</div>
                                <div className={styles.itemContent}>
                                    We are deeply invested in our local community and strive to make a positive impact through partnerships and initiatives. From sponsoring local events to donating a portion of our profits to charity, we are committed to giving back.
                                </div>
                            </div>
                            <div className={styles.HLItem}>
                                <div className={styles.itemHead}>Quality</div>
                                <div className={styles.itemContent}>
                                    Above all, we are dedicated to providing the highest quality products to our customers. From sourcing the best beans to carefully calibrating our roasting process, we go above and beyond to ensure that every cup of coffee is exceptional.
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image src={values} alt="Our values" quality={50} />
                </div>
            </div>
            {/* Future */}
            <div className={clsx(styles.section1, styles.section2, styles.section2Alt)}>
                <div className={styles.head}>Our Future</div>
                <div className={styles.section_contents}>
                    <div className={styles.contents}>
                        <p>
                            <span>
                                At <strong>Spicy Brew</strong>, we are excited about the future. As we continue to grow and evolve, we remain committed to our core values and our passion for exceptional coffee.
                            </span>
                        </p>
                        <div className={styles.highlightedList}>
                            <div className={styles.HLItem}>
                                <div className={styles.itemHead}>Expansion</div>
                                <div className={styles.itemContent}>
                                    We have plans to open new café locations in <strong>Trivandrum and Mumbai</strong>, bringing our unique brand of coffee to even more people.
                                </div>
                            </div>
                            <div className={styles.HLItem}>
                                <div className={styles.itemHead}>Innovation</div>
                                <div className={styles.itemContent}>
                                    We are constantly exploring new ways to improve our products and processes. From experimenting with new roasting techniques to developing eco-friendly packaging, we are always pushing the boundaries.
                                </div>
                            </div>
                            <div className={styles.HLItem}>
                                <div className={styles.itemHead}>Community</div>
                                <div className={styles.itemContent}>
                                    As we grow, we remain deeply committed to our local community. We will continue to partner with organizations and initiatives that align with our values, making a positive impact in the world around us.
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image src={future} alt="Our Future" quality={50} />
                </div>
            </div>
        </div>
    )
}
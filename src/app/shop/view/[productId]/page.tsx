import styles from '@/styles/_pages/shop-view.module.scss';
import BreadCrumb from '@/app/_components/BreadCrumb';
import ProgressBar from '@/app/_components/ProgressBar';
import RatingStars from '@/app/_components/RatingStars';
import UserImage from '@/app/_components/UserImage';
import getProduct from '@/libs/getProduct';
import getReviews from '@/libs/getReviews';
import { getAllProducts } from '@/libs/getAllProducts';
import VPLoader from './_components/VPLoader';
import URL_LIST from '@/url';
import React from 'react';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { FaStar } from 'react-icons/fa';
import { Metadata } from 'next';

const ViewProduct = dynamic(() => import('./_components/ViewProduct'), { ssr: false, loading: () => <VPLoader /> });

const RatingDisplay = ({ ratingPercent, ratingLabel, ratingColor }: { ratingPercent: number, ratingLabel: number, ratingColor: string }): React.JSX.Element => {
    return (
        <div className={styles.rating_display}>
            <div className={styles.rating_display_label}>
                <span>{ratingLabel}</span>
                <FaStar />
            </div>
            <div className={styles.rating_display_bar_stat}>
                <ProgressBar trackColor='#ddd' progress={ratingPercent} progressColor={ratingColor} />
            </div>
            <div className={styles.rating_display_count}>{ratingPercent.toFixed(1)}%</div>
        </div>
    )
}

export async function generateStaticParams() {
    const products = getAllProducts();

    return products.map(prd => ({
        productId: prd.id
    }))
}

export async function generateMetadata({ params: { productId } }: { params: { productId: string } }): Promise<Metadata> {
    const { product } = getProduct(productId);

    if (typeof product === "undefined") {
        return {};
    }

    return {
        title: product.name,
        description: product.description
    }
}

export default function Page({ params }: { params: { productId: string } }) {
    const { productId } = params;

    const { product } = getProduct(productId);

    if (!product) {
        notFound()
    }

    const { reviews, ratingCounts, totalReviews, averageRatings } = getReviews(productId);

    return (
        <>
            <div className={styles.crumb_container}>
                <BreadCrumb current={product.name} parents={[{ path: URL_LIST.shop.path, label: "Shop" }, { path: URL_LIST.shop.filter(product.category), label: product.category.replaceAll("_", " ") }]} />
            </div>
            <ViewProduct
                product={product}
            />

            <div className={styles.ratings_section}>
                <div className={styles.sec_head}>Customer Reviews</div>
                <div className={styles.sec_top}>
                    <div className={styles.sec_top1}>
                        <div className={styles.sec_top1_h}>Average Rating</div>
                        <div className={styles.sec_top1_stat}>{averageRatings.toFixed(1)}</div>
                        <RatingStars ratings={averageRatings} mini={false} />
                        <div className={styles.sec_top1_count}>({totalReviews} reviews)</div>
                    </div>
                    <div className={styles.sec_top2}>
                        <RatingDisplay ratingPercent={(ratingCounts.fiveStar / totalReviews) * 100} ratingLabel={5} ratingColor='#57e32c' />
                        <RatingDisplay ratingPercent={(ratingCounts.fourStar / totalReviews) * 100} ratingLabel={4} ratingColor='#b7dd29' />
                        <RatingDisplay ratingPercent={(ratingCounts.threeStar / totalReviews) * 100} ratingLabel={3} ratingColor='#ffe234' />
                        <RatingDisplay ratingPercent={(ratingCounts.twoStar / totalReviews) * 100} ratingLabel={2} ratingColor='#ffa534' />
                        <RatingDisplay ratingPercent={(ratingCounts.oneStar / totalReviews) * 100} ratingLabel={1} ratingColor='#ff4545' />
                    </div>
                </div>

                <div className={styles.ratings_list}>
                    {reviews.map(rev => (
                        <div key={rev.id} className={styles.rating_card}>
                            <UserImage gender={rev.gender} username={rev.username} />
                            <div className={styles.rating_cont}>
                                <div className={styles.rating_uname}>{rev.username}</div>
                                <div className={styles.rating_stat}>
                                    <RatingStars ratings={rev.ratings} mini />
                                    <div className={styles.rating_count}>({rev.ratings})</div>
                                </div>
                                <div className={styles.rating_review}>{rev.review}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
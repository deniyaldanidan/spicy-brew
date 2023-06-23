import BreadCrumb from '@/app/components/BreadCrumb';
import getProduct from '@/libs/getProduct';
import URL_LIST from '@/url';
import { notFound } from 'next/navigation';
import React from 'react';
import getReviews from '@/libs/getReviews';
import ProgressBar from '@/app/components/ProgressBar';
import RatingStars from '@/app/components/RatingStars';
import { FaStar } from 'react-icons/fa';
import styles from './main.module.scss';
import UserImage from '@/app/components/UserImage';
import dynamic from 'next/dynamic';
import VPLoader from './VPLoader';

const ViewProduct = dynamic(()=>import('./ViewProduct'), {ssr: false, loading: ()=><VPLoader />});


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

export default function Page({ params }: { params: { productId: string } }) {
    const { productId } = params;

    const { product } = getProduct(productId);

    if (!product) {
        notFound()
    }

    const { reviews, ratingCounts, totalReviews, averageRatings } = getReviews(productId);

    return (
        <>
            <ViewProduct
                product={product}
                crumb={<BreadCrumb current={product.name} parents={[{ path: URL_LIST.shop.path, label: "Shop" }, { path: URL_LIST.shop.filter(product.category), label: product.category.replaceAll("_", " ") }]} />}
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


/**
 * 
 * 
 * 
 * 
 * 
 * 
 */
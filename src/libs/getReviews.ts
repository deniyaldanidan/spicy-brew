import 'server-only';

import { cache } from "react";
import reviews from '@/productReviews.json';

const getReviews = cache((prodId: string) => {
    const myReviews = reviews.filter(rev => rev.product_id === prodId);

    const ratingCounts = {
        fiveStar: 0,
        fourStar: 0,
        threeStar: 0,
        twoStar: 0,
        oneStar: 0
    }

    var ratingsSum = 0;

    const totalReviews = myReviews.length;

    myReviews.forEach(rev => {

        ratingsSum += rev.ratings;

        switch (Math.round(rev.ratings)) {
            case 5:
                ratingCounts.fiveStar += 1;
                break;
            case 4:
                ratingCounts.fourStar += 1;
                break;
            case 3:
                ratingCounts.threeStar += 1;
                break;
            case 2:
                ratingCounts.twoStar += 1;
                break;
            case 1:
                ratingCounts.oneStar += 1;
                break;
        }
    })

    return (
        {
            reviews: myReviews,
            totalReviews,
            ratingCounts,
            averageRatings: (ratingsSum / totalReviews)
        }
    )
});


export default getReviews;
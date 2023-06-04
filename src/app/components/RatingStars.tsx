import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import clsx from "clsx";


export default function RatingStars({ ratings, mini }: { ratings: number, mini: boolean }) {
    return (
        <div className={clsx("rating-stars-shw", mini && "rating-stars-shw-mini")}>
            {
                [1, 2, 3, 4, 5].map(num => {
                    const star = ratings - num + 1;

                    if (star >= 1) {
                        return <FaStar key={num} />
                    } else if (star < 1 && !(star <= 0)) {
                        return <FaStarHalfAlt key={num} />
                    } else {
                        return <FaStar key={num} className="inactive" />
                    }
                })
            }
        </div>
    )
}
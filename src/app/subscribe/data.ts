import URL_LIST from "@/url";
import bean from '@/assets/bean-sub-illus.png';
import cold from '@/assets/cold-sub-illus.png';
import easy from '@/assets/easy-sub-illus.png';

export const discountInfo = {
    "3-delivery": 5,
    "6-delivery": 10,
    "12-delivery": 25
}

export const subData = [
    {
        section: "Coffee Beans",
        image: bean,
        offers: [
            {
                discount: discountInfo["3-delivery"],
                link: URL_LIST.subscribe.child("3-delivery", "coffee"),
                label: "3 Delivery"
            },
            {
                discount: discountInfo["6-delivery"],
                link: URL_LIST.subscribe.child("6-delivery", "coffee"),
                label: "6 Delivery"
            },
            {
                discount: discountInfo["12-delivery"],
                link: URL_LIST.subscribe.child("12-delivery", "coffee"),
                label: "12 Delivery"
            }
        ]
    },
    {
        section: "Easy Coffee",
        image: easy,
        offers: [
            {
                discount: discountInfo["3-delivery"],
                link: URL_LIST.subscribe.child("3-delivery", "easy_coffee"),
                label: "3 Delivery"
            },
            {
                discount: discountInfo["6-delivery"],
                link: URL_LIST.subscribe.child("6-delivery", "easy_coffee"),
                label: "6 Delivery"
            },
            {
                discount: discountInfo["12-delivery"],
                link: URL_LIST.subscribe.child("12-delivery", "easy_coffee"),
                label: "12 Delivery"
            }
        ]
    },
    {
        section: "Cold Brew",
        image: cold,
        offers: [
            {
                discount: discountInfo["3-delivery"],
                link: URL_LIST.subscribe.child("3-delivery", "cold_brew"),
                label: "3 Delivery"
            },
            {
                discount: discountInfo["6-delivery"],
                link: URL_LIST.subscribe.child("6-delivery", "cold_brew"),
                label: "6 Delivery"
            },
            {
                discount: discountInfo["12-delivery"],
                link: URL_LIST.subscribe.child("12-delivery", "cold_brew"),
                label: "12 Delivery"
            }
        ]
    }
]
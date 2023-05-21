// * The reason i created this file is to easily maintain the url path.

export const shopType = ["coffee-beans", "cold-brew", "equipments", "easy-coffee-bags", "pantry"] as const;

export const deliveriesType = ["3-delivery", "6-delivery", "12-delivery"] as const;

export const deliverableProducts = ["coffee", "cold_brew", "easy_coffee"] as const;

const URL_LIST = {
    home: {
        label: "Home",
        path: "/"
    },
    about: {
        label: "Our Story",
        path: "/our-story"
    },
    subscribe: {
        label: "Subscribe",
        path: "/subscribe",
        child: (deliveries: typeof deliveriesType[number], type: typeof deliverableProducts[number]) => `/subscribe/${deliveries}/${type}`
    },
    cart: {
        label: "Cart",
        path: "/my-cart"
    },
    shop: {
        label: "Shop",
        path: "/shop",
        filter: (filter: typeof shopType[number]) => `/shop?type=${filter}`
    },
    cafes: {
        label: "Cafe's",
        path: "/cafe"
    },
    howTos: {
        label: "How To's",
        path_children: {
            events: {
                label: "Events & Classes",
                path: "/events-n-classes"
            },
            guides: {
                label: "Brewing Guides",
                path: "/brewing-guides"
            },
            blogs: {
                label: "Blogs",
                path: "/blogs"
            },
            faqs: {
                label: "FAQS",
                path: "/faqs"
            }
        }
    },
    blog: (blogId: number) => `/blogs/${blogId}`,
    contact: {
        label: "Contact",
        path: "/contact-us"
    },
    partner: {
        label: "Partner With Us",
        path: "/partner-with-us"
    },
    careers: {
        label: "Careers",
        path: "/careers"
    },
    press: {
        label: "Press",
        path: "/press"
    },
    termsNConditions: {
        label: "Terms & Conditions",
        path: "/terms-n-conditions"
    },
    privacy: {
        label: "Privacy Policy",
        path: "/privacy-policy"
    },
    shipping: {
        label: "Shipping Policy",
        path: "/shipping-policy"
    },
    returnsNCancellations: {
        label: "Returns & Cancellations",
        path: "/returns-n-cancellations"
    },
    login: {
        path: "/login"
    },
    register: {
        path: "/register"
    },
    myOrders: {
        path: "/my-orders",
        label: "My Orders",
        child: (orderId: string) => `/my-orders/${orderId}`
    },
    mySubscriptions: {
        path: "/my-subscriptions",
        label: "My Subscriptions",
        child: (subId: string) => `/my-subscriptions/${subId}`
    },
    account: {
        path: "/my-account",
        label: "My Account"
    }
} as const;

export default URL_LIST;
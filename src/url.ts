// * The reason i created this file is to easily maintain the url path.

export const shopType = [ "coffee-beans", "ground-coffee", "equipments", "easy-coffee-bags", "pantry" ] as const ;

const URL_LIST = {
    home: {
        label: "Home",
        path: "/"
    },
    about: {
        label: "About",
        path_children: {
            story: {
                path: "/our-story",
                label: "Our Story"
            },
            journey: {
                path: "/journey-of-your-beans",
                label: "Journey Of Your Beans"
            },
            roasteries: {
                path: "/our-roasteries",
                label: "Our Roasteries"
            }
        }
    },
    subscribe: {
        label: "Subscribe",
        path: "/subscribe"
    },
    cart: {
        label: "Cart",
        path: "/my-cart"
    },
    shop: {
        label: "Shop",
        path: "/shop",
        filter: (filter: typeof shopType[number])=>`/shop?type=${filter}`
    },
    cafes: {
        label: "Cafe's",
        path: "/cafe"
    },
    howTos: {
        label: "How To's",
        path: "/how-to",
        path_children: {
            events: {
                label: "Events & Classes",
                path: "/how-to/events-n-classes"
            },
            guides: {
                label: "Brewing Guides",
                path: "/how-to/brewing-guides"
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
    blog: (blogId:number)=>`/blogs/${blogId}`,
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
    trackOrder: {
        path: "/my-orders",
        label: "Track My Order",
        child: (orderId:string)=>`/my-orders/${orderId}`
    },
    account: {
        path: "/my-account",
        label: "My Account"
    }
} as const;

export default URL_LIST;
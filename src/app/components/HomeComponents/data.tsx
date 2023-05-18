import beans from '../../assets/roasted-coffee-beans.jpg';
import powdered from '../../assets/grounded-coffee.jpg';
import easy from '../../assets/easy-coffee.jpg';
import equipments from '../../assets/coffee-equipments.jpg';
import pantry from '../../assets/pantry.jpg';

import ooty from '../../assets/coffee-shop/ooty-speciale.jpg';
import bombay from '../../assets/coffee-shop/bombay-speciale.jpg';
import kodaiRoast from '../../assets/coffee-shop/kodai-roast.jpg';
import kodaiDark from '../../assets/coffee-shop/kodai-dark.jpg';
import deepBliss from '../../assets/coffee-shop/deep-bliss.jpg';
import frenchRoast from '../../assets/coffee-shop/french-roast.jpg';
import malabarRoast from '../../assets/coffee-shop/malabar-estate.jpg';
import nyNights from '../../assets/coffee-shop/new-york-nights.jpg';

import blog1 from '../../assets/blog/blog1.jpg';
import blog2 from '../../assets/blog/blog2.jpg';
import blog3 from '../../assets/blog/blog3.jpg';
import blog4 from '../../assets/blog/blog4.jpg';
import blog5 from '../../assets/blog/blog5.jpg';
import blog6 from '../../assets/blog/blog6.jpg';
import blog7 from '../../assets/blog/blog7.jpg';
import blog8 from '../../assets/blog/blog8.jpg';
import blog9 from '../../assets/blog/blog9.jpg';
import URL_LIST from '@/url';


export const categoryContent = [
    {
        image: beans,
        label: "Roasted Coffee Beans",
        path: URL_LIST.shop.filter("coffee-beans")
        
    },
    {
        image: powdered,
        label: "Ground Coffee",
        path: URL_LIST.shop.filter("ground-coffee")
    },
    {
        image: easy,
        label: "Easy Coffee",
        path: URL_LIST.shop.filter("easy-coffee-bags")
    },
    {
        image: equipments,
        label: "Equipments",
        path: URL_LIST.shop.filter("equipments")
    },
    {
        image: pantry,
        label: "Pantry",
        path: URL_LIST.shop.filter("pantry")
    }
];

export const bestsellers = [
    {
        image: deepBliss,
        name: "Deep Bliss",
        roast: "Medium Dark",
        flavors: ["Dark Chocolate", "Intense"],
        price: 500
    },
    {
        image: ooty,
        name: "Ooty Special",
        roast: "Dark",
        flavors: ["Milk Chocolate", "Caramel", "Raisin"],
        price: 450
    },
    {
        image: kodaiRoast,
        name: "Kodai Roast",
        roast: "Light",
        flavors: ["Vanilla", "Almond"],
        price: 600
    },
    {
        image: frenchRoast,
        name: "French Roast",
        roast: "Dark",
        flavors: ["Bitter", "Cocoa", "Intense"],
        price: 550
    },
    {
        image: malabarRoast,
        name: "Malabar Estate",
        roast: "Light",
        flavors: ["Vanilla", "Raisins"],
        price: 600
    },
    {
        image: kodaiDark,
        name: "Kodai Dark",
        roast: "Dark",
        flavors: ["Dark Chocolate", "Bitter"],
        price: 500
    },
    {
        image: nyNights,
        name: "New York Nights",
        roast: "Light",
        flavors: ["Vanilla", "Nutty"],
        price: 450
    },
    {
        image: bombay,
        name: "Bombay Speciale",
        roast: "Medium",
        flavors: ["Milk Chocolate", "Almonds"],
        price: 350
    }/*,
    {
        image: null,
        name: "Hyderabadi Coffee",
        roast: "Medium Dark",
        flavors: ["Chocolate", "Intense", "Almonds"],
        price: 500
    }*/
];

export const pressList = [
    {
        title: "Local coffee brand brews up success",
        image: blog1,
        by: "Chennai Express",
        date: "12, November, 2020"
    },
    {
        title: "Spicy-Brew Goes Green with Sustainable Practices",
        image: blog2,
        by: "Trivandrum Times",
        date: "5, December, 2022"
    },
    {
        title: "Spicy-Brew Introduces Innovative New Flavors",
        image: blog3,
        by: "Kochi Express",
        date: "21, Febraury, 2021"
    },
    {
        title: "Local Coffee Brand Spicy-Brew Wins Award for Exceptional Quality",
        image: blog4,
        by: "Bombay Chronicles",
        date: "10, July, 2019"
    },
    {
        title: "Spicy-Brew Introduces Revolutionary Brewing Technology",
        image: blog5,
        by: "The Delhi Times",
        date: "11, August, 2020"
    },
    {
        title: "Famous Coffee Brand Spicy-Brew Offers Exclusive Behind-the-Scenes Tours",
        image: blog6,
        by: "Chennai Express",
        date: "22, December, 2022"
    },
    {
        title: "Famous Coffee Brand Offers Educational Workshops for Coffee Lovers",
        image: blog7,
        date: "29, December, 2022",
        by: "The Daily News"
    },
    {
        title: "Spicy-Brew Sets New Record for Sales Growth",
        image: blog8,
        by: "Chennai Express",
        date: "25, April, 2023",
    },
    {
        title: "Local Coffee Brand Goes the Extra Mile for Environmental Sustainability",
        image: blog9,
        by: "Trivandrum Times",
        date: "20, November, 2022"
    }
]
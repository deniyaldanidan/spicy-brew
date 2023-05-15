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

export const categoryContent = [
    {
        image: beans,
        label: "Roasted Coffee Beans",
        path: "/shop?type=coffee-beans"
        
    },
    {
        image: powdered,
        label: "Ground Coffee",
        path: "/shop?type=ground-coffee"
    },
    {
        image: easy,
        label: "Easy Coffee",
        path: "/shop?type=easy-coffee-bags"
    },
    {
        image: equipments,
        label: "Equipments",
        path: "/shop?type=equipments"
    },
    {
        image: pantry,
        label: "Pantry",
        path: "/shop?type=pantry"
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
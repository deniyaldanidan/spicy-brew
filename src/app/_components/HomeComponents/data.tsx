import beans from '@/assets/roasted-coffee-beans.jpg';
import cold_brew from '@/assets/cold-brew.jpg';
import easy from '@/assets/easy-coffee.jpg';
import equipments from '@/assets/coffee-equipments.jpg';
import pantry from '@/assets/pantry.jpg';

import URL_LIST from '@/url';
import products from '@/data/products.json';

export const categoryContent = [
    {
        image: beans,
        label: "Roasted Coffee Beans",
        path: URL_LIST.shop.filter("coffee")
    },
    {
        image: easy,
        label: "Easy Coffee",
        path: URL_LIST.shop.filter("easy_coffee")
    },
    {
        image: cold_brew,
        label: "Cold Brew",
        path: URL_LIST.shop.filter("cold_brew")
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

export const bestsellers = [...products.filter(item=>item.category==="coffee").slice(0,2), ...products.filter(item=>item.category==="cold_brew").slice(0,2), ...products.filter(item=>item.category==="easy_coffee").slice(1,3)];


import ooty from '@/assets/coffee-beans/ooty-speciale.jpg';
import bombay from '@/assets/coffee-beans/bombay-speciale.jpg';
import kodaiLight from '@/assets/coffee-beans/kodai-roast.jpg';
import kodaiDark from '@/assets/coffee-beans/kodai-dark.jpg';
import deepBliss from '@/assets/coffee-beans/deep-bliss.jpg';
import frenchRoast from '@/assets/coffee-beans/french-roast.jpg';
import malabarRoast from '@/assets/coffee-beans/malabar-estate.jpg';
import nyNights from '@/assets/coffee-beans/new-york-nights.jpg';
import hyderabadi from '@/assets/coffee-beans/hyderabadi.jpg';

import easy_light from '@/assets/other-shop-items/light-easy.jpg';
import easy_medium from '@/assets/other-shop-items/medium-easy.jpg';
import easy_medium_dark from '@/assets/other-shop-items/medium-dark-easy.jpg';
import easy_dark from '@/assets/other-shop-items/dark-easy.jpg';

import wayanad_cold_light from '@/assets/other-shop-items/wayanad-cold-light.jpg';
import kodagu_cold_md from '@/assets/other-shop-items/kodagu-cold-medium.jpg';
import ooty_cold_md_dark from '@/assets/other-shop-items/ooty-cold-medium-dark.jpg';
import kodai_cold_dark from '@/assets/other-shop-items/kodai-cold-dark.jpg';

import moka_pot from '@/assets/other-shop-items/moka-pot.jpg';
import hand_grind from '@/assets/other-shop-items/hand-powered-grinder.jpg';
import auto_grind from '@/assets/other-shop-items/automatice-grinder.jpg';
import pour_over from '@/assets/other-shop-items/pour-over-coffee-dripper.jpg';

import sour_dough from '@/assets/other-shop-items/sour-dough-bread.jpg';
import multi_grain_loaf from '@/assets/other-shop-items/multi-grain-loaf.jpg';
import baguette from '@/assets/other-shop-items/baguette.jpg';
import honey from '@/assets/other-shop-items/honey.jpg';
import milk_choco from '@/assets/other-shop-items/coffee-milk-chocolate.jpg';
import dark_choco from '@/assets/other-shop-items/coffee-dark-chocolate.jpg';
import granola_coffee from '@/assets/other-shop-items/coffee-granola-bar.jpg';
import croissant_vanilla from '@/assets/other-shop-items/vanilla-croissant.jpg';
import croissant_nutty from '@/assets/other-shop-items/nutty-croissant.jpg';
import coffee_muffin from '@/assets/other-shop-items/coffee-muffin.jpg';
import ny_muffin from '@/assets/other-shop-items/ny-muffin.jpg';

import { StaticImageData } from 'next/image';


type productsType = {
    id: string,
    image: StaticImageData,
    name: string,
    roast?: "Dark" | "Light" | "Medium Dark" | "Medium",
    flavors?: string[],
    category: "coffee" | "easy_coffee" | "cold_brew" | "equipments" | "pantry",
    price: number,
    quantity: {
        value: number,
        units: "item" | "g"
    }
}

export const grindSizes = ["whole-beans", "medium-grind", "coarse-grind", "fine-grind"] as const;

export const products: productsType[] = [
    {
        id: "coffee_1",
        image: deepBliss,
        name: "Deep Bliss",
        roast: "Medium Dark",
        flavors: ["Dark Chocolate", "Intense"],
        category: "coffee",
        price: 500,
        quantity: {
            value: 500,
            units: "g"
        }
    },
    {
        id: "coffee_2",
        image: ooty,
        name: "Ooty Special",
        roast: "Dark",
        flavors: ["Milk Chocolate", "Caramel", "Raisin"],
        category: "coffee",
        price: 450,
        quantity: {
            value: 500,
            units: "g"
        }
    },
    {
        id: "coffee_3",
        image: kodaiLight,
        name: "Kodai Light",
        roast: "Light",
        flavors: ["Vanilla", "Almond"],
        category: "coffee",
        price: 600,
        quantity: {
            value: 500,
            units: "g"
        }
    },
    {
        id: "coffee_4",
        image: frenchRoast,
        name: "French Roast",
        roast: "Dark",
        flavors: ["Bitter", "Cocoa", "Intense"],
        category: "coffee",
        price: 550,
        quantity: {
            value: 500,
            units: "g"
        }
    },
    {
        id: "coffee_5",
        image: malabarRoast,
        name: "Malabar Estate",
        roast: "Light",
        flavors: ["Vanilla", "Raisins"],
        category: "coffee",
        price: 600,
        quantity: {
            value: 500,
            units: "g"
        }
    },
    {
        id: "coffee_6",
        image: kodaiDark,
        name: "Kodai Dark",
        roast: "Dark",
        flavors: ["Dark Chocolate", "Bitter"],
        category: "coffee",
        price: 500,
        quantity: {
            value: 500,
            units: "g"
        }
    },
    {
        id: "coffee_7",
        image: nyNights,
        name: "New York Nights",
        roast: "Light",
        flavors: ["Vanilla", "Nutty"],
        category: "coffee",
        price: 450,
        quantity: {
            value: 500,
            units: "g"
        }
    },
    {
        id: "coffee_8",
        image: bombay,
        name: "Bombay Speciale",
        roast: "Medium",
        flavors: ["Milk Chocolate", "Almonds"],
        category: "coffee",
        price: 350,
        quantity: {
            value: 500,
            units: "g"
        }
    },
    {
        id: "coffee_9",
        image: hyderabadi,
        name: "Hyderabadi Coffee",
        roast: "Medium Dark",
        flavors: ["Chocolate", "Intense", "Almonds"],
        category: "coffee",
        price: 500,
        quantity: {
            value: 500,
            units: "g"
        }
    },
    {
        id: "easy_1",
        image: easy_light,
        name: "Easy Light",
        roast: "Light",
        category: "easy_coffee",
        price: 300,
        quantity: {
            value: 500,
            units: "g"
        }
    },
    {
        id: "easy_2",
        image: easy_medium,
        name: "Easy Medium",
        roast: "Medium",
        category: "easy_coffee",
        price: 310,
        quantity: {
            value: 500,
            units: "g"
        }
    },
    {
        id: "easy_3",
        image: easy_medium_dark,
        name: "Easy Medium Dark",
        roast: "Medium Dark",
        category: "easy_coffee",
        price: 330,
        quantity: {
            value: 500,
            units: "g"
        }
    },
    {
        id: "easy_4",
        image: easy_dark,
        name: "Easy Dark",
        roast: "Dark",
        category: "easy_coffee",
        price: 360,
        quantity: {
            value: 500,
            units: "g"
        }
    },
    {
        id: "cold_1",
        image: wayanad_cold_light,
        name: "Wayanad Cold Brew",
        roast: "Light",
        category: "cold_brew",
        price: 550,
        quantity: {
            value: 500,
            units: "g"
        }
    },
    {
        id: "cold_2",
        image: kodagu_cold_md,
        name: "Kodagu Cold Brew",
        roast: "Medium",
        category: "cold_brew",
        price: 550,
        quantity: {
            value: 500,
            units: "g"
        }
    },
    {
        id: "cold_3",
        image: ooty_cold_md_dark,
        name: "Ooty Cold Brew",
        roast: "Medium Dark",
        category: "cold_brew",
        price: 590,
        quantity: {
            value: 500,
            units: "g"
        }
    },
    {
        id: "cold_4",
        image: kodai_cold_dark,
        name: "Kodai Cold Brew",
        roast: "Dark",
        category: "cold_brew",
        price: 650,
        quantity: {
            value: 500,
            units: "g"
        }
    },
    {
        id: "equip_1",
        image: moka_pot,
        name: "Moka Pot",
        category: "equipments",
        price: 6500,
        quantity: {
            value: 1,
            units: "item"
        }
    },
    {
        id: "equip_2",
        image: hand_grind,
        name: "Hand Powered Grinder",
        category: "equipments",
        price: 3000,
        quantity: {
            value: 1,
            units: "item"
        }
    },
    {
        id: "equip_3",
        image: auto_grind,
        name: "Automatic Coffee Grinder",
        category: "equipments",
        price: 5000,
        quantity: {
            value: 1,
            units: "item"
        }
    },
    {
        id: "equip_4",
        image: pour_over,
        name: "Pour Over Coffee Dripper",
        category: "equipments",
        price: 1500,
        quantity: {
            value: 1,
            units: "item"
        }
    },
    {
        id: "pantry_1",
        image: sour_dough,
        name: "Sour Dough",
        category: "pantry",
        price: 50,
        quantity: {
            value: 4,
            units: "item"
        }
    },
    {
        id: "pantry_2",
        image: baguette,
        name: "Baguettes",
        category: "pantry",
        price: 100,
        quantity: {
            value: 3,
            units: "item"
        }
    },
    {
        id: "pantry_3",
        image: multi_grain_loaf,
        name: "Multi Grain Loaf",
        category: "pantry",
        price: 300,
        quantity: {
            value: 3,
            units: "item"
        }
    },
    {
        id: "pantry_4",
        image: honey,
        name: "Honey",
        category: "pantry",
        price: 900,
        quantity: {
            value: 950,
            units: "g"
        }
    },
    {
        id: "pantry_5",
        image: milk_choco,
        name: "Milk Chocolate",
        category: "pantry",
        price: 400,
        quantity: {
            value: 500,
            units: "g"
        }
    },
    {
        id: "pantry_6",
        image: dark_choco,
        name: "Dark Chocolate",
        category: "pantry",
        price: 600,
        quantity: {
            value: 500,
            units: "g"
        }
    },
    {
        id: "pantry_7",
        image: granola_coffee,
        name: "Coffee Flavored Granola Bar",
        category: "pantry",
        price: 250,
        quantity: {
            value: 250,
            units: "g"
        }
    },
    {
        id: "pantry_8",
        image: croissant_vanilla,
        name: "Vanilla Croissant",
        category: "pantry",
        price: 150,
        quantity: {
            value: 8,
            units: "item"
        }
    },
    {
        id: "pantry_9",
        image: croissant_nutty,
        name: "Nut Flavored Croissant",
        category: "pantry",
        price: 200,
        quantity: {
            value: 8,
            units: "item"
        }
    },
    {
        id: "pantry_10",
        image: coffee_muffin,
        name: "Coffee Flavored Muffin",
        category: "pantry",
        price: 300,
        quantity: {
            value: 15,
            units: "item"
        }
    },
    {
        id: "pantry_11",
        image: ny_muffin,
        name: "Raisin Muffin",
        category: "pantry",
        price: 320,
        quantity: {
            value: 15,
            units: "item"
        }
    }
]
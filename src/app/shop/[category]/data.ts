import { shop_categories } from "@/custTypes";



export const categoryPageData:{category: typeof shop_categories[number], title: string, description: string}[] = [
    {
        category: "coffee",
        title: "Premium Roasted Coffee",
        description: "Experience the rich aroma and bold flavor of our premium coffee beans. Hand-selected and roasted to perfection, our beans are the perfect start to your day. Indulge in a cup of pure bliss with our coffee beans."
    },
    {
        category: "easy_coffee",
        title: "Easy Coffee Bags",
        description: "Enjoy a quick and convenient cup of coffee with our easy coffee bags. Made with ethically sourced and sustainably grown beans, our bags offer a hassle-free way to enjoy a delicious cup of coffee"
    },
    {
        category: "cold_brew",
        title: "Cold Brew",
        description: "Savor the smooth and refreshing taste of our carefully crafted cold brew. Made with ethically sourced and sustainably grown beans, our cold brew is the perfect pick-me-up on a hot day."
    },
    {
        category: "equipments",
        title: "Equipments",
        description: "Elevate your coffee experience with our state-of-the-art brewing and grinding equipments. Designed to bring out the best in our beans, our equipment ensures a perfect cup every time. Explore our selection and enhance your coffee experience."
    },
    {
        category: "pantry",
        title: "Pantry Items",
        description: "Pair your coffee with our delectable pantry items, including honey, chocolates, croissants, breads and muffins. Made with the finest ingredients and crafted with care, our pantry items are the perfect complement to your coffee."
    }
];

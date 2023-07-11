import { shop_categories } from "@/custTypes";
import URL_LIST from "@/url";

type categoryListType = {
    label:string, 
    path: string, 
    category: typeof shop_categories[number],
    description: string
};

export const categoryList:categoryListType[] = [
    {
        label: "Roasted Coffee Beans",
        path: URL_LIST.shop.filter("coffee"),
        category: "coffee",
        description: "Indulge in our premium selection of coffee beans, expertly roasted to bring out their rich flavors and aromas."
    },
    {
        label: "Easy Coffee",
        path: URL_LIST.shop.filter("easy_coffee"),
        category: "easy_coffee",
        description: "Enjoy a delicious cup of coffee on the go with our convenient and easy-to-use coffee bags."
    },
    {
        label: "Cold Brew",
        path: URL_LIST.shop.filter("cold_brew"),
        category: "cold_brew",
        description: "Refresh and energize with our smooth and delicious cold brew coffee options."
    },
    {
        label: "Equipments",
        path: URL_LIST.shop.filter("equipments"),
        category: "equipments",
        description: "Brew the perfect cup of coffee at home with our range of high-quality equipment."
    },
    {
        label: "Pantry",
        path: URL_LIST.shop.filter("pantry"),
        category: "pantry",
        description: "Pair your coffee with our delectable pantry items like honey, chocolate, breads, and croissants."
    }
];
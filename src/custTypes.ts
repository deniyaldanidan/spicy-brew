
export const deliveriesType = ["3-delivery", "6-delivery", "12-delivery"] as const;

export const deliverableProducts = ["coffee", "cold_brew", "easy_coffee"] as const;

export const shop_categories = ["coffee", "easy_coffee", "cold_brew", "equipments", "pantry"] as const;

export type productsType = {
    id: string,
    name: string,
    roast?: string,
    flavors?: string[],
    category: typeof shop_categories[number],
    price: number,
    quantity: {
        value: number,
        units: "item" | "g"
    },
    description: string
};

export const grindSizes = ["whole-beans", "medium-grind", "coarse-grind", "fine-grind"] as const;

export type cafeType = {
    id: number;
    name: string;
    locality: string;
    address: string;
    city: string;
    state: string;
    phoneNo: string;
    timings: string;
};
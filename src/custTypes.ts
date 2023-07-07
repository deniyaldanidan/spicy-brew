export const deliveriesType = ["3-delivery", "6-delivery", "12-delivery"] as const;

export const shop_categories = ["coffee", "easy_coffee", "cold_brew", "equipments", "pantry"] as const;

export const deliverableProducts = ["coffee", "cold_brew", "easy_coffee"] as const;


export const frequency = [
    {
        label: "Once a Week",
        value: 7
    },
    {
        label: "Twice a Month",
        value: 14
    },
    {
        label: "Once a Month",
        value: 28
    }
] as const;

export const freq_vals = frequency.map(fr => fr.value);

export type freqs = typeof freq_vals[number];

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

export const FAQCategories = ["Products", "Subscription", "Shipping"] as const;

export type pressData = {
    id: number;
    title: string;
    by: string;
    date: string;
}

export const careerCategories = ["Production", "Hospitality", "Quality Assurance", "Sales and Marketing", "Maintenance", "Research and Development"] as const;

export type cartDataType = {
    productId: string,
    grindsize?: typeof grindSizes[number],
    qty: number
}

export type cartDataWIdType = { id: string } & cartDataType;

export const maxProductLimit = 6;

export const deliveryPriceLimit = 1200;
export const deliveryPrice = 300;

export type newProductObj = {
    id: string;
    product_name: string;
    grindsize?: typeof grindSizes[number];
    product_price: number;
    product_qty: number;
    product_unit: string;
    size: number;
    category: typeof shop_categories[number],
    product_id: string
}


export type subscrProduct = {
    productName: string,
    productId: string,
    gsize?: typeof grindSizes[number],
    size: number,
    category: typeof shop_categories[number],
    price: number
}

export const allowedRatings = [1, 2, 3, 4, 5] as const;

export const orderStatus = ["placed", "confirmed", "shipped", "delivered"] as const;

export type orderDataType = {
    id: string,
    items: newProductObj[],
    orderedDate: number
}

export type subVal = {
    id: string,
    item: subscrProduct,
    frequency: freqs,
    deliveryType: typeof deliveriesType[number],
    timeStamp: number
}
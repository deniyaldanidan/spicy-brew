import 'server-only';

import { shop_categories } from "@/custTypes";
import { cache } from "react";
import products from '@/products.json';

const getItems = cache((category: typeof shop_categories[number]) => {
    return (
        {
            products: products.filter(prd => prd.category === category)
        }
    );
});


export default getItems;
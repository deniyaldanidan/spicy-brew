import 'server-only';

import { cache } from "react";
import products from '@/data/products.json';
import { productsType, shop_categories } from '@/custTypes';

const getProductsByCategory = cache((ctgry: typeof shop_categories[number]):productsType[] => {

    return products.filter(prd => prd.category === ctgry) as productsType[];
});


export default getProductsByCategory;

import 'server-only';

import { cache } from "react";
import products from '@/data/products.json';
import { productsType } from '@/custTypes';

const getProduct = cache((prodId: string):{product:productsType | undefined} => {
    return (
        {
            product: products.find(prd => prd.id === prodId) as any
        }
    );
});


export default getProduct;
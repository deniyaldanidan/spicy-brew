import "server-only";
import products from '@/data/products.json';

export function getAllProducts(){
    return products;
}
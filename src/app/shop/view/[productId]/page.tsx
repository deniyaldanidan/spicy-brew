import BreadCrumb from '@/app/components/BreadCrumb';
import getProduct from '@/libs/getProduct';
import URL_LIST from '@/url';
import { notFound } from 'next/navigation';
import React from 'react';
import ViewProduct from './ViewProduct';


export default function Page({params}:{params: {productId: string}}){
    const {productId} = params;

    const {product} = getProduct(productId)    
    
    if(!product){
        notFound()
    }

    return (
        <>
            <BreadCrumb current={product.name} parents={[{path: URL_LIST.shop.path, label: "Shop"}, {path: URL_LIST.shop.filter(product.category), label: product.category.replaceAll("_", " ")}]} />
            <ViewProduct product={product} />
        </>
    )
}
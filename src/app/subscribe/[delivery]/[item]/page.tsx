import { deliveriesType, deliverableProducts } from '@/custTypes';
import React from 'react';
import { notFound} from 'next/navigation';
import ViewProductSub from './_components/ViewProductSub';
import getProductsByCategory from '@/libs/getProductsByCategory';
import { Metadata } from 'next';
import { discountInfo } from '../../_assets/data';


export async function generateStaticParams(){
    const myList:{delivery: typeof deliveriesType[number], item: typeof deliverableProducts[number]}[] = [];
    deliveriesType.forEach(dlvry=>(
        deliverableProducts.forEach(prd=>(
            myList.push({delivery: dlvry, item: prd})
        ))
    ));

    return myList;
}

type props = {
    params: {
        delivery: typeof deliveriesType[number],
        item: typeof deliverableProducts[number]
    }
}

export async function generateMetadata({params: {delivery, item}}: props):Promise<Metadata>{
    return {
        title: {
            absolute: `${delivery.replace("-", " ")} - ${item.replace("_", " ")}`
        },
        description: `By choosing ${delivery.replace("-", " ")} option, you'll get ${discountInfo[delivery]}% discount for ${item.replace("_", "-")} products.`
    }
}

export default function Page(props: props): React.JSX.Element {
    const { delivery: deliveryType, item: deliveryItemType } = props.params;
    const chosen_products_list = getProductsByCategory(deliveryItemType);
    
    if (!deliveriesType.find(del => del === deliveryType) || !deliverableProducts.find(prd => prd === deliveryItemType) || !chosen_products_list.length) {
        return notFound();
    }
    
    return <ViewProductSub chosen_products_list={chosen_products_list} deliveryItemType={deliveryItemType} deliveryType={deliveryType} />;
}
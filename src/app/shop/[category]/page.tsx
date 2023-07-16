import styles from '@/styles/_pages/shop-category.module.scss';
import '@/styles/components/card1.scss';
import Card1 from "@/app/_components/Card1";
import BreadCrumb from "@/app/_components/BreadCrumb";
import { shop_categories } from "@/custTypes";
import getItems from "@/libs/getItems";
import URL_LIST from "@/url";
import { categoryPageData } from "../_assets/category_page_data";
import { notFound } from "next/navigation";
import { Metadata } from 'next';

export async function generateStaticParams(){
    const catgs = shop_categories.map(cat=>({ category: cat }));
    return [...catgs];
}

type props = {
    params: {
        category: typeof shop_categories[number]
    }
}

export async function generateMetadata({params}:props):Promise<Metadata>{
    const pageData = categoryPageData.find(dt=>dt.category===params.category);

    if (typeof pageData === "undefined"){
        return {};
    }

    return {
        title: pageData.title,
        description: pageData.description
    }
}


export default function Page({ params }: props) {

    if (!shop_categories.find(cat => cat === params.category)) {
        notFound();
    }

    const pageData = categoryPageData.find(dt => dt.category === params.category);

    const { products } = getItems(params.category);

    return (
        <div className={styles.catPage} >
            <BreadCrumb current={params.category.replaceAll("_", " ")} parents={[{ label: "Shop", path: URL_LIST.shop.path }]} />
            <div className={styles.page_hero} >
                <div className={styles.page_title} >{pageData?.title}</div>
                <div className={styles.page_desc} >{pageData?.description}</div>
            </div>
            <div className={styles.options}>

            </div>
            <div className={styles.page_cont} >
                {
                    products.map(prd => <Card1 key={prd.id} item={prd as any} />)
                }
            </div>
        </div>
    )
}
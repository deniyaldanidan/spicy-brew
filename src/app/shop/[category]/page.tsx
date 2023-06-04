import BreadCrumb from "@/app/components/BreadCrumb";
import { shop_categories } from "@/custTypes";
import getItems from "@/libs/getItems";
import URL_LIST from "@/url";
import { notFound } from "next/navigation";
import { categoryPageData } from "./data";
import Card1 from "@/app/components/Card1";
import styles from './index.module.scss';

type props = {
    params: {
        category: typeof shop_categories[number]
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
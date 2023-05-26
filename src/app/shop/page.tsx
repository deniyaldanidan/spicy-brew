import BreadCrumb from "../components/BreadCrumb";
import Card1 from "../components/Card1";
import { categoryList } from "./data";
import products from '@/products.json';
import styles from './index.module.scss';
import Link from "next/link";
import URL_LIST from "@/url";


export default function Page() {
    return (
        <>
            <BreadCrumb current="Shop" />
            <div className={styles.shopPage}>
                <div className={styles.hero_cont}>
                    <div className={styles.hero_title}>Our Menu</div>
                    <div className={styles.hero_description}>
                        Discover our premium coffee products, from bold beans to smooth cold brew. Enjoy a quick cup with our easy coffee bags and pair with delectable pantry items. Check out our equipments section for home brewing.
                    </div>
                </div>
                {
                    categoryList.map(catgry=>(
                        <div key={catgry.category} className={styles.categorySection}>
                            <div className={styles.section1}>
                                <div className={styles.sectionTitle}>{catgry.label}</div>
                                <div className={styles.sectionDesc}>{catgry.description}</div>
                                <Link href={URL_LIST.shop.filter(catgry.category)} >View More</Link>
                            </div>
                            <div className={styles.sectionItems}>
                                {
                                    products.filter(prd=>prd.category===catgry.category).slice(0,2).map(prd=><Card1 key={prd.id} item={prd as any} />)
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}
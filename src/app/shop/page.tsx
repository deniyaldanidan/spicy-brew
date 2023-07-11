import styles from '@/styles/_pages/shop.module.scss';
import '@/styles/components/card1.scss';
import BreadCrumb from "@/app/_components/BreadCrumb";
import Card1 from "@/app/_components/Card1";
import products from '@/data/products.json';
import URL_LIST from "@/url";
import { categoryList } from "./_assets/shop_page_data";
import Link from "next/link";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";


export default function Page() {
    return (
        <div className={styles.shopPage}>
            <BreadCrumb current="Shop" />
            <div className={styles.hero_cont}>
                <div className={styles.hero_title}>Our Menu</div>
                <div className={styles.hero_description}>
                    Indulge in our premium coffee products, from bold beans to velvety cold brew. Savor a quick cup with our convenient coffee bags and pair with scrumptious pantry items. Explore our equipment section for home brewing.
                </div>
            </div>
            {
                categoryList.map(catgry => (
                    <div key={catgry.category} className={styles.categorySection}>
                        <div className={styles.section1}>
                            <div className={styles.sectionTitle}>{catgry.label}</div>
                            <div className={styles.sectionDesc}>{catgry.description}</div>
                            <Link href={URL_LIST.shop.filter(catgry.category)} >
                                <span>Explore</span>
                                <HiOutlineChevronDoubleRight />
                            </Link>
                        </div>
                        <div className={styles.sectionItems}>
                            {
                                products.filter(prd => prd.category === catgry.category).slice(0, 3).map(prd => <Card1 key={prd.id} item={prd as any} />)
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
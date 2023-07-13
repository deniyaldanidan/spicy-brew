import CartMain from '@/app/_components/CartMain';
import styles from '@/styles/_pages/my-cart.module.scss';
import { Metadata } from 'next';

export const metadata:Metadata = {
    title: "My Cart"
}

export default function Page(){
    return (
        <div className={styles.my_cart_page}>
             <div className={styles.page_title}>Shopping Cart</div>
             <CartMain />
        </div>
    )
}
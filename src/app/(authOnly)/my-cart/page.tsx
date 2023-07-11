import CartMain from '@/app/_components/CartMain';
import styles from '@/styles/_pages/my-cart.module.scss';


export default function Page(){
    return (
        <div className={styles.my_cart_page}>
             <div className={styles.page_title}>Shopping Cart</div>
             <CartMain />
        </div>
    )
}
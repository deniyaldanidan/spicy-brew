import CartMain from './CartMain';
import styles from './index.module.scss';



export default function Page(){
    return (
        <div className={styles.my_cart_page}>
             <div className={styles.page_title}>Shopping Cart</div>
             <CartMain />
        </div>
    )
}
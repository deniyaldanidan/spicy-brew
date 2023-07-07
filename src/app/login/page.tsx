
import LoginForm from '@/app/components/LoginForm/LoginForm';
import styles from './login.module.scss';

export default function Page() {
    return (
        <div className={styles.login_pg}>
            <div className={styles.s_1}>
                <div className={styles.title}>Welcome to Spicy Brew</div>
                <div className={styles.desc}>Simply provide any username. No password is required. Info entered is for demo purposes only and will not be stored or used beyond this demo.</div>
            </div>

            <div className={styles.s_2}>
                <LoginForm />
            </div>
        </div>
    )
}
import styles from '@/styles/_pages/loginPage.module.scss';
import LoginForm from '@/app/_components/LoginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Login",
    description: "Login page for Spicy Brew"
}

export default function Page() {
    return (
        <div className={styles.login_pg}>
            <div className={styles.s_1}>
                <div className={styles.title}>Welcome to Spicy Brew</div>
                <div className={styles.desc}>Simply provide any username. No password is required. Info entered will not be stored or used beyond this demo.</div>
            </div>

            <div className={styles.s_2}>
                <LoginForm />
            </div>
        </div>
    )
}
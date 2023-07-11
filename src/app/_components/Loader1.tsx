import styles from '@/styles/components/loader1.module.scss';


export default function Loader1() {
    return (
        <div className={styles.loader1}>
            <div className={styles.lds_facebook}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <p>Please wait a moment</p>
        </div>
    )
}



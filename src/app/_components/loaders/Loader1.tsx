import styles from '@/styles/components/loader1.module.scss';

const defaultText = "Please wait a moment";

export default function Loader1({text=defaultText}) {
    return (
        <div className={styles.loader1}>
            <div className={styles.lds_facebook}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <p>{text}</p>
        </div>
    )
}



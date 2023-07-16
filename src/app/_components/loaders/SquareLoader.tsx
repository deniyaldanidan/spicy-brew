import styles from './square-loader.module.scss';

const defaultText = "Please wait a moment";

export default function SquareLoader({text=defaultText}){
    return (
        <div className={styles.loader_page}>
            <div className={styles.content}>
                <div className={styles.loader_icon}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <p>{text}</p>
        </div>
    )
}
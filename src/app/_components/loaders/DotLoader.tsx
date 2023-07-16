import styles from './dot-loader.module.scss';

const defaultText = "Please wait a moment";

export default function DotLoader({text=defaultText}) {
    return (
        <div className={styles.loader_page}>
            <div className={styles.container}>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <p>{text}</p>
        </div>
    )
}



import styles from '@/styles/_pages/guides.module.scss';



export default function Page() {

    return (
        <div className={styles.guides_page}>
            <div className={styles.hero}>
                <div className={styles.title}>Coffee Events & Classes</div>
                <div className={styles.desc}>Join us for interactive coffee experiences.</div>
            </div>
            <div className={styles.empty}>Currently, there are no upcoming events or classes. Please check back later for updates.</div>
        </div>
    )
}
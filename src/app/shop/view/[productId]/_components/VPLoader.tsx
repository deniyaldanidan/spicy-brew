import styles from './vp.module.scss';
import clsx from 'clsx';

export default function VPLoader(){
    return (
        <div className={styles.vp_load_cont}>
            <div className={clsx(styles.vp_load_img, styles.vp_load_anim)}></div>
            <div className={styles.vp_load_items}>
                <div className={clsx(styles.vp_load_head, styles.vp_load_anim)}></div>
                <div className={clsx(styles.vp_load_sub_head, styles.vp_load_anim)}></div>
                <div className={styles.vp_load_desc}>
                    <span className={styles.vp_load_anim}></span>
                    <span className={styles.vp_load_anim}></span>
                    <span className={styles.vp_load_anim}></span>
                    <span className={styles.vp_load_anim}></span>
                    <span className={styles.vp_load_anim}></span>
                </div>
                <div className={clsx(styles.vp_opt, styles.vp_load_anim)}></div>
                <div className={clsx(styles.vp_opt, styles.vp_load_anim)}></div>
                <div className={clsx(styles.vp_price, styles.vp_load_anim)}></div>
                <div className={styles.vp_load_btns}>
                    <div className={clsx(styles.vp_load_btn, styles.vp_load_anim)}></div>
                    <div className={clsx(styles.vp_load_btn, styles.vp_load_anim)}></div>
                </div>
            </div>
        </div>
    )
}
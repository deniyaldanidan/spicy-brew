import React from "react";
import styles from './index.module.scss';
import coffeePlant from '../../../assets/coffee-plant.png';
import grind from '../../../assets/grind.png';
import roast from '../../../assets/roast.png';
import ship from '../../../assets/shipping.png';
import Image from "next/image";



export default function Journey(): React.JSX.Element {
    return (
        <div className={styles.journey}>
            <div className={styles.title}>
                Journey of your coffee
            </div>
            <div className={styles.subHead}>
                We are dedicated to achieving perfection in coffee-making with attention to detail. Our goal is to create the best taste while ensuring the well-being of the entire ecosystem involved.
            </div>
            <div className={styles.contents}>
                <div className={styles.content}>
                        <Image src={coffeePlant} alt="Coffee Plant" />
                    <div className={styles.infoText}>Fresh coffee is purchased directly from farmers, ensuring high quality and fair compensation for their efforts.</div>
                </div>
                <div className={styles.content}>
                    <Image src={roast} alt="Roasting Coffee" />
                    <div className={styles.infoText}>Our expert roasters carefully roast your coffee beans in small batches to bring out the best flavours & aromas</div>
                </div>
                <div className={styles.content}>
                        <Image src={grind} alt="Grinding Roasted Coffee" />
                    <div className={styles.infoText}>
                        We grind your coffee fresh to maintain its rich taste and tailor the grind size to fit your equipment.
                    </div>
                </div>
                <div className={styles.content}>
                        <Image src={ship} alt="shipping quality coffee" />
                    <div className={styles.infoText}>We meticulously assess the quality of each batch prior to sending it to you.</div>
                </div>
            </div>
        </div>
    )
}
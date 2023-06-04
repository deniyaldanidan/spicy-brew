import InpGrp from "../InpGrp"
import styles from '../index.module.scss';


const optsList = [
    {
        label: "For wholesale or bulk orders",
        value: "for-bulk-orders"
    },
    {
        label: "To brew our coffee in your cafe",
        value: "brew-in-your-cafe"
    },
    {
        label: "To open a new Spicy Brew Cafe near you",
        value: "new-branch"
    }
]

export default function Page() {
    return (
        <div className={styles.contact_page}>
            <div className={styles.hero}>
                <div className={styles.title}>Partner With Us</div>
                <div className={styles.sub_title}>Join the Spicy Brew family! We&apos;re always on the lookout for new wholesale partners who share our passion for serving fresh and high-quality coffee. Whether you&apos;re a cafe, restaurant or other vendor, we&apos;d love to hear from you. Fill out the form below to get in touch and let&apos;s brew up something special together!</div>
            </div>
            <form>
                <InpGrp inpId="name" inpLabel="Name" inpName="name" inpType="input" />
                <InpGrp inpId="email" inpLabel="Email" inpName="email" inpType="input" />
                <InpGrp inpId="phone" inpLabel="Phone Number" inpName="phoneNo" inpType="input" />
                <InpGrp inpId="reason" inpLabel="Reason" inpName="reason" inpType="select" optsList={optsList} />
                <InpGrp inpId="message" inpLabel="Message" inpName="message" inpType="textarea" />
                <button type="button">Submit</button>
            </form>
            <div className={styles.info}>If you prefer, you can also email us at <span>partnerhelpline@spicybrew.com</span> or give us a call at <span>+91 72 30912456</span></div>
        </div>
    )
}
import InpGrp from "../InpGrp"
import styles from '../index.module.scss';


export default function Page() {
    return (
        <div className={styles.contact_page}>
            <div className={styles.hero}>
                <div className={styles.title}>Get in touch</div>
                <div className={styles.sub_title}>We&apos;d love to hear from you! Got something to say? A question or comment? Fill out the form below and let us know what&apos;s on your mind.</div>
            </div>
            <form>
                <InpGrp inpId="name" inpLabel="Name" inpName="name" inpType="input" />
                <InpGrp inpId="email" inpLabel="Email" inpName="email" inpType="input" />
                <InpGrp inpId="phone" inpLabel="Phone Number" inpName="phoneNo" inpType="input" />
                <InpGrp inpId="reason" inpLabel="Reason" inpName="reason" inpType="select" optsList={[{label: "Talk To Us", value: "talk-to-us"}, {label: "Work With US", value: "work-with-us"}]} />
                <InpGrp inpId="message" inpLabel="Message" inpName="message" inpType="textarea" />
                <button type="button">Submit</button>
            </form>
            <div className={styles.info}>If you prefer, you can also email us at <span>techsupport@spicybrew.com</span> or give us a call at <span>+91 72 30912456</span></div>
        </div>
    )
}
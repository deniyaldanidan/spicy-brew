import styles from '@/styles/_pages/contacts.module.scss';
import '@/styles/inp-grp.scss';
import InpGrp from "@/app/_components/InpGrp"
import MyForm from "@/app/_components/MyForm";
import { Metadata } from "next";

export const metadata:Metadata = {
    title: "Contact US",
    description: "Contact US form for the Spicy Brew App"
}

export default function Page() {

    return (
        <div className={styles.contact_page}>
            <div className={styles.hero}>
                <div className={styles.title}>Contact Us</div>
                <div className={styles.sub_title}>We&apos;d love to hear from you! Got something to say? A question or comment? Fill out the form below and let us know what&apos;s on your mind.</div>
            </div>
            <MyForm>
                <InpGrp inpId="name" inpLabel="Name" inpName="name" inpType="input" type="text" required/>
                <InpGrp inpId="email" inpLabel="Email" inpName="email" inpType="input" type="email" required />
                <InpGrp inpId="phone" inpLabel="Phone Number" inpName="phoneNo" inpType="input" type="text" required />
                <InpGrp inpId="reason" inpLabel="Reason" inpName="reason" inpType="select" optsList={[{label: "Talk To Us", value: "talk-to-us"}, {label: "Work With US", value: "work-with-us"}]} required />
                <InpGrp inpId="message" inpLabel="Message" inpName="message" inpType="textarea" type="text" required/>
                <button>Submit</button>
            </MyForm>
            <div className={styles.info}>If you prefer, you can also email us at <strong>techsupport@spicybrew.com</strong> or give us a call at <strong>+91 72 30912456</strong></div>
        </div>
    )
}
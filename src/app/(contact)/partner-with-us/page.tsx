import InpGrp from "@/app/_components/InpGrp"
import MyForm from "@/app/_components/MyForm";
import styles from '@/styles/_pages/contacts.module.scss';
import '@/styles/inp-grp.scss';
import { Metadata } from "next";


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

export const metadata:Metadata = {
    title: "Partner's Enquiry",
    description: "Partner's Enquiry Form for the Spicy Brew Web App"
}

export default function Page() {
    return (
        <div className={styles.contact_page}>
            <div className={styles.hero}>
                <div className={styles.title}>Partner With Us</div>
                <div className={styles.sub_title}>Join the Spicy Brew family! We&apos;re always on the lookout for new wholesale partners who share our passion for serving fresh and high-quality coffee. Whether you&apos;re a cafe, restaurant or other vendor, we&apos;d love to hear from you. Fill out the form below to get in touch and let&apos;s brew up something special together!</div>
            </div>
            <MyForm>
                <InpGrp inpId="name" inpLabel="Name" inpName="name" inpType="input" type="text" required />
                <InpGrp inpId="email" inpLabel="Email" inpName="email" inpType="input" type="email" required />
                <InpGrp inpId="phone" inpLabel="Phone Number" inpName="phoneNo" inpType="input" type="text" required />
                <InpGrp inpId="reason" inpLabel="Reason" inpName="reason" inpType="select" optsList={optsList} />
                <InpGrp inpId="message" inpLabel="Message" inpName="message" inpType="textarea" type="text" required />
                <button>Submit</button>
            </MyForm>
            <div className={styles.info}>If you prefer, you can also email us at <span>partnerhelpline@spicybrew.com</span> or give us a call at <span>+91 72 30912456</span></div>
        </div>
    )
}
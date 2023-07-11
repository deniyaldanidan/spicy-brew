import PolicyNotifier from '@/app/_components/PolicyNotifier';
import styles from '@/styles/_pages/policies.module.scss';


export default function Page() {
    return (
        <>
            <div className={styles.policy_page}>
                <div className={styles.page_title}>
                    Privacy Policy
                </div>

                <div className={styles.page_excerpt}>
                    This Privacy Policy (&quot;Policy&quot;) outlines how Spicy Brew (&quot;the Company&quot;) collects, uses, discloses, and protects the personal information of users (&quot;you&quot; or &quot;user&quot;) who access the Company&apos;s website in India. By using the website, you consent to the data practices described in this Policy.
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Information Collection:
                    </div>
                    <div className={styles.section_content}>
                        The Company may collect personal information such as your name, email address, contact number, and other relevant details when you interact with the website. This information is collected with your consent and may be obtained through various means, including registration, forms, surveys, and communication with the Company.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Use of Information:
                    </div>
                    <div className={styles.section_content}>
                        The personal information collected by the Company is used for the following purposes:

                        <ul>
                            <li>
                                To provide and improve the products and services offered by the Company.
                            </li>
                            <li>
                                To personalize your experience and tailor the content and offerings to your interests.
                            </li>
                            <li>
                                To communicate with you regarding your orders, inquiries, and promotional materials.
                            </li>
                            <li>
                                To analyze website usage and trends, and to enhance the functionality and user experience.
                            </li>
                            <li>
                                To comply with legal and regulatory requirements.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Data Sharing:
                    </div>
                    <div className={styles.section_content}>
                        The Company may share your personal information with third parties in the following circumstances:

                        <ul>
                            <li>
                                With service providers and business partners who assist in delivering the Company&apos;s products and services.
                            </li>
                            <li>
                                With authorized personnel within the Company who require access to perform their duties.
                            </li>
                            <li>
                                With law enforcement agencies or regulatory authorities to comply with legal obligations or protect the rights and safety of the Company, its users, or others.
                            </li>
                            <li>
                                With your consent or as otherwise permitted or required by law.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Data Security:
                    </div>
                    <div className={styles.section_content}>
                        The Company implements appropriate security measures to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. However, no data transmission over the internet or electronic storage method is completely secure. The Company cannot guarantee the absolute security of your information.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Cookies and Tracking Technologies:
                    </div>
                    <div className={styles.section_content}>
                        The Company may use cookies and similar tracking technologies to enhance your browsing experience, analyze website usage, and gather information about your preferences. You may modify your browser settings to reject cookies or notify you when cookies are being used. However, this may affect certain functionalities of the website.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Third-Party Websites:
                    </div>
                    <div className={styles.section_content}>
                        The Company&apos;s website may contain links to third-party websites that are not owned or controlled by the Company. This Privacy Policy does not apply to such third-party websites. The Company is not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of any third-party websites you visit.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Data Retention:
                    </div>
                    <div className={styles.section_content}>
                        The Company retains your personal information for as long as necessary to fulfill the purposes for which it was collected and to comply with legal obligations. When personal information is no longer required, it will be securely deleted or anonymized.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Children&apos;s Privacy:
                    </div>
                    <div className={styles.section_content}>
                        The Company&apos;s website is not intended for individuals under the age of 18. The Company does not knowingly collect personal information from children. If you believe that your child has provided personal information without your consent, please contact us to have the information removed.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Changes to the Privacy Policy:
                    </div>
                    <div className={styles.section_content}>
                        The Company reserves the right to modify, update, or change this Privacy Policy at any time. The revised Policy will be posted on the website, and the date of the last update will be indicated. It is your responsibility to review the Policy periodically. Continued use of the website after any modifications constitutes your acceptance of the revised Privacy Policy.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Contact Information:
                    </div>
                    <div className={styles.section_content}>
                        If you have any questions, concerns, or requests related to this Privacy Policy or the handling of your personal information, please contact us using the provided contact details.
                    </div>
                </div>

                <div className={styles.page_end_note}>
                    By using the Company&apos;s website, you signify your understanding and agreement to the terms of this Privacy Policy.
                </div>

            </div>
            <PolicyNotifier />
        </>
    )
}
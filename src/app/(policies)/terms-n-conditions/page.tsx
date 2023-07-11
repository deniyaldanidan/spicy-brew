import PolicyNotifier from '@/app/_components/PolicyNotifier';
import styles from '@/styles/_pages/policies.module.scss';



export default function Page() {
    return (
        <>
            <div className={styles.policy_page}>
                <div className={styles.page_title}>Terms and Conditions</div>
                <div className={styles.page_excerpt}>
                    These Terms and Conditions (&quot;Agreement&quot;) govern your use of the website of Spicy Brew (&quot;the Company&quot;) located in India. Please read this Agreement carefully before accessing or using the website. By accessing or using the website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these Terms and Conditions, please refrain from using the website.
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Acceptance of Terms:
                    </div>
                    <div className={styles.section_content}>
                        By accessing or using the website, you acknowledge that you are of legal age to enter into a binding contract and that you have read, understood, and agree to be bound by these Terms and Conditions.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Intellectual Property:
                    </div>
                    <div className={styles.section_content}>
                        The content available on the website, including but not limited to text, graphics, logos, images, and software, is the property of the Company and is protected by intellectual property laws. You may not use, reproduce, distribute, or modify any content without prior written consent from the Company.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Use of the Website:
                    </div>
                    <div className={styles.section_content}>
                        You may use the website for personal, non-commercial purposes in compliance with these Terms and Conditions. You agree not to use the website for any unlawful or prohibited activities. The Company reserves the right to suspend or terminate your access to the website if you violate these Terms and Conditions.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Product Information
                    </div>
                    <div className={styles.section_content}>
                        The Company strives to provide accurate and up-to-date information regarding its coffee products. However, we do not warrant the accuracy, completeness, or reliability of any product information on the website. It is your responsibility to verify the information before making a purchase.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Ordering and Payment:
                    </div>
                    <div className={styles.section_content}>
                        By placing an order through the website, you agree to provide accurate and complete information. You are responsible for ensuring the accuracy of your order and making timely payment for the products. The Company reserves the right to refuse or cancel any order at its discretion. In the event of a cancellation, a refund will be issued in accordance with the Company&apos;s Refund Policy.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Shipping and Delivery:
                    </div>
                    <div className={styles.section_content}>
                        The Company will make reasonable efforts to ensure the timely delivery of your order. However, we are not liable for any delays or damages caused during shipping. Shipping costs and delivery times may vary depending on your location. Any delivery dates provided are estimates and are not guaranteed.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Returns and Refunds:
                    </div>
                    <div className={styles.section_content}>
                        The Company has a returns and refunds policy in place. Please refer to the specific policy available on the website for detailed information regarding returns, exchanges, and refunds. To initiate a return, you must contact the Company&apos;s customer service within the specified time frame.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Privacy Policy:
                    </div>
                    <div className={styles.section_content}>
                        The Company respects your privacy and handles your personal information in accordance with applicable privacy laws. By using the website, you agree to the collection, use, and disclosure of your personal information as described in the Company&apos;s Privacy Policy. The Privacy Policy outlines how your information is collected, stored, and protected.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Limitation of Liability:
                    </div>
                    <div className={styles.section_content}>
                        The Company shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with your use of the website or any products purchased from the Company. This limitation of liability applies to the fullest extent permitted by law. In the event that the Company is found liable, the total liability shall not exceed the amount paid by you for the specific product or service.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Modification of Terms:
                    </div>
                    <div className={styles.section_content}>
                        The Company reserves the right to modify, update, or change these Terms and Conditions at any time without prior notice. It is your responsibility to review the Terms and Conditions periodically for any updates. Continued use of the website after any modifications constitutes your acceptance of the revised Terms and Conditions.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Governing Law and Jurisdiction:
                    </div>
                    <div className={styles.section_content}>
                        These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts in India.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Severability:
                    </div>
                    <div className={styles.section_content}>
                        If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect. The invalid or unenforceable provision shall be replaced with a valid and enforceable provision that achieves the original intent of the Agreement to the extent possible.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Entire Agreement
                    </div>
                    <div className={styles.section_content}>
                        This Agreement constitutes the entire agreement between you and the Company regarding your use of the website and supersedes any prior or contemporaneous understandings. Any waiver of any provision of this Agreement will be effective only if in writing and signed by the Company.
                    </div>
                </div>

                <div className={styles.page_end_note}>
                    If you have any questions or concerns regarding these terms, please contact us for clarification. Your use of the website constitutes your agreement to these Terms and Conditions.
                </div>
            </div>
            <PolicyNotifier />
        </>
    )
}
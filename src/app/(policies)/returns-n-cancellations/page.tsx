import PolicyNotifier from '@/app/components/PolicyNotifier';
import styles from '../index.module.scss';



export default function Page() {
    return (
        <>
            <div className={styles.policy_page}>
                <div className={styles.page_title}>
                    Returns and Cancellations Policy
                </div>

                <div className={styles.page_excerpt}>
                    This Returns and Cancellations Policy (&quot;Policy&quot;) outlines the terms and conditions for returns, refunds, and order cancellations for products purchased from Spicy Brew (&quot;the Company&quot;). By making a purchase and utilizing the services provided by the Company, you (&quot;customer&quot; or &quot;you&quot;) agree to comply with this Policy.
                </div>

                <div className={styles.section_main_title}>
                    Returns and Refunds
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Eligibility for Returns:
                    </div>

                    <div className={styles.section_content}>
                        The Company accepts returns for products that meet the following conditions:
                        <ul>
                            <li>
                                The product is in its original condition, unused, and unopened.
                            </li>
                            <li>
                                The product is returned within the specified return period, which is typically within 30 days of the purchase date.
                            </li>
                            <li>
                                The product is accompanied by the original proof of purchase or order confirmation.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Return Process:
                    </div>
                    <div className={styles.section_content}>
                        To initiate a return, please contact the Company&apos;s customer support within the specified return period. The customer support team will guide you through the return process and provide you with the necessary instructions and return address.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Return Shipping Costs
                    </div>
                    <div className={styles.section_content}>
                        Unless otherwise stated, return shipping costs are the responsibility of the customer. The Company recommends using a trackable shipping method to ensure the safe and timely arrival of the returned product. Shipping costs are non-refundable unless the return is due to an error on the Company&apos;s part or a defective product.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Refund Process:
                    </div>
                    <div className={styles.section_content}>
                        Once the returned product is received and inspected, the Company will process the refund within a reasonable timeframe. Refunds will be issued to the original payment method used for the purchase. Please note that it may take additional time for the refunded amount to reflect in your account, depending on your financial institution&apos;s policies.
                    </div>
                </div>

                <div className={styles.section_main_title}>
                    Order Cancellations
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Cancellation Eligibility:
                    </div>
                    <div className={styles.section_content}>
                        Orders may be eligible for cancellation if they have not been processed or shipped. To request an order cancellation, please contact the Company&apos;s customer support as soon as possible with your order details. The customer support team will make reasonable efforts to accommodate your request, but cannot guarantee order cancellations once the order has been processed or shipped.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Refunds for Cancelled Orders:
                    </div>
                    <div className={styles.section_content}>
                        If an order is successfully cancelled before it has been processed or shipped, a full refund will be issued to the original payment method used for the purchase. If the cancellation request is made after the order has been processed or shipped, it will be treated as a return, and the applicable refund process outlined in <strong>Refund Process</strong> section will apply.
                    </div>
                </div>


                <div className={styles.section_main_title}>
                    Exceptions
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Perishable and Consumable Products:
                    </div>
                    <div className={styles.section_content}>
                        Due to the nature of perishable and consumable products, such as coffee beans or beverages, returns and refunds may be limited or not applicable for these items. Please contact the Company&apos;s customer support for specific guidelines regarding returns and refunds for perishable or consumable products.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Damaged or Defective Products:
                    </div>
                    <div className={styles.section_content}>
                        If a product arrives damaged or defective, please contact the Company&apos;s customer support within a reasonable timeframe to report the issue. The customer support team will guide you through the return process and provide assistance in resolving the matter, including possible refunds or product replacements.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Customer Support:
                    </div>
                    <div className={styles.section_content}>
                        If you have any questions, concerns, or need assistance regarding returns, refunds, or order cancellations, please contact the Company&apos;s customer support using the provided contact details. The customer support team will be happy to assist you and address any issues related to returns and cancellations.
                    </div>
                </div>

                <div className={styles.page_end_note}>
                    By making a purchase and utilizing the services provided by the Company, you acknowledge and agree to comply with the terms and conditions outlined in this Returns and Cancellations Policy.
                </div>
            </div>
            <PolicyNotifier />
        </>
    )
}
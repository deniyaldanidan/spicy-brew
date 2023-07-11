import PolicyNotifier from '@/app/_components/PolicyNotifier';
import styles from '@/styles/_pages/policies.module.scss';


export default function Page() {
    return (
        <>
            <div className={styles.policy_page}>
                <div className={styles.page_title}>
                    Shipping Policy
                </div>

                <div className={styles.page_excerpt}>
                    This Shipping Policy (&quot;Policy&quot;) outlines the terms and conditions for shipping and delivery of products purchased from Spicy Brew (&quot;the Company&quot;). By placing an order and utilizing the shipping services provided by the Company, you (&quot;customer&quot; or &quot;you&quot;) agree to comply with this Policy.
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Order Processing and Fulfillment:
                    </div>
                    <div className={styles.section_content}>
                        The Company strives to process and fulfill orders promptly. Once an order is placed, it will be processed within the specified processing time, which may vary depending on product availability and other factors. The Company will make reasonable efforts to fulfill orders accurately and deliver products in a timely manner.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Shipping Methods and Costs:
                    </div>
                    <div className={styles.section_content}>
                        The Company offers various shipping methods to deliver your order. The available shipping options, along with the associated costs, will be displayed during the checkout process. Shipping costs may vary based on factors such as the destination, weight, and dimensions of the package.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Shipping Destinations:
                    </div>
                    <div className={styles.section_content}>
                        The Company currently provides shipping services to addresses within India. The availability of shipping to specific regions within India may vary based on logistical constraints or legal restrictions. If your delivery address is in an area where shipping is not available, you will be notified during the checkout process.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Estimated Delivery Time:
                    </div>
                    <div className={styles.section_content}>
                        The Company strives to provide accurate estimated delivery times for each shipping option. However, please note that these are approximate estimates and actual delivery times may vary due to factors beyond the Company&apos;s control, such as customs clearance, unforeseen delays, or natural disasters. The estimated delivery time will be provided to you during the checkout process and in the order confirmation email.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Order Tracking:
                    </div>
                    <div className={styles.section_content}>
                        The Company provides order tracking services for most shipments. Once your order is shipped, you will receive a tracking number or a link to track the status of your package. You can use this information to monitor the progress of your shipment and estimated delivery date.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Delivery Attempts and Re-Delivery:
                    </div>
                    <div className={styles.section_content}>
                        The shipping carrier will attempt to deliver your package to the provided shipping address. If no one is available to receive the package, the carrier may make subsequent delivery attempts or leave a notification for you to arrange a re-delivery or pick-up from a designated location. It is your responsibility to ensure someone is available to receive the package or make necessary arrangements with the carrier.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Customs, Duties, and Taxes:
                    </div>
                    <div className={styles.section_content}>
                        For international shipments, customs duties, taxes, and other fees may apply. These charges are determined by the destination country&apos;s customs authority and are the sole responsibility of the customer. The Company is not responsible for any additional charges incurred during customs clearance. Please check with your local customs office for information on applicable duties and taxes.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Shipment Damage or Loss:
                    </div>
                    <div className={styles.section_content}>
                        The Company takes utmost care in packaging and ensuring that products are delivered in good condition. In the rare event that your shipment arrives damaged or is lost during transit, please contact the Company&apos;s customer support within the specified timeframe. Claims for damaged or lost shipments will be subject to the terms and conditions of the shipping carrier and may require supporting documentation.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Order Cancellation or Modification:
                    </div>
                    <div className={styles.section_content}>
                        Once an order is placed and payment is processed, it may not be possible to cancel or modify the order. If you need to make any changes or have concerns regarding your order, please contact the Company&apos;s customer support as soon as possible. The Company will make reasonable efforts to accommodate your request, but cannot guarantee order changes after it has been processed.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.section_head}>
                        Customer Support:
                    </div>
                    <div className={styles.section_content}>
                        If you have any questions, concerns, or need assistance regarding the shipping of your order, please contact the Company&apos;s customer support using the provided contact details. The Company&apos;s customer support team will be happy to assist you and address any issues related to shipping and delivery.
                    </div>
                </div>

                <div className={styles.page_end_note}>
                    By placing an order and utilizing the shipping services provided by the Company, you acknowledge and agree to comply with the terms and conditions outlined in this Shipping
                </div>
            </div>
            <PolicyNotifier />
        </>
    )
}
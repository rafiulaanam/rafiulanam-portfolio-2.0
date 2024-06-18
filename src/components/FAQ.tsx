
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section className="w-full max-w-3xl mx-auto py-12 md:py-16">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Get answers to the most common questions about our product.
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-2">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is the return policy?</AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-stone dark:prose-invert">
                <p>
                  We offer a 30-day return policy on all of our products. If you're not satisfied with your purchase,
                  you can return it for a full refund within 30 days of delivery.
                </p>
                <p>
                  To initiate a return, simply contact our customer support team and they'll guide you through the
                  process. We'll cover the cost of return shipping as well.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How long does shipping take?</AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-stone dark:prose-invert">
                <p>
                  Shipping times can vary depending on your location, but we generally aim to have your order delivered
                  within 5-7 business days for standard shipping.
                </p>
                <p>
                  If you need your order faster, we also offer expedited shipping options that can get your items to you
                  in as little as 2-3 business days.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do you offer any discounts or promotions?</AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-stone dark:prose-invert">
                <p>
                  Yes, we frequently run various discounts and promotions to help our customers save money. These can
                  include seasonal sales, bundle deals, and loyalty rewards programs.
                </p>
                <p>
                  The best way to stay up-to-date on our latest offers is to sign up for our email newsletter or follow
                  us on social media. We'll make sure to keep you informed about any ongoing promotions.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-stone dark:prose-invert">
                <p>
                  We accept a variety of payment methods, including credit cards (Visa, Mastercard, American Express,
                  Discover), PayPal, and Apple Pay. We use secure encryption to protect all transactions, so you can
                  feel confident making purchases with us.
                </p>
                <p>
                  If you have any questions or issues with your payment, please don't hesitate to reach out to our
                  customer support team. They'll be happy to assist you.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
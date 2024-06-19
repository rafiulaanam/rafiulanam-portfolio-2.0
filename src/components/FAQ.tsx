
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { faq } from "@/utils/faq"

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
            {
                faq?.map(item=>  <AccordionItem key={item.id} value={`item-${item.id}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-stone dark:prose-invert">
             {item.answer}
              </div>
            </AccordionContent>
          </AccordionItem>)
            }
        
          
        </Accordion>
      </div>
    </section>
  )
}
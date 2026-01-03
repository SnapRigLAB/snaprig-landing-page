import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Card } from '../ui/card';

const FAQS = [
  {
    question: 'What size water bottles does this fit?',
    answer: 'The pouch is designed to fit most standard water bottles up to 32oz (1 liter). This includes popular brands like Hydro Flask, Nalgene, and standard gym bottles. The elastic holder ensures a secure fit for bottles ranging from 16oz to 32oz.'
  },
  {
    question: 'Will my phone fit in the pocket?',
    answer: 'Yes! The phone pocket fits all smartphones up to 7 inches, including iPhone 14 Pro Max, Samsung Galaxy S23 Ultra, and similar large phones. The pocket is touch-sensitive, so you can control your music without removing your phone.'
  },
  {
    question: 'Is it really water-resistant?',
    answer: 'Absolutely! Made from premium water-resistant polyester, the pouch protects your valuables from sweat, light rain, and accidental spills. While not fully waterproof for submersion, it provides excellent protection for everyday gym and outdoor activities.'
  },
  {
    question: 'How long does shipping take?',
    answer: 'We offer FREE standard shipping which takes 5-7 business days. Expedited shipping (2-3 days) is available at checkout. All orders are processed within 24 hours on business days.'
  },
  {
    question: 'What\'s your return policy?',
    answer: 'We offer a 30-day money-back guarantee! If you\'re not completely satisfied with your purchase, you can return it within 30 days for a full refund - no questions asked. Customer satisfaction is our top priority.'
  },
  {
    question: 'Can I adjust the strap length?',
    answer: 'Yes! The strap is fully adjustable from 28 inches to 48 inches, making it comfortable for all body types. You can wear it as a shoulder strap, cross-body, or around your waist - whatever works best for your activity.'
  },
  {
    question: 'How do I clean it?',
    answer: 'Simply wipe with a damp cloth and mild soap. The water-resistant material makes cleaning easy. Air dry completely before next use. Do not machine wash or tumble dry.'
  },
  {
    question: 'Is this suitable for running?',
    answer: 'Absolutely! The lightweight design (only 8.5oz) and secure fit make it perfect for running. The water bottle holder prevents bouncing, and all compartments are designed for one-handed access while you\'re on the move.'
  }
];

export default function ProductFAQ() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16 space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
        <p className="text-muted-foreground text-lg">
          Got questions? We've got answers!
        </p>
      </div>
      
      <Card className="max-w-4xl mx-auto p-6">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </section>
  );
}
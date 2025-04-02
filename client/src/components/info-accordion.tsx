import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function InfoAccordion() {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Additional Information About PCOD</h2>
      
      <Accordion type="single" collapsible className="space-y-2">
        <AccordionItem value="symptoms">
          <AccordionTrigger className="font-medium text-primary">
            Symptoms of PCOD
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Visible acne on various parts of the body, like the face, neck, and back</li>
              <li>Evident increase in weight and difficulty losing it</li>
              <li>Thinning hair on the scalp</li>
              <li>Irregularity in the menstrual cycle (less than nine periods in a year)</li>
              <li>Fertility problems</li>
              <li>Depression due to hormonal changes</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="causes">
          <AccordionTrigger className="font-medium text-primary">
            Causes of PCOD
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Imbalance in sex hormones, particularly increased production of androgens</li>
              <li>Irregular ovulation or failure to ovulate</li>
              <li>Formation of small cysts in the ovaries due to immature eggs</li>
              <li>Genetic factors (may run in families)</li>
              <li>Insulin resistance</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="treatments">
          <AccordionTrigger className="font-medium text-primary">
            Treatment Methods for PCOD
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Ayurvedic treatment using natural herbs like ashwagandha, cinnamon, and turmeric</li>
              <li>Surgical methods, like laparoscopy (band-aid surgery)</li>
              <li>Yoga and exercise, like cobra pose, reclining butterfly pose, bow pose</li>
              <li>Lifestyle changes, including weight loss and dietary modifications</li>
              <li>Birth control pills or progesterone tablets to regulate menstrual periods</li>
              <li>Metformin to improve insulin sensitivity</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="complications">
          <AccordionTrigger className="font-medium text-primary">
            Complications of PCOD
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Increased risk of endometrial cancer</li>
              <li>Infertility</li>
              <li>Obesity-related conditions (high blood pressure, heart problems, diabetes)</li>
              <li>Possible increased risk of breast cancer</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

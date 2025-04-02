import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface InfoAccordionProps {
  type: 'pcod' | 'pcos';
  info: any;
}

export default function InfoAccordion({ type, info }: InfoAccordionProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">
        {type === 'pcod' ? 'PCOD Information' : 'PCOS Information'}
      </h2>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">
            {type === 'pcod' ? info.whatIsPcod.title : info.whatIsPcos.title}
          </AccordionTrigger>
          <AccordionContent>
            <div className="mt-2 space-y-4">
              {(type === 'pcod' ? info.whatIsPcod.content : info.whatIsPcos.content).map(
                (paragraph: string, index: number) => (
                  <p key={index} className="text-gray-700">{paragraph}</p>
                )
              )}
              {/* Image would go here if available */}
              {/* {info.whatIsPcod.imageUrl && (
                <img 
                  src={info.whatIsPcod.imageUrl} 
                  alt={info.whatIsPcod.title} 
                  className="max-w-full mt-4 rounded-lg"
                />
              )} */}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">
            {info.symptoms.title}
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {info.symptoms.list.map((symptom: string, index: number) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">
            {info.causes.title}
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {info.causes.list.map((cause: string, index: number) => (
                <li key={index}>{cause}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left">
            {info.diagnosis.title}
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {info.diagnosis.methods.map((method: string, index: number) => (
                <li key={index}>{method}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left">
            {info.treatments.title}
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {info.treatments.methods.map((method: string, index: number) => (
                  <li key={index}>{method}</li>
                ))}
              </ul>
              
              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <h4 className="font-medium mb-2">{info.treatments.lifestyle.title}</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {info.treatments.lifestyle.list.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg mt-4">
                <h4 className="font-medium mb-2">{info.treatments.medications.title}</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {info.treatments.medications.list.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-left">
            {info.complications.title}
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {info.complications.list.map((complication: string, index: number) => (
                <li key={index}>{complication}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        {type === 'pcos' && info.differenceFromPcod && (
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-left">
              {info.differenceFromPcod.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="mt-2 space-y-4">
                {info.differenceFromPcod.content.map(
                  (paragraph: string, index: number) => (
                    <p key={index} className="text-gray-700">{paragraph}</p>
                  )
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        )}
      </Accordion>
    </div>
  );
}
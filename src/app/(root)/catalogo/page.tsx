import Store from "@/components/Store"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"
import React from "react"

type Props = {title: string}

const Catalogo: React.FC<Props> = () => {
  return (
      <section className="bg-gray-100">
        <Store />
          <Accordion className="bg-white w-full px-5 mb-1" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold text-base text-[#202326]">
               <div className="flex items-center">
                Niguiris
                <Image
                  src="/icons/dolar.svg"
                  alt="ícone de dólar"
                  width={16}
                  height={16}
                  className="ml-2"
                />
              </div>
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>  
          <Accordion className="bg-white w-full px-5 mb-1" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold text-base text-[#202326]">
               <div className="flex items-center">
                Niguiris
                <Image
                  src="/icons/dolar.svg"
                  alt="ícone de dólar"
                  width={16}
                  height={16}
                  className="ml-2"
                />
              </div>
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>  
          <Accordion className="bg-white w-full px-5 mb-1" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold text-base text-[#202326]">
                <div className="flex items-center">
                  Niguiris
                  <Image
                    src="/icons/dolar.svg"
                    alt="ícone de dólar"
                    width={16}
                    height={16}
                    className="ml-2"
                  />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>  
          <Accordion className="bg-white w-full px-5 mb-1" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold text-base text-[#202326]">
                <div className="flex items-center">
                  Niguiris
                  <Image
                    src="/icons/dolar.svg"
                    alt="ícone de dólar"
                    width={16}
                    height={16}
                    className="ml-2"
                  />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>  

          <Accordion className="bg-white w-full px-5 mb-1" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold text-base text-[#202326]">
                <div className="flex items-center">
                  Niguiris
                  <Image
                    src="/icons/dolar.svg"
                    alt="ícone de dólar"
                    width={16}
                    height={16}
                    className="ml-2"
                  />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion> 
       
      </section>

  )
}

export default Catalogo

//code author: Anuda Gunarathna
"use client"

import React from "react";
import Image from "next/image";
import faq from "../public/FAQ.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqData from "../public/home/faq.json";
import ScrollIntoView from "./scrollOnView";

export function accordion() {
  return (
   
    <ScrollIntoView>

    <div className="flex items-center flex-col justify-center m-10 md:m-5">
      <h1 className="text-4xl text-center mb-8">FAQ</h1>
      <Image src={faq} alt="faq" height={50} width={300} className="" />
      <Accordion
        type="single"
        collapsible
        className="w-10/12 mx-5 md:mx-20 text-left"
      >
        {faqData.map((faq, index) => {
          return (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{faq.title}</AccordionTrigger>
              <AccordionContent>{faq.description}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
    </ScrollIntoView>
  );
}

export default accordion;

{
  /* <Accordion type="single" collapsible className=" md:w-max">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that match the other components'
            aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion> */
}

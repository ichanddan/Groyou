import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";
import Team from "./Home Deta/Team";
import Leader from "./Home Deta/Leader";
import Productivity from "./Home Deta/Productivity";

export default function Home() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div>
      <Productivity/>
      <Leader/>
      <Team/>
      <Accordion className="p-16">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="What does abouts mean?"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="What is the English word for about?"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="What is the meaning of about in English grammar?"
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
      
    </div>
  );
}

"use client"
import React, { useState } from "react";
import Paragraph from "./Paragraph";
import { Icons } from "@/components/Icons";

const Accordion = ({ heading, para1, para2, para3 }) => {
  const [openAccordion, isOpenAccordion] = useState(false);

  return (
    <div>
      <h3 className="font-semibold py-6 px-3 flex justify-between border-b border-gray-500">
        <span>{heading}</span>
        <span onClick={()=>isOpenAccordion(!openAccordion)}>
          {openAccordion ? <Icons.ChevronUp /> : <Icons.ChevronDown />}{" "}
        </span>
      </h3>
      
     {openAccordion && <div className="border-y p-3 bg-gray-900">
        <Paragraph>{para1}</Paragraph>
        <Paragraph>{para2}</Paragraph>
        <Paragraph>{para3}</Paragraph>
      </div>}
    </div>
  );
};

export default Accordion;

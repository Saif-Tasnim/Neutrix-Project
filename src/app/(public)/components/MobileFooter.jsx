import React from "react";
import Accordion from "./Accordion";

const MobileFooter = () => {
 
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="border border-gray-500 rounded-xl">
        <Accordion
          heading="USA Underwriter"
          para1="NAIC #: 30457"
          para2="P.O. Box 2426"
          para3="Rancho Cucamonga, CA, 91729 "
        />
        <Accordion
          heading="Customer Service & Support"
          para1="Monday - Friday, 9:00 am - 6:00 pm ET"
          para2="+1 (248) 541-2800"
          para3="customerservice@usaunderwriters.com"
        />
        <Accordion
          heading="Claims Administration"
          para1="Monday - Friday, 9:00 am - 6:00 pm ET"
          para2="+1 (248) 541-2800"
          para3="P.O. Box 647 | Battle Creek, MI 49016"
        />
      </div>

      <div className="border border-gray-500 rounded-xl">
        <Accordion
          heading="Underwriting Support"
          para1="Monday - Friday, 9:00 am - 6:00 pm ET"
          para2="+1 (248) 541-2800"
          para3="customerservice@usaunderwriters.com"
        />

        <Accordion
          heading="Policy Suspensions And Coverage Approvals"
          para1="Monday - Friday, 9:00 am - 6:00 pm ET"
        />

        <Accordion
          heading="RIP Qualification Question and Submissions for Coverage"
          para2="+1 (248) 541-2800"
          para3="customerservice@usaunderwriters.com "
        />
      </div>
    </div>
  );
};

export default MobileFooter;

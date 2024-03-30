import React from "react";
import Paragraph from "./Paragraph";

const TheFooter = () => {
  return (
    <div>
      <div className="bg-gray-800 text-gray-100 grid grid-cols-3 gap-14 px-10 py-10">
        <div>
          <h3 className="font-semibold text-xl mb-3">USA Underwriter</h3>
          <Paragraph >NAIC #: 30457</Paragraph>
          <Paragraph>P.O. Box 2426</Paragraph>
          <Paragraph>Rancho Cucamonga, CA, 91729 </Paragraph>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-3">Underwriting Support</h3>
          <Paragraph>Monday - Friday, 9:00 am - 6:00 pm ET</Paragraph>
          <Paragraph>+1 (248) 541-2800</Paragraph>
          <Paragraph>customerservice@usaunderwriters.com </Paragraph>
        </div>

        <div>
          <h1 className="font-semibold text-xl mb-3">Policy Suspensions And Coverage Approvals</h1>
          <Paragraph>Monday - Friday, 9:00 am - 6:00 pm ET</Paragraph>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-3">Customer Service & Support</h3>
          <Paragraph>Monday - Friday, 9:00 am - 6:00 pm ET</Paragraph>
          <Paragraph>+1 (248) 541-2800</Paragraph>
          <Paragraph>customerservice@usaunderwriters.com </Paragraph>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-3">Claims Administration</h3>
          <Paragraph>Monday - Friday, 9:00 am - 6:00 pm ET</Paragraph>
          <Paragraph>+1 (248) 541-2800</Paragraph>
          <Paragraph>P.O. Box 647 | Battle Creek, MI 49016 </Paragraph>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-3">PIP Qualification Question and Submissions for Coverage</h3>
          <Paragraph>+1 (248) 541-2800</Paragraph>
          <Paragraph>customerservice@usaunderwriters.com </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default TheFooter;

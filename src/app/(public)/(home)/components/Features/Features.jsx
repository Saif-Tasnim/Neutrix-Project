import React from "react";

const Features = () => {
  return (
    <div className="mt-28 flex flex-col justify-center gap-9 lg:flex-row lg:justify-between items-center">
      
      <div className="text-center lg:text-left">
        <p className="text-gray-700 font-medium">Our Features</p>
        <h1 className="text-xl lg:text-3xl font-semibold mt-1 mb-6 ">MCCA REFUND INFORMATION</h1>
        <button className="px-24 py-4 lg:px-5 lg:py-2 bg-red-600 text-gray-100 rounded-full font-medium hover:bg-red-700 whitespace-nowrap">
          MCCA Refund FAQ
        </button>
      </div>

      <div>
        <p className="font-medium w-full text-justify lg:w-[660px] ml-2">The Michigan Catastrophic Claims Association approved refunds for certain Michigan  Policyholders due a surplus of funds being held by the MCCA. The approved refund  will be $400 per eligible vehicle insured with USA Underwriters on October 31st, 2021 at 11:59 PM, or $80 if the vehicle is an insured historical vehicle.</p>
      </div>
    </div>
  );
};

export default Features;

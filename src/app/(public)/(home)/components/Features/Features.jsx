import React from "react";

const Features = () => {
  return (
    <div className="mt-28 flex justify-between">
      <div>
        <p className="text-gray-700 font-medium">Our Features</p>
        <h1 className="text-3xl font-semibold mt-1 mb-6">MCCA REFUND INFORMATION</h1>
        <button className="px-5 py-2 bg-red-600 text-gray-100 rounded-full font-medium hover:bg-red-700">
          MCCA Refund FAQ
        </button>
      </div>

      <div>
        <p className="font-medium w-[660px]">The Michigan Catastrophic Claims Association approved refunds for certain Michigan  Policyholders due a surplus of funds being held by the MCCA. The approved refund  will be $400 per eligible vehicle insured with USA Underwriters on October 31st, 2021 at 11:59 PM, or $80 if the vehicle is an insured historical vehicle.</p>
      </div>
    </div>
  );
};

export default Features;

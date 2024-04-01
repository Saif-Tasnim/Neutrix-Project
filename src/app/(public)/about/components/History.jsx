import React from "react";

const History = () => {
  return (
    <div className="mt-14 lg:mt-28 flex flex-col items-start gap-0 lg:flex-row lg:gap-24 lg:items-center">
      <div>
        <p className="text-gray-700 font-medium hidden lg:block">About us</p>
        <h1 className="text-3xl font-semibold mt-1 mb-6">History</h1>
      </div>

      <div>
        <p className="font-medium text-[#6B7280] block lg:hidden">
          In 1962, the Southern Michigan Mutual Insurance Company celebrated
          it’s 100th year in continuous operation 
        </p>
        <p className="font-medium text-[#6B7280] hidden lg:block">
          In 1962, the Southern Michigan Mutual Insurance Company celebrated
          it’s 100th year in continuous operation and was presented with a
          plaque by the State of Michigan as a Centenary Business.
        </p>
      </div>
    </div>
  );
};

export default History;

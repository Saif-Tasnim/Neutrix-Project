import React from "react";

const Mission = () => {
  return (
    <div className="mt-16 lg:mt-28 flex flex-col items-start lg:flex-row lg:justify-between lg:items-center">
      <div>
        <p className="text-gray-700 font-medium">Believe</p>
        <h1 className="text-xl lg:text-3xl font-semibold mt-1 mb-2 lg:mb-6 text-red-700">
          OUR MISSION
        </h1>
      </div>

      <div>
        <p className="font-medium w-full text-justify lg:w-[660px]">
        Our mission has remained largely unchanged over the century and a half the company has operated: to quickly provide affordable insurance solutions for our customers that support the communities and families they represent.
        </p>
      </div>
    </div>
  );
};

export default Mission;

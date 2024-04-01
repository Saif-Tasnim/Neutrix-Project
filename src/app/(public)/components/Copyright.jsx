import React from "react";

const Copyright = () => {
  return (
    <div className="py-4 bg-gray-800 lg:bg-white text-blue-50 lg:text-black flex flex-col items-center lg:flex lg:flex-row lg:justify-around">
      <div className="flex flex-col lg:flex-row">
        <span className="font-normal px-3 border-r-2 border-white lg:border-black">
          Copyright 2022 USA Underwriters 
        </span>
        <p>
          <span className="font-semibold px-3 border-r-2 border-white lg:border-black"> Privacy Policy </span>
          <span className="font-semibold px-3"> Terms of Use</span>
        </p>
      </div>

      <div className="font-normal text-sm lg:text-base pt-3 lg:pt-0">
        ( Built by Neutrix - Powered by Neutrix Systems )
      </div>
    </div>
  );
};

export default Copyright;

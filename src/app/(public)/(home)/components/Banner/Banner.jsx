import React from "react";
import img from "@/assets/Rectangle 11.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="mt-24 relative">
      <Image
        src={img}
        alt="img"
        width={300}
        height={300}
        className="w-full h-auto hidden lg:block"
      />

      <div className="bg-red-700 text-gray-200 px-8 py-6 border border-red-700 rounded-xl w-fit lg:absolute lg:bottom-14 left-24">
        
        <h1 className="text-lg font-bold mb-5 flex flex-col">
          <span>Obtain cost-effective same-day </span>{" "}
          <span>insurance coverage quickly.</span>
        </h1>
        <p className="text-xs font-medium mb-5 inline-block lg:flex lg:flex-col">
          <span>
            Lorem ipsum dolor sit amet consectetur. Ut nisi risus ipsum urna
            leo.
          </span>
          <span>
            Etiam enim varius dictum amet hac imperdiet facilisis malesuada.
          </span>
        </p>
       
          <button className="whitespace-nowrap px-12 py-4 lg:px-9 lg:py-4 bg-gray-900 rounded-full font-medium text-base hover:bg-gray-950">
            Report a Claim
          </button>
      </div>
    </div>
  );
};

export default Banner;

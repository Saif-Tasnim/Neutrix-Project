import React from "react";
import img from "@/assets/image 2.png";
import Image from "next/image";
import { Icons } from "@/components/Icons";

const HeroSection = () => {
  return (
    <div className="w-full bg-red-700 h-full lg:h-screen mt-4 lg:mt-10 rounded-xl flex flex-col lg:flex-row lg:justify-around p-5 lg:p-0">
      
      <div className="p-0 lg:p-20 text-white">
        <h1 className="text-3xl lg:text-[48px] uppercase font-bold block lg:flex lg:flex-col lg:gap-6">
          Get affordable, <span>same-day coverage</span>{" "}
          <span>in no time </span>{" "}
        </h1>

        <p className="text-xs lg:text-base pt-4 lg:pt-10">
          With roots over a century deep in the birthplace of the automobile{" "}
          <br /> industry, USA Underwriters has the knowledge and expertise to
          help tailor <br /> a policy to suit your lifestyle, your budget, and
          your priorities.
        </p>

        <div className="mt-12 flex items-center gap-6 lg:gap-8">
          <button className="px-4 py-3 lg:px-8 lg:py-4 rounded-full bg-white text-black font-medium whitespace-nowrap hover:bg-red-300">
            Report a Claim
          </button>

          <button className="text-white font-medium whitespace-nowrap flex items-center gap-1">
            Learn More <Icons.MoveRight />{" "}
          </button>
        </div>
      </div>
      
      <div className="hidden lg:block">
        <Image
          src={img}
          alt="image"
          width={400}
          height={300}
          className="h-full w-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;

import Image from "next/image";
import React from "react";
import img from "@/assets/frame.png";
const SingleCard = ({ heading, para }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-11 flex flex-col gap-6">
      <div className="w-16 h-16 rounded-full bg-gray-300 p-4 hover:bg-red-700">
        <Image
          src={img}
          alt="frame"
          width={100}
          height={100}
          className="w-full h-auto"
        />
      </div>
      <div>
        <h1 className="font-semibold text-xl mb-2.5">{heading}</h1>
        <p className="font-medium text-gray-500">{para}</p>
      </div>
    </div>
  );
};

export default SingleCard;

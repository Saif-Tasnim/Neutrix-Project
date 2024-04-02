import React from "react";
import img from "@/assets/Rectangle 4420.png";
import Image from "next/image";

const BannerText = () => {
  return (
    <div className="mt-12">
      <Image src={img} alt="img" height={100} width={100} className="w-full h-auto"/>

      <div className="mt-12 flex flex-col gap-5">
        <p>
          In 2013, Southern Michigan Mutual Insurance Company became USA
          Underwriters. The name may have changed, but the dedication to our
          customers, our drive to serve them and their communities hasn’t. USA
          Underwriters’ mission as a leading Property and Casualty Insurance
          company in Michigan, remains largely unchanged from the mission of
          it’s progenitor: to provide affordable, quality insurance solutions to
          families and individuals.
        </p>

        <p className="hidden lg:block">
          Insurance has changed a lot in the last century and a half. When
          Southern Michigan Mutual Insurance Company was founded, automobiles
          simply didn’t exist. That all changed — right in the company’s back
          yard — at the turn of the 20th century when Henry Ford’s Model T began
          rolling off the assembly line.
        </p>

        <p className="hidden lg:block">
          In an instant of history, the car supplanted the horse and buggy as
          American’s primary mode of transportation. The era of the Automobile
          had begun, and the Southern Michigan Mutual Insurance Company was
          front and center for one of the most dramatic shifts in American
          history. The car accelerated economic growth, and offered a freedom of
          travel that had been nigh-unimaginable for the vast majority of people
          through the whole of human history.
        </p>
      </div>
    </div>
  );
};

export default BannerText;

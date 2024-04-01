import React from "react";
import SingleCard from "./SingleCard";
import FeatureSwiper from "./FeatureSwiper";

const FeatureCards = () => {
  return (
    <>
      <div className="mt-20 hidden lg:block">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <SingleCard
            heading="Affordable Auto Insurance "
            para="USA Underwriters offers affordable rates on quality coverage."
          />

          <SingleCard
            heading="Accidents Can Add Up"
            para="USA Underwriters offers affordable rates on quality coverage.Accidents and infractions can linger long after the fines are paid and the car is repaired."
          />

          <SingleCard
            heading="Price Conscious"
            para="Price conscious consumers choose USA Underwriters for affordable auto insurance solutions."
          />
        </div>
      </div>

      <div className="mt-20 mx-5 block lg:hidden">
         <FeatureSwiper />
      </div>
    </>
  );
};

export default FeatureCards;

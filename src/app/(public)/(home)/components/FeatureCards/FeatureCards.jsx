import React from "react";
import SingleCard from "./SingleCard";

const FeatureCards = () => {
  return (
    <div className="grid grid-cols-3 gap-8 mt-10">
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
  );
};

export default FeatureCards;

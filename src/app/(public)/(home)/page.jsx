import React from "react";
import { Banner, FeatureCards, Features, HeroSection } from "./components";
import HeroSlider from "./components/HeroSection/HeroSlider";

const HomePage = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <HeroSlider />
      <Features />
      <FeatureCards />
      <Banner />
    </div>
  );
};

export default HomePage;

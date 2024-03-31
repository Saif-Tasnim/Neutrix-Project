import React from "react";
import { Banner, FeatureCards, Features, HeroSection } from "./components";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <FeatureCards />
      <Banner />
    </div>
  );
};

export default HomePage;

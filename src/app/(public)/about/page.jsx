import React from "react";
import { About, BannerText, History, Mission } from "./components";
import { FeatureCards } from "../(home)/components";

const AboutPage = () => {
  return (
    <div>
      <About />
      <History />
      <BannerText />
      <Mission />
      <FeatureCards />
    </div>
  );
};

export default AboutPage;

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Pagination } from "swiper/modules";
import { HeroSection } from ".";

const HeroSlider = () => {
  return (
    <Swiper pagination={true} modules={[Pagination]}>
      <SwiperSlide>
        <HeroSection />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSection />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;

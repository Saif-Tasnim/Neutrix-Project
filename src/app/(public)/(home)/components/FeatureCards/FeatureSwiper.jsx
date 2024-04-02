"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Pagination } from "swiper/modules";
import SingleCard from "./SingleCard";

const FeatureSwiper = () => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <SingleCard
          heading="Affordable Auto Insurance "
          para="USA Underwriters offers affordable rates on quality coverage."
        />
      </SwiperSlide>

      <SwiperSlide>
        <SingleCard
          heading="Accidents Can Add Up"
          para="USA Underwriters offers affordable rates on quality coverage.Accidents and infractions can linger long after the fines are paid and the car is repaired."
        />
      </SwiperSlide>

      <SwiperSlide>
        <SingleCard
          heading="Price Conscious"
          para="Price conscious consumers choose USA Underwriters for affordable auto insurance solutions."
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default FeatureSwiper;

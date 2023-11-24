"use client";

import React from "react";

// Import Swiper React components
import {
  Pagination,
  Scrollbar,
  Mousewheel,
  Autoplay,
  Grid,
} from "swiper/modules";

import { Swiper } from "swiper/react";

// import MainImage from "../../../public/Main.png";
// import SecondImage from "../../../public/Second.png";
// import ThirdImage from "../../../public/Third.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

// Utility Function
import { SliderUtility } from "@/utils/sliderUtility";

// ------COMPONENT-------
const Slider = (props) => {
  return (
    <Swiper
      modules={[Pagination, Scrollbar, Mousewheel, Autoplay, Grid]}
      pagination={{ clickable: true }}
      mousewheel
      autoplay
      slidesPerView={1}
      //   style={{ height: "50vh" }}
      className="h-64 md:h-96 w-screen "
    >
      {SliderUtility("/5.png")}
      {SliderUtility("/5.png")}
      {SliderUtility("/5.png")}
    </Swiper>
  );
};
export default Slider;

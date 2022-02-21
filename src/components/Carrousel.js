import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carrousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import Locations from "./Locations";

export default function Carrousel() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Locations.map(Location =>
          <SwiperSlide>
            <div className="CartaCarrousel">
              <img src={Location.image} />
              <h3>{Location.name}</h3>
            </div>
          </SwiperSlide>
          )}
      </Swiper>
    </>
  );
}

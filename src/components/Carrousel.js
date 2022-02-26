import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Carrousel.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { obtainLocations } from '../components/apicalls';
import {Link as LinkRouter} from 'react-router-dom'; {/*Esto es para poder usar bootstrap sin pisar etiqeutas*/}



export default function Carrousel() {

  const [apidata, setApiData]=useState([])

  useEffect(()=>{
    obtainLocations()
    .then(response=>setApiData(response.data.response.locations))
  },[])

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
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerGroup: 1,
          },
          715: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2,
          },
          1072: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
          },
          1430: {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 4,
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {apidata.map(Location =>
          <SwiperSlide>
            <LinkRouter to={`/city/${Location._id}`}>
              <div className="CartaCarrousel">
                <img src={process.env.PUBLIC_URL+`/img/${Location.image}`} alt="Location"/>
                <h3>{Location.name}</h3>
              </div>
            </LinkRouter>
          </SwiperSlide>
          )}
      </Swiper>
    </>
  );
}

import Locations from "./Locations";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Carrousel.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import {Link as LinkRouter} from 'react-router-dom'; {/*Esto es para poder usar bootstrap sin pisar etiqeutas*/}

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
            <LinkRouter to="/city">
              <SwiperSlide>
                <div className="CartaCarrousel">
                  <img src={Location.image} alt="Location"/>
                  <h3>{Location.name}</h3>
                </div>
              </SwiperSlide>
            </LinkRouter>
          )}
      </Swiper>
    </>
  );
}

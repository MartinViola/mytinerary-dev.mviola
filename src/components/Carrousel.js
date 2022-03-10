import React, {useEffect} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Carrousel.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import {Link as LinkRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import citiesActions from '../redux/actions/citiesActions';

function Carrousel(props) {

  useEffect(()=>{
    props.fetchLocations()
  },[]);

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
        {/* { props.cities && props.cities.map((Location) => { */}
        {props.cities.length > 0 ? props.cities.map(Location => 
          <SwiperSlide>
            <LinkRouter to={`/city/${Location._id}`}>
              <div className="CartaCarrousel">
                <img src={process.env.PUBLIC_URL+`/img/${Location.image}`} alt="Location"/>
                <h3>{Location.name}</h3>
              </div>
            </LinkRouter>
          </SwiperSlide>
        ) : <p>Loading...</p>
        }
      </Swiper>
    </>
  );
}

const mapDispatchToProps = {
  fetchLocations: citiesActions.fetchLocations,
}
const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Carrousel)
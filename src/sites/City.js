import * as React from 'react';
import { useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/City.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams } from 'react-router-dom';
import {Link as LinkRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import citiesActions from '../redux/actions/citiesActions';
import itinerariesActions from '../redux/actions/itinerariesActions';

function City(props) {

  let {_id} = useParams();

  useEffect(()=>{
    window.scrollTo(0, 0)
    // props.fetchItineraries()
    props.fetchOneItinerary(_id)
    props.fetchOneLocation(_id)
  },[]);

  return (
    <div className="containerOneCityDetailsSite">
        {props.oneCity[0] && 
      <>
        <div className="allcityContainer">
          <div className='cityContainer'>
            <div className='cityDetails'>
              <h2 className="locationTitle">{props.oneCity[0].name}</h2>
              <h3 className="locationTitle">{props.oneCity[0].country}</h3>
            </div>
            <img className="cityImage" src={process.env.PUBLIC_URL+`/img/${props.oneCity[0].image}`} alt="image" />
          </div>
          <div className="containerItineraries">
            <h2 className="h1Itineraries">{props.oneCity.name} Itineraries:</h2>
            {props.cityItineraries.length > 0 ? props.cityItineraries.map(Itinerary =>
              <div className='divAccordion' >
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <div className="containerItineraryInfo">
                      <h3>{Itinerary.itinerary}</h3>
                      <div className="containerItineraryDurationPriceLikes">
                        <p>Duration: {Itinerary.duration} </p>
                        <p>Price: {'💵'.repeat(Itinerary.price)} </p>
                        {/* <p>Price: {Itinerary.price} </p> */}
                        <p>Likes: {Itinerary.likes} </p>
                      </div>
                    </div>
                    {/* <Typography>Accordion 1</Typography> */}
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Under construction!
                    </Typography>
                    <p>{Itinerary.hashtags}</p>
                    <div className="authorContainer">
                      <img className="imgAuthor" src={process.env.PUBLIC_URL+`/img/${Itinerary.creatorImage}`} alt="author" />
                      <p>Insider: {Itinerary.creator}</p>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            // <>
            //   <div className="containerItineraryInfo">
            //     <h3>{Itinerary.itinerary}</h3>
            //     <div>
            //       <p>Duration: {Itinerary.duration}</p>
            //       <p>Price: {Itinerary.price}</p>
            //       {/* {"💰".repeat(parseInt(itinerariesInfo.price))} */}
            //       <p>Likes: {Itinerary.likes}</p>
            //     </div>
            //   </div>
            //   <p>{Itinerary.hashtags}</p>
            //   <div className="authorContainer">
            //     <p>Author: {Itinerary.creator}</p>
            //     <img className="imgAuthor" src={process.env.PUBLIC_URL+`/img/${Itinerary.image}`} alt="author" />
            //   </div>
            //   </>
            ) : <h4>We are working hard to offer you activities in {props.oneCity[0].name}, please return soon! </h4>
            }

            {/* HASTA AQUI, SE DEBE HACER DINAMICAMENTE CON LOS ITINERARIOS */}
            
          </div>

        </div>
        <LinkRouter className="backCities" to="/cities">
            <ArrowBackIcon fontSize="medium"/>
            <p> back to Cities</p>
        </LinkRouter>
      </>
        }
    </div>
  )
}

const mapDispatchToProps = {
  fetchItineraries: itinerariesActions.fetchItineraries,
  fetchOneLocation: citiesActions.fetchOneLocation,
  fetchOneItinerary: itinerariesActions.fetchOneItinerary
}
const mapStateToProps = (state) => {
  return {
    oneCity: state.citiesReducer.oneCity,
    cityItineraries: state.itinerariesReducer.cityItineraries
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(City)
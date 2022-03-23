import * as React from 'react';
import { useEffect, useState } from 'react';
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
import userActions from '../redux/actions/userActions';
import ActivityCard from '../components/activityCard';

function City(props) {

  let {_id} = useParams();
  const [reload, setReload] = useState(false)

  useEffect(()=>{
    window.scrollTo(0, 0)
    // props.fetchItineraries()
    props.fetchOneItinerary(_id)
    props.fetchOneLocation(_id)
  },[reload]);

  const LikeFunction = (event) => {
    let itineraryID= event.target.value
    console.log(itineraryID)
    let userID = props.user._id
    props.LikeDislike(itineraryID, userID)
    setReload(!reload)
  };

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
                    <div className="containerItineraryInfo">
                      <h3>{Itinerary.itinerary}</h3>
                      <button onClick={LikeFunction} value={Itinerary._id} className="likeBtn">👍</button>
                      <p>{Itinerary.likes.length} </p>
                    </div>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                      <div className="containerItineraryDurationPriceLikes">
                        <p>Duration: {Itinerary.duration} </p>
                        <p className='itinerariPriceP'>Price: {'$'.repeat(Itinerary.price)} </p>
                      </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ActivityCard itineraryId={Itinerary._id} />
                    {/* {Itinerary.hashtags.map(element=>
                    <p>{element}</p>
                    )} */}
                    <div className="authorContainer">
                      <img className="imgAuthor" src={process.env.PUBLIC_URL+`/img/${Itinerary.creatorImage}`} alt="author" />
                      <p>Insider: {Itinerary.creator}</p>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            ) : <h4>We are working hard to offer you activities in {props.oneCity[0].name}, please return soon! </h4>
            }
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
  fetchOneItinerary: itinerariesActions.fetchOneItinerary,
  LikeDislike: itinerariesActions.LikeDislike,
}
const mapStateToProps = (state) => {
  return {
    oneCity: state.citiesReducer.oneCity,
    cityItineraries: state.itinerariesReducer.cityItineraries,
    user: state.userReducer.user,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(City)
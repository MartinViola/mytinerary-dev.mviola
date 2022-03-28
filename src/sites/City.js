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
import commentsActions from '../redux/actions/commentsActions';
import { SettingsApplicationsRounded } from '@mui/icons-material';

function City(props) {

  let {_id} = useParams();
  const [reload, setReload] = useState(false)
  const [modifyCommentState, setModifyComment] = useState()
  const [inputText, setInputText] = useState()

  useEffect(()=>{
    window.scrollTo(0, 0)
    // props.fetchItineraries()
    props.fetchOneItinerary(_id)
    props.fetchOneLocation(_id)
  },[reload]);
  
  const LikeFunction = (event) => {
    let itineraryID= event.target.value
    let userID = props.user._id
    props.LikeDislike(itineraryID, userID)
    setReload(!reload)
  };
  
  async function uploadComment(event){
    //PASO EL ID DEL ITINERARIO
    const commentData = {
      itinerary: event.target.id,
      comment: inputText
    }
    await props.addComment(commentData)
    .then(response => setInputText(""))
    setReload(!reload)
  };
  
  async function modifyComment(event){
    const commentData={
      commentId: event.target.id,
      comment: modifyCommentState
    }
    await props.modifyComment(commentData)
    setReload(!reload)
  };
  
  async function deleteComment(event){
    await props.deleteComment(event.target.id)
    setReload(!reload)
  }

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
                    <div className='hashtagsContainer'>
                      {Itinerary.hastags.map(element=>
                      <p key={element}>{element}</p>
                      )}
                    </div>
                    <div className="authorContainer">
                      <img className="imgAuthor" src={process.env.PUBLIC_URL+`/img/${Itinerary.creatorImage}`} alt="author" />
                      <p>Insider: {Itinerary.creator}</p>
                    </div>
                    <h4 className="titleComments">Comments:</h4>
                    {Itinerary?.comments.map(comment=>
                      <>
                      {comment?.userId !== props?.user?._id ?
                      // {comment.userId?._id !== props.user?.id ?
                        <div className="oldCommentContainer">
                          <h5>Other user {comment.userId.userFirstname}</h5>
                          <p className='commentText'>{comment.comment}</p>
                        </div>
                        :
                        <div className="oldCommentContainer">
                          <h5>Current user {comment.userId.userFirstname}</h5>
                          <div>
                            <textarea className='commentText' type="text" onChange={(event)=>setModifyComment(event.target.value)} defaultValue={comment.comment}></textarea>
                            <div className="oldCommentButtonsContainer">
                              <button id={comment._id} onClick={modifyComment}>Modify comment</button>
                              <button id={comment._id} onClick={deleteComment}>Delete comment</button>
                            </div>
                          </div>
                        </div>
                      } 
                      </>
                    )}
                    {props.user !== null ?
                      <div className="newCommentContainer">
                          <h5>
                            Leave us your comment:
                          </h5>
                          <div>
                            <textarea className='commentText' type="text" onChange={(event)=>setInputText(event.target.value)}></textarea>
                            <button id={Itinerary._id} onClick={uploadComment}>Upload comment</button>
                          </div>
                      </div>
                      :
                      <div className="newCommentContainer">
                        <h5>Sign in and leave us your comment.</h5>
                      </div>
                    }
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
  addComment: commentsActions.addComment,
  modifyComment: commentsActions.modifyComment,
  deleteComment: commentsActions.deleteComment,
}
const mapStateToProps = (state) => {
  return {
    oneCity: state.citiesReducer.oneCity,
    cityItineraries: state.itinerariesReducer.cityItineraries,
    user: state.userReducer.user,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(City)
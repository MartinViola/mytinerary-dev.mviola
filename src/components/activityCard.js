import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import activitiesActions from '../redux/actions/activitiesActions';
import '../styles/activityCard.css';

function ActivityCard(props) {

    const [activities, setActivities] = useState([])

    useEffect(()=>{
        props.fetchActionsForOneItinerary(props.itineraryId)
        .then(res=>setActivities(res))
    },[]);
    
    return(
        <>
            {activities.map(activityElement =>
                <div className='activityCardContainer'>
                    {/* <img className="activityImage" src={process.env.PUBLIC_URL+`/img/${activityElement.activityImage}`} alt="activity" /> */}
                    <img className="activityImage" src={activityElement.activityImage} alt="activity" />
                    <div className="activityTitleDescriptionContainer">
                        <h4 className="activityH4">{activityElement.activityName}</h4>
                        <p>{activityElement.activityDescription}</p>
                    </div>
                </div>
            )}
        </>
    )
}

// const mapStateToProps = (state) => {
// return {
//     cities: state.citiesReducer.cities,
// }
const mapDispatchToProps = {
    fetchActionsForOneItinerary: activitiesActions.fetchActionsForOneItinerary,
}

export default connect(null,mapDispatchToProps)(ActivityCard)

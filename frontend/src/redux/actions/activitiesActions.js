import axios from 'axios';

const activitiesActions = {

    fetchActionsForOneItinerary:(itineraryId)=>{
        return async(dispatch, getState)=>{
            let res = await axios.get('https://mytinerary-viola.herokuapp.com/api/allActivitiesForOneItinerary/'+itineraryId) 
            return(res.data.response)
        }
    },

}

export default activitiesActions;
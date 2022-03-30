import axios from 'axios';

const activitiesActions = {

    fetchActionsForOneItinerary:(itineraryId)=>{
        return async(dispatch, getState)=>{
            let res = await axios.get('http://localhost:4000/api/allActivitiesForOneItinerary/'+itineraryId) 
            return(res.data.response)
        }
    },

}

export default activitiesActions;
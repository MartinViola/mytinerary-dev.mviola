import axios from 'axios';

const itinerariesActions = {
//redux no puede utilizar funciones asincronas, por ello, se devuelve (return) con funcion asincrona. 
    fetchItineraries:()=>{
        return async(dispatch, getState)=>{
            const res = await axios.get('http://localhost:4000/api/allitineraries') 
            dispatch({type:'fetchItineraries', payload:res.data.response.itineraries})
        }
    },
    fetchOneItinerary:(city_id)=>{
        return async(dispatch, getState)=>{
            const res = await axios.get('http://localhost:4000/api/allitineraries/'+city_id) 
            dispatch({type:'fetchOneItinerary', payload: res.data.response.itineraries})
        }
    },

}
export default itinerariesActions;
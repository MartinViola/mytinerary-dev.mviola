import axios from 'axios';
import { useImperativeHandle } from 'react';

const itinerariesActions = {
//redux no puede utilizar funciones asincronas, por ello, se devuelve (return) con funcion asincrona. 
    fetchItineraries:()=>{
        return async(dispatch, getState)=>{
            const res = await axios.get('https://mytinerary-viola.herokuapp.com/api/allitineraries') 
            dispatch({type:'fetchItineraries', payload:res.data.response.itineraries})
        }
    },
    fetchOneItinerary:(city_id)=>{
        return async(dispatch, getState)=>{
            const res = await axios.get('https://mytinerary-viola.herokuapp.com/api/allitineraries/'+city_id) 
            dispatch({type:'fetchOneItinerary', payload: res.data.response.itineraries})
        }
    },
    LikeDislike:(itineraryID, userID)=>{
        const token = localStorage.getItem('token')
        return async(dispatch, getState)=>{
            try{
                const res = await axios.put(`https://mytinerary-viola.herokuapp.com/api/LikeDislike/${itineraryID}`,{ userID },
                {headers: {
                    'Authorization': 'Bearer ' + token
                }})
                return res
            }catch(error){
                console.log(error)
            }
            dispatch({type: 'LikeDislike'})
        }
    },
}
export default itinerariesActions;
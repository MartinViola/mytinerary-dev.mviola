import axios from 'axios';

const citiesActions = {
//redux no puede utilizar funciones asincronas, por ello, se devuelve (return) con funcion asincrona. 
    fetchLocations:()=>{
        return async(dispatch, getState)=>{
            const res = await axios.get('http://localhost:4000/api/alllocations') 
            dispatch({type:'fetch', payload:res.data.response.locations})
        }
    },
    // deleteLocation: (id)=>{
    //     return async(dispatch, getState)=>{
            
    //     }
    // },
    filterLocations: (cities, value) => {
       return async (dispatch, getState) => {
           dispatch({type: 'filter', payload: {cities, value}})
       }
    },
    fetchOneLocation: (id) => {
        return async (dispatch, getState) =>{
            const res = await axios.get('http://localhost:4000/api/alllocations/'+id) 
            dispatch({type: 'fetchOneLocation', payload: res.data.response.locations})
        }
    } 

}
export default citiesActions;
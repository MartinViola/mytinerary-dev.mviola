import { TrendingUpTwoTone } from '@mui/icons-material';
import axios from 'axios';

const commentsActions = {

    addComment:(comment)=>{
        const token = localStorage.getItem('token')
        return async(dispatch, getState)=>{
            try{
                const res = await axios.post(`http://localhost:4000/api/itineraries/comments`, {comment},
                {headers: {
                    'Authorization': `Bearer ${token}`
                }})
                dispatch({
                    type: 'message',
                    payload: {
                        view: true, 
                        message: res.data.message,
                        success: res.data.success,
                    }
                })
                return res
            }catch(error){
                console.log(error)
            }
        }
    },

    modifyComment:(comment)=>{
        const token = localStorage.getItem('token')
        return async(dispatch, getState)=>{
            try{
                const res = await axios.put(`http://localhost:4000/api/itineraries/comments`, 
                    {comment},
                    {headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                dispatch({
                    type: 'message',
                    payload: {
                        view: true, 
                        message: res.data.message,
                        success: res.data.success,
                    }
                })
                return res
            }catch(error){
                console.log(error)
            }
        }
    },

    deleteComment:(id)=>{
        const token = localStorage.getItem('token')
        return async(dispatch, getState)=>{
            try{
                const res = await axios.post(`http://localhost:4000/api/itineraries/comments/${id}`, 
                    {},
                    {headers: {
                        'Authorization': `Bearer ${token}`
                    }}
                )
                dispatch({
                    type: 'message',
                    payload: {
                        view: true, 
                        message: res.data.message,
                        success: res.data.success,
                    }
                })
                return res
            }catch(error){
                console.log(error)
            }
        }
    },

}

export default commentsActions;
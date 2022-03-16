import axios from 'axios';

const userActions = {
    userRegistration: (newUserData)=>{
        return async (dispatch, getState)=>{
            const res = await axios.post('http://localhost:4000/api/auth/registration',{newUserData})
            dispatch({type:'message', payload: res.data})
        }
    },
    userLogIn: (loggedUserData)=>{
        return async (dispatch, getState)=>{
            const user = await axios.post('http://localhost:4000/api/auth/login',{loggedUserData})
            if(user.data.success){
                dispatch({type: 'user', payload: user.data.response.userData}) 
            }else{
                console.log(user.data.message)
            }
        }
    },
    userLogOut: (closeUser)=>{
        return async (dispatch, getState) =>{
            const user = axios.post('http://localhost:4000/api/auth/logout',{closeUser})
            dispatch({type: 'user', payload: null})
        }
    },
}

export default userActions;
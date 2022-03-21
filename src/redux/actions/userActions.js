import axios from 'axios';

const userActions = {
    userRegistration: (newUserData)=>{
        return async (dispatch, getState)=>{
            const res = await axios.post('http://localhost:4000/api/auth/registration',{newUserData})
            dispatch({type: 'message', 
                payload: {
                    view: true, 
                    message: res.data.message,
                    success: res.data.success}
                }
            ) 
        }
    },
    userLogIn: (loggedUserData)=>{
        return async (dispatch, getState)=>{
            const user = await axios.post('http://localhost:4000/api/auth/login',{loggedUserData})
            if(user.data.success){
                localStorage.setItem('token', user.data.response.token)
                dispatch({type: 'user', 
                    payload: user.data.response.userData,
                    }
                )
            }
            
                dispatch({type: 'message', 
                    payload: {
                        view: true, 
                        message: user.data.message,
                        success: user.data.success}
                    }
                )
            
        }
    },
    userLogOut: (closeUser)=>{
        return async (dispatch, getState) =>{
            const user = axios.post('http://localhost:4000/api/auth/logout',{closeUser})
            localStorage.removeItem('token')
            dispatch({type: 'user', 
            payload: null
            })
        }
    },
    verifyToken: (token) => {
        return async (dispatch, getState) => {
            const user = await axios.get('http://localhost:4000/api/auth/logInToken', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            if (user.data.success) {
                dispatch({ type: 'user', payload: user.data.response });
                dispatch({
                    type: 'message',
                    payload: {
                            view: true,
                            message: user.data.message,
                            success: user.data.success
                        }
                });
            }else {
                localStorage.removeItem('token')
            }
        }
    }
}

export default userActions;
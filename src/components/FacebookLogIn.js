import React from 'react'
import FacebookLogin from 'react-facebook-login'
import {connect} from 'react-redux';
import userActions from '../redux/actions/userActions';
import '../styles/SocialButton.css'

function FacebookLogIn(props) {

    const responseFacebook = async (res) => {
        const loggedUserData={
            userEmail: res.email,
            userPassword: res.id,
            from: "facebook",
        }
        await props.userLogIn(loggedUserData)
    }

    return (
        <FacebookLogin
        cssClass="buttonsocial my-facebook-button-class"
        icon="fa-facebook"
        textButton=" Facebook"
          appId="665389298034548"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
        />
    )
}

const mapDispatchToProps = {
    userLogIn: userActions.userLogIn,
}

export default connect(null, mapDispatchToProps)(FacebookLogIn)
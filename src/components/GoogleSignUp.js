import React from 'react'
import GoogleLogin from 'react-google-login'
import {connect} from 'react-redux';
import userActions from '../redux/actions/userActions';
import '../styles/SocialButton.css'

function GoogleSignUp(props) {

    const responseGoogle = async (res) => {
        const userData={
            userFirstname: res.profileObj.givenName,
            userLastname: res.profileObj.familyName,
            userEmail: res.profileObj.email,
            userPassword: res.profileObj.googleId,
            userPhotoURL: res.profileObj.imageUrl,
            userCountry: "TBD",
            userEmailVerified: true,
            from: "google",
        }
        await props.userRegistration(userData)
    }

    return (
        <GoogleLogin
        className="buttonsocial"
        clientId="971845975096-a3gu832l2esbdv2dmp2iktvql4t5imot.apps.googleusercontent.com"  //esto es de Adrian, como genero el mio???
        buttonText="Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        />
    )
}

const mapDispatchToProps = {
    userRegistration: userActions.userRegistration,
}

export default connect(null, mapDispatchToProps)(GoogleSignUp)
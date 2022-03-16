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
        clientId="27522855911-1j5djabb8lmhhhvb3nc0uf77m30hfncl.apps.googleusercontent.com"
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
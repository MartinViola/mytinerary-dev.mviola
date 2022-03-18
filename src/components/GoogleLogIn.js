import React from 'react'
import GoogleLogin from 'react-google-login'
import {connect} from 'react-redux';
import userActions from '../redux/actions/userActions';
import '../styles/SocialButton.css'

function GoogleLogIn(props) {

    const responseGoogle = async (res) => {
        const loggedUserData={
            userEmail: res.profileObj.email,
            userPassword: res.profileObj.googleId,
            from: "google",
        }
        await props.userLogIn(loggedUserData)
    }

    return (
        <GoogleLogin
        className="buttonsocial"
        // clientId="971845975096-a3gu832l2esbdv2dmp2iktvql4t5imot.apps.googleusercontent.com"      CLIENT ID DE ADRIAN
        clientId="27522855911-1j5djabb8lmhhhvb3nc0uf77m30hfncl.apps.googleusercontent.com"
        buttonText="Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        />
    )
}

const mapDispatchToProps = {
    userLogIn: userActions.userLogIn,
}

export default connect(null, mapDispatchToProps)(GoogleLogIn)
import React from 'react'
import FacebookLogin from 'react-facebook-login'
import {connect} from 'react-redux';
import userActions from '../redux/actions/userActions';
import '../styles/SocialButton.css'

function FacebookSignUp(props) {

    const responseFacebook = async (res) => {
        //Para separar nombre y apellido
        const splitFullName = res.name.split(" ")
        let FirstName = splitFullName[0]
        let LastName = splitFullName[1]

        const userData={
            userFirstname: FirstName,
            userLastname: LastName,
            userEmail: res.email,
            userPassword: res.id,
            userUniqueString: 'TBD',
            userPhotoURL: res.picture.data.url,
            userCountry: "TBD",
            userEmailVerified: true,
            from: "facebook",
        }
        await props.userRegistration(userData)
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
    userRegistration: userActions.userRegistration,
}

export default connect(null, mapDispatchToProps)(FacebookSignUp)
import React, {useEffect, useState} from 'react'
import '../styles/SignUp.css';
import {Link as LinkRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import userActions from '../redux/actions/userActions';
import FacebookSignUp from '../components/FacebookSignUp';
import GoogleSignUp from '../components/GoogleSignUp';
import axios from "axios";


function SignUp(props) {

    const [countryList, setCountryList] = useState([])

    useEffect(() => {
        axios
        .get("https://restcountries.com/v2/all?fields=name")
        .then((res) => setCountryList(res.data))
        .catch((error) => console.log(error))
    },[])

    const handleSubmit = (event) => {
        event.preventDefault()
        const newUserData={
            userFirstname: event.target[0].value,
            userLastname: event.target[1].value,
            userEmail: event.target[2].value,
            userPassword: event.target[3].value,
            userEmailVerified: false,
            userPhotoURL: event.target[4].value,
            userCountry: event.target[5].value,
            from: "registrationForm"
        }
        props.userRegistration(newUserData)
    }

    return (
        <div className='signupContainer'>
            <div className="signupContenContainer">
                <h2>Registration form:</h2>
                <form className="signupFormContainer" onSubmit={handleSubmit}>
                    <input type="text" name="userFirstName" placeholder='First name' required></input>
                    <input type="text" name="userLastName" placeholder='Last name'></input>
                    <input type="email" name="userEmail" placeholder='Email address' required></input>
                    <input type="password" name="userPassword" placeholder='Create password' required></input>
                    <input type="url" name="userPhotoURL" placeholder='Photo URL (ex: http://ex.com/img.jpg)' required></input>
                    <select name="userCountry">
                        <option value="" key="empty">Nationality, please select an option</option>
                        {countryList.map((country,key)=>
                        <option value={country.name} key={key}>{country.name}</option>
                        )}
                        {/* <option value="Brazil">Brazil</option>
                        <option value="Chile">Chile</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Bolivia">Bolivia</option> */}
                    </select>
                    <button type='submit'>Create account!</button>
                </form>
                <p>You can also sign up with:</p>
                <div className='socialButtonsContainer'>
                    <FacebookSignUp />
                    <GoogleSignUp />
                </div>
                <p>Already have an account? <LinkRouter to="/login">Log in</LinkRouter></p>
            </div>
        </div>
  )
}

const mapStateToProps = (state) => {
    return {
        message: state.userReducer.message,
    }
}
const mapDispatchToProps = {
    userRegistration: userActions.userRegistration,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
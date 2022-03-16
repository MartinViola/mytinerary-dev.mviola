import React, {useEffect} from 'react'
import '../styles/SignUp.css';
import {Link as LinkRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import userActions from '../redux/actions/userActions';
// import axios from "axios";


function SignUp(props) {

    // const options = {
    //     method: 'GET',
    //     url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries',
    //     headers: {
    //       'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
    //       'x-rapidapi-key': '075ec25752msh18d586064d6d348p104d6djsnd05e1d8a1839'
    //     }
    //   };

    // const response = {}

    // axios.request(options).then(function (response) {
    //     console.log(response.data);
    // }).catch(function (error) {
    //     console.error(error);
    // });

    const handleSubmit = (event) => {
        event.preventDefault()
        const newUserData={
            userFirstname: event.target[0].value,
            userLastname: event.target[1].value,
            userEmail: event.target[2].value,
            userPassword: event.target[3].value,
            userPhotoURL: event.target[4].value,
            userCountry: event.target[5].value,
            from: "registrationForm"
        }
        props.userRegistration(newUserData)
    }

    useEffect(()=>{
        console.log(props.message)
    },[props.message])

    return (
        <div className='signupContainer'>
            <div className="signupContenContainer">
                <h2>Registration form:</h2>
                <form className="signupFormContainer" onSubmit={handleSubmit}>
                    <input type="text" name="userFirstName" placeholder='First name'></input>
                    <input type="text" name="userLastName" placeholder='Last name'></input>
                    <input type="email" name="userEmail" placeholder='Email address'></input>
                    <input type="password" name="userPassword" placeholder='Create password'></input>
                    <input type="url" name="userPhotoURL" placeholder='Photo URL (ex: http://ex.com/img.jpg)'></input>
                    <select name="userCountry">
                        <option value="">Nationality, please select an option</option>
                        {/* {response.data.map(value=>
                        <option value={value.name}>{value.name}</option>
                        )} */}
                        <option value="Brazil">Brazil</option>
                        <option value="Chile">Chile</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Bolivia">Bolivia</option>
                    </select>
                    <button type='submit'>Create account!</button>
                </form>
                <p>Already have an account? <LinkRouter to="/login">Log in</LinkRouter></p>
            </div>
        </div>
  )
}

const mapDispatchToProps = {
    userRegistration: userActions.userRegistration,
}

export default connect(null, mapDispatchToProps)(SignUp)
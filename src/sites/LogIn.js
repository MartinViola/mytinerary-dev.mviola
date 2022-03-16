import React from 'react'
import '../styles/LogIn.css';
import {Link as LinkRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import userActions from '../redux/actions/userActions';


function LogIn(props) {

  const handleSubmit = (event) => {
    event.preventDefault()
    const loggedUserData={
        userEmail: event.target[0].value,
        userPassword: event.target[1].value,
        from: "logInForm"
    }
    props.userLogIn(loggedUserData)
  }

  return (
    <div className='logInContainer'>
      <div className="logInContenContainer">
        <h2>Log in:</h2>
        <form className="logInFormContainer" onSubmit={handleSubmit}>
            <input type="email" name="userEmail" placeholder='Email address'></input>
            <input type="password" name="userPassword" placeholder='Password'></input>
            <button type='submit'>Log in</button>
        </form>
        <p>Don't have an account? <LinkRouter to="/signup">Sign up</LinkRouter></p>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  userLogIn: userActions.userLogIn,
}

export default connect(null, mapDispatchToProps)(LogIn)
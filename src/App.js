import React, {useEffect} from 'react';
import './styles/App.css';
import MenuAppBar from './components/Appbar';
import Main from './sites/Main';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import userActions from './redux/actions/userActions';
import CitiesCard from './sites/Cities';
import City from './sites/City';
import CRUD from './sites/CRUD';
import SignUp from './sites/SignUp'
import LogIn from './sites/LogIn'
import UserProfile from './sites/UserProfile'
// import Container from './sites/container'
import Snack from './components/snackbar'

function App(props) {

  useEffect(()=>{
    if(localStorage.getItem('token')!==null){
      const token = localStorage.getItem("token")
      props.verifyToken(token)
    }
  },[])

  return (
    <>
    <BrowserRouter>
      <MenuAppBar />
      {/* <Container /> */}
      <Routes>
        <Route path="/home" element={<Main />}/>
        <Route path="/cities"  element={<CitiesCard />}/>
        <Route path="*"  element={<Main />}/> 
        <Route path="/city/:_id" element={<City />}/>
        <Route path="/CRUD" element={<CRUD />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<LogIn />}/>
        <Route path="/userprofile" element={<UserProfile />}/>
      </Routes>
      <Snack />
      <Footer />
    </BrowserRouter>
    </>
  );
}

const mapDispatchToProps = {
  verifyToken: userActions.verifyToken,
}

export default connect(null, mapDispatchToProps)(App);

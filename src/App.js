import React from 'react';
import './styles/App.css';
import MenuAppBar from './components/Appbar';
import Main from './sites/Main';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CitiesCard from './sites/Cities';
import City from './sites/City';
import CRUD from './sites/CRUD';
import SignUp from './sites/SignUp'
import LogIn from './sites/LogIn'
import UserProfile from './sites/UserProfile'
// import Container from './sites/container'
import Snack from './components/snackbar'

function App() {
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

export default App;

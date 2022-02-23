import './styles/App.css';
import MenuAppBar from './components/Appbar';
import Main from './sites/Main';
import Footer from './components/Footer';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CitiesCard from './sites/Cities';
import City from './sites/City';

function App() {
  return (
    <>
    <BrowserRouter>
      <MenuAppBar />
      <Routes>
        <Route path="/home" element={<Main />}/>
        <Route path="/cities"  element={<CitiesCard />}/>
        <Route path="*"  element={<Main />}/> 
        <Route path="/city/:id" element={<City />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;

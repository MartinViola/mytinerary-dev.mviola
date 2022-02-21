import './App.css';
import MenuAppBar from './components/Appbar';
import Main from './components/Main';
import Footer from './components/Footer';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ActionAreaCard from './components/Card';

function App() {
  return (
    <>
    <BrowserRouter>
      <MenuAppBar />
      <Routes>
        <Route path="/home" element={<Main />}/>
        <Route path="/cities"  element={<ActionAreaCard />}/>
        <Route path="*"  element={<Main />}/> 
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;

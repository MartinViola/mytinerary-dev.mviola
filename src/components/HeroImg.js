import React from 'react'
import './HeroImg.css'
import Button from '@mui/material/Button';
import Hero from '../img/Hero.jpg';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import {Link as LinkRouter} from 'react-router-dom'; {/*Esto es para poder usar bootstrap sin pisar etiqeutas*/};



function HeroImg() {
  return(
  <div className='HeroContainer'>
      <img src={Hero} alt="Hero" />
      {/* <h1>MyTinerary</h1> */}
      <h2>Find your perfect trip, <br /> designed by insiders who <span>know</span><br /> and <span>love</span> their cities!</h2>
      <KeyboardDoubleArrowDownIcon className="ArrowDown" fontSize="large" color="primary"/>
      <LinkRouter to="/cities">
      <Button key="Cities">Cities</Button>
      </LinkRouter>
  </div>
  );
}

export default HeroImg
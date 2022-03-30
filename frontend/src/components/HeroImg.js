import React from 'react'
import '../styles/HeroImg.css'
import Button from '@mui/material/Button';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import {Link as LinkRouter} from 'react-router-dom'; {/*Esto es para poder usar bootstrap sin pisar etiqeutas*/};



function HeroImg() {
  // Hero={process.env.PUBLIC_URL+img/Hero.jpg }
  return(
  <div className='HeroContainer'>
      <img src={process.env.PUBLIC_URL+`/img/Hero.jpg`} alt="Hero" />
      {/* <h1>MyTinerary</h1> */}
      <h2 className="hMessage">Find your perfect trip, <br /> designed by insiders who <span>know</span><br /> and <span>love</span> their cities!</h2>
      <KeyboardDoubleArrowDownIcon className="ArrowDown" fontSize="large" color="primary"/>
      <LinkRouter to="/cities">
      <Button key="Cities">Cities</Button>
      </LinkRouter>
  </div>
  );
}

export default HeroImg
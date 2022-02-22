import React from 'react';
import '../styles/City.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Construction from '../img/under_construction.png';
import {Link as LinkRouter} from 'react-router-dom'; {/*Esto es para poder usar bootstrap sin pisar etiqeutas*/}



function City() {
  return (
    <div className="cityContainer">
        <h2>Natalia Natalia</h2>
        <img src={Construction} alt="Construction" />
        <p>Contenido contenido</p>
        <LinkRouter className="backCities" to="/cities">
            <ArrowBackIcon fontSize="large"/>
            <p>back to Cities</p>
        </LinkRouter>
    </div>
  )
}

export default City
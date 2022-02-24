import React, { useState } from 'react';
import '../styles/City.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Locations from '../components/Locations';
import { useParams } from 'react-router-dom';
import {Link as LinkRouter} from 'react-router-dom'; {/*Esto es para poder usar bootstrap sin pisar etiqeutas*/}



function City() {
  const {id} = useParams()
  const [citySite, setCity] = React.useState(Locations.filter(Location => Location.id == id))

  return (
    <div>
      {citySite.map(city => 
      <>
        <div className='cityContainer'>
          <img className="cityImage" src={process.env.PUBLIC_URL+`/img/${city.image}`} alt="Construction" />
          <div className='cityDetails'>
            <h2>{city.name}</h2>
            <p>More information coming soon!</p>
            <img src={process.env.PUBLIC_URL+`/img/under_construction.png`} alt="Construction" />
          </div>
        </div>
        <LinkRouter className="backCities" to="/cities">
            <ArrowBackIcon fontSize="medium"/>
            <p> back to Cities</p>
        </LinkRouter>
      </>
      )}
    </div>
  )
}
export default City
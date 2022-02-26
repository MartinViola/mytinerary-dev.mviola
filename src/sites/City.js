import React, { useState, useEffect } from 'react';
import '../styles/City.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams } from 'react-router-dom';
import {Link as LinkRouter} from 'react-router-dom';
import { obtainLocations } from '../components/apicalls';

function City() {
  const {_id} = useParams()
  const [citySite, setCity] = useState([])   

  useEffect(()=>{
  obtainLocations()
  .then(response=>setCity(response.data.response.locations.filter(Location => Location._id == _id)))
  },[])

  return (
    <div>
      {citySite.map(city => 
      <>
        <div className='cityContainer'>
          <img className="cityImage" src={process.env.PUBLIC_URL+`/img/${city.image}`} alt="Construction" />
          <div className='cityDetails'>
            <h2>{city.name}</h2>
            <h3>{city.country}</h3>
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
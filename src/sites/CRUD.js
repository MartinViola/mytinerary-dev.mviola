import React, { useState, useEffect } from 'react';
import '../styles/CRUD.css';
import {Link as LinkRouter} from 'react-router-dom';
import { obtainLocations, uploadLocations, deleteLocations } from '../components/apicalls';
import { AirlineSeatReclineExtraOutlined, AirlineSeatReclineNormalRounded, FormatColorReset } from '@mui/icons-material';



function CRUD() {
    const [apidata, setApiData]=useState([])
    const [reload, setReload] = useState(false)

    function deleteCity(id){
        deleteLocations(id)
        setReload(!reload)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget)
        console.log(data)
        var dataInput ={
            name: data.get('city'),
            country: data.get('country'),
            image: data.get('image'),
        };
        uploadLocations(dataInput)
        setReload(!reload)
    }

    useEffect(()=>{
        obtainLocations()
        .then(response=>setApiData(response.data.response.locations))
    },[reload])


  return (
    <div>
        <div>
            {apidata?.map(Location =>
            <ul>
                <li>{Location.name}, {Location.country}, {Location.image} <button onClick={()=>deleteCity(Location._id)}>DELETE</button>
                </li>
            </ul>
            )}
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <label for="city">City:</label>
                <input id="city"type="text"></input>
                <label for="country"> Country:</label>
                <input id="country"type="text"></input>
                <label for="image">Image name @ PUBLIC with extension (ex: ".jpeg"):</label>
                <input id="image"type="text"></input>
                <input id="btnsubmit" type="submit" />
            </form>
        </div>
    </div>
  )
}

export default CRUD
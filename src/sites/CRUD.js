import React, { useState, useEffect } from 'react';
import '../styles/CRUD.css';
import {Link as LinkRouter} from 'react-router-dom';
import { obtainLocations, uploadLocations, deleteLocations, modifyLocation } from '../components/apicalls';
import { AirlineSeatReclineExtraOutlined, AirlineSeatReclineNormalRounded, FormatColorReset } from '@mui/icons-material';



function CRUD() {
    const [apidata, setApiData]=useState([])
    const [reload, setReload] = useState(false)
    const [modId, setModId] = useState()

    function deleteCity(id){
        deleteLocations(id)
        setReload(!reload)
    }

    const modifyDB = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget)
        var dataInput ={
            name: 'Berlin',
            country: 'Germany',
            image: 'berlin.jpeg',
        };
        // var dataInput ={
        //     name: data.get('city'),
        //     country: data.get('country'),
        //     image: data.get('image'),
        // };
        modifyLocation(modId, dataInput)
        setReload(!reload)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget)
        // Mediente dato fijo, se agrega item a DB
        var dataInput ={
            name: 'Berlin',
            country: 'Germany',
            image: 'berlin.webp',
        };
        // var dataInput ={
        //     name: data.get('city'),
        //     country: data.get('country'),
        //     image: data.get('image'),
        // };
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
            <h2>Create location (add item to DB)</h2>
            <form onSubmit={handleSubmit}>
                <label for="city">City:</label>
                <input id="city" type="text"></input>
                <label for="country"> Country:</label>
                <input id="country" type="text"></input>
                <label for="image">Image name @ PUBLIC with extension (ex: ".jpeg"):</label>
                <input id="image" type="text"></input>
                <input id="btnsubmit" type="submit" />
            </form>
        </div>
        <div>
            <h2>Remove location (delete item from DB)</h2>
            {apidata?.map(Location =>
            <ul>
                <li>{Location.name}, {Location.country}, {Location.image} <button onClick={()=>deleteCity(Location._id)}>DELETE</button><button onClick={()=>setModId(Location._id)}>MODIFY</button>
                </li>

            </ul>
            )}
        </div>
        <div>
            <h2>Update location (modify item in DB)</h2>
            <form onSubmit={modifyDB}>
                <label for="city">City:</label>
                <input id="city" type="text"></input>
                <label for="country"> Country:</label>
                <input id="country" type="text"></input>
                <label for="image">Image name @ PUBLIC with extension (ex: ".jpeg"):</label>
                <input id="image" type="text"></input>
                <input id="btnsubmit" type="submit" />
            </form>
        </div>
    </div>
  )
}

export default CRUD
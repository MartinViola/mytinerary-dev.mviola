import * as React from 'react';
import {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../styles/Cities.css'
import { CardActionArea } from '@mui/material';
import { obtainLocations } from '../components/apicalls';
import {Link as LinkRouter} from 'react-router-dom'; {/*Esto es para poder usar bootstrap sin pisar etiqeutas*/}


export default function CitiesCard() {
  const [input, setInput]=useState("")
  const [apidata, setApiData]=useState([])
  const [apidata2, setApiData2]=useState([]) //Lo necesito como AUXILIAR!
  useEffect(()=>{
    obtainLocations()
    .then(response=>{
      setApiData(response.data.response.locations);
      setApiData2(response.data.response.locations);
    })
  },[])

  const handleChange = event => {
    setInput(event.target.value);
    filtering(event.target.value);
  }

  const filtering = (inputSearch) => {
    var searchResult=apidata2.filter((element)=>{
      if(element.name.toString().toLowerCase().includes(inputSearch.toLowerCase())){
        return element;
      }
    });
    setApiData(searchResult);
  }
  
  return (
    <div>
      <div className="hCities">
        <h1>Popular MyTineraries:</h1>
        <input placeholder="Find your next destination..." onChange={handleChange}></input>
      </div>
      <div className="CardsContainer">
        {apidata.map(Location => 
        <div className="Card">
          <LinkRouter to={`/city/${Location._id}`}>
            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="300"
                image={process.env.PUBLIC_URL+`/img/${Location.image}`}
                alt="Image"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {Location.name}
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
          </LinkRouter>
        </div>
        )}
      </div>
    </div>
  );
}

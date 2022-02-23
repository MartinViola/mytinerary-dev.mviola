import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../styles/Cities.css'
import { CardActionArea } from '@mui/material';
import Locations from '../components/Locations';
import {Link as LinkRouter} from 'react-router-dom'; {/*Esto es para poder usar bootstrap sin pisar etiqeutas*/}

export default function CitiesCard() {
  const [input,setInput]=useState()
  return (
    <div>
      <div className="hCities">
        <h1>Popular MyTineraries:</h1>
        <input placeholder="Find your next destination..." onKeyUp={(event)=>setInput(event.target.value)}></input>
      </div>
      <div className="CardsContainer">
        {Locations.map(Location => 
        <div className="Card">
          <LinkRouter to={`/city/${Location.id}`}>
            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="300"
                image={Location.image}
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

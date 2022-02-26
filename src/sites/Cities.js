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

  // function notFound() {
  //   var notFound = document.getElementById("notFound");
  //   notFound.innerHTML = "Unfortunatelly the city you're after could not be found within our recomendations";
  // }

  const filtering = (inputSearch) => {
    var searchResult=apidata2.filter((element)=>{
      if(element.name.toString().toLowerCase().startsWith(inputSearch.toLowerCase())){
        return (
          element
        )
      }
      // else{
      //   return(
      //     notFound()
      //   );
      // }
    });
    setApiData(searchResult);
  }
  
  return (
    <div>
      <div className="hCities">
        <h1>Popular MyTineraries:</h1>
        <input placeholder="Find your next destination..." onChange={handleChange}></input>
        <h2 id="notFound"></h2>
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

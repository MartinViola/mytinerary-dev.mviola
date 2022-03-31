import * as React from 'react';
import {useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../styles/Cities.css'
import { CardActionArea } from '@mui/material';
import {Link as LinkRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import citiesActions from '../redux/actions/citiesActions';

function CitiesCard(props) {
  
  useEffect(()=>{
    props.fetchLocations()
  },[]);

  const filteringLocations = (event) => {
    props.filterLocations(props.cities, event.target.value)
  };
  
  return (
    <div className="containerCitiesSite">
      <div className="hCities">
        <h1>Popular MyTineraries:</h1>
        <input placeholder="Find your next destination..." onChange={filteringLocations}></input>
      </div>
      <div className="CardsContainer">
        {/*INICIO ternario idenfificando item no encontrado*/} 
        {props.filterCities.length > 0 ? props.filterCities.map(Location =>   
        <div key={Location._id} className="Card">
          <LinkRouter to={`/city/${Location._id}`}>
            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="300"
                image={process.env.PUBLIC_URL+`/img/${Location.image}`}
                alt="Image"
                />
                <CardContent key={Location._id}>
                <Typography gutterBottom variant="h5" component="div">
                    {Location.name}
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
          </LinkRouter>
        </div>
        ) : <h2>Whoops!...Unfortunatelly the city you're after could not be found within our recomendations</h2> }  
        {/*fin ternario idenfificando item no encontrado*/} 
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  fetchLocations: citiesActions.fetchLocations,
  filterLocations: citiesActions.filterLocations,

}
const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities,
    filterCities : state.citiesReducer.filterCities
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CitiesCard)
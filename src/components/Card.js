import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Locations from './Locations';
import { DataObjectSharp } from '@mui/icons-material';

export default function ActionAreaCard() {
    console.log(Locations);
  return (
    <div className="CardsContainer">
        {/* <h1>Popular MyTineraries:</h1> */}
        {Locations.map(Location => 
        <div className="Card">
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
        </div>
    )}
    </div>
  );
}

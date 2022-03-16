import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import '../styles/FooterMenu.css';
import {Link as LinkRouter} from 'react-router-dom'; {/*Esto es para poder usar bootstrap sin pisar etiqeutas*/}


const buttons = [
  <LinkRouter key={1} to="/home">
  <Button key="Home">Home</Button>
  </LinkRouter>
  ,
  <LinkRouter key={2} to="/cities">
  <Button key="Cities">Cities</Button>
  </LinkRouter>
  ,
  <LinkRouter key={3} to="/userprofile">
  <Button key="Profile">My Profile</Button>
  </LinkRouter>
  ,
];

export default function FooterMenu() {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}

import * as React from 'react';
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import '../styles/Appbar.css';
import {Link as LinkRouter} from 'react-router-dom'; {/*Esto es para poder usar bootstrap sin pisar etiqeutas*/}

function MenuAppBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleOnClick() {
		props.userLogOut(props.user.userEmail)
    // handleClose()
	}

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="classAppBar">
        <Toolbar>
          <div className="container">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <div className="overlay">
              <LinkRouter to="/home">
                <Button className="text" key="/">Home</Button>
              </LinkRouter>
              <LinkRouter to="/cities">
                <Button className="text" key="/cities">Cities</Button>
              </LinkRouter>
              <LinkRouter to="/userprofile">
                <Button className="text" key="algo2">Profile</Button>
              </LinkRouter>
            </div>
          </div>
          <Typography className="HeaderTitle" variant="h6" component="div" sx={{ flexGrow: 1 }}>MyTinerary</Typography>
          {props.user ?
          <>
            {(
              <div>
                <IconButton
                  className="buttonUserContainer"
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  {/* <img className="userLoggedIn" src={process.env.PUBLIC_URL+`/img/maria_casillas.jpg`} alt="author" /> */}
                  <img className="userLoggedIn" src={props.user.userPhotoURL} alt="author" />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <LinkRouter to="/userprofile">
                    <MenuItem onClick={handleClose}>My profile</MenuItem>
                  </LinkRouter>
                  <MenuItem onClick={handleOnClick}>Log out</MenuItem>
                </Menu>
              </div>
            )}
          </> 
          : 
          <>
            {(
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <LinkRouter to="/signup">
                    <MenuItem onClick={handleClose}>Sign up</MenuItem>
                  </LinkRouter>
                  <LinkRouter to="/login">
                    <MenuItem onClick={handleClose}>Log in</MenuItem>
                  </LinkRouter>
                </Menu>
              </div>
            )}
          </> 
        }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const mapStateToProps = (state) => {
	return {
		user: state.userReducer.user,
	}
}
const mapDispatchToProps = {
	userLogOut: userActions.userLogOut,

}

export default connect(mapStateToProps, mapDispatchToProps)(MenuAppBar)

// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import { makeStyles } from '@mui/styles';
// import { styled } from '@mui/system';


import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions';
import {useDispatch} from 'react-redux';


function Snack(props) {
  const dispatch = useDispatch()

  const useStyles = makeStyles(theme => ({
    icon: {
      marginLeft: '15px'
    }
  }));

  
  const MySnackbar = styled(Snackbar)({
    backgroundColor: props.snackbar.success ? 'green' : 'red',
    color: '#fff',
    borderRadius: '4px',
    padding: '6px 16px',
    fontWeight: '400',
    lineHeight: '1.43',
    letterSpacing: '0.01071em',
  });
  
  const classes = useStyles();
  
  const handleClose = () => {
    dispatch({
      type: 'message',
      payload: {
        user: null, 
        snackbar: {
          view: false, 
          message: '',
          success: false}
        }
      });
    };
    
    return (
    <div>
      {props.snackbar.view === true && (
        <MySnackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={props.snackbar.view}
          onClose={handleClose}
          autoHideDuration={5000}
        >
          <>
            {(typeof props.snackbar.message) === "string" ?
              (<p>{props.snackbar.message}</p>) :
              <ul>
                {props.snackbar.message.map(message =>
                  <li>{message.message}</li>
                )}
              </ul>
            }
            <IconButton className={classes.icon} size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        </MySnackbar>
      )}

    </div>
  );
}



const mapStateToProps = (state) => {
  return {
      snackbar: state.userReducer.snackbar,
      
  }
}

export default connect(mapStateToProps, null)(Snack);
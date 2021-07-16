import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
   
  },
  toast:{
    marginTop:35
  }
}));

export default function ToastNotification(props) {
  const classes = useStyles();
  const {message,handleOpen,handleClose,open} = props

  return (
    <div className={classes.root}>
      <Snackbar open={message.action} autoHideDuration={6000} onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      className={classes.toast}
      >
        <Alert onClose={handleClose} severity={message.status}>
            {message.content}
        </Alert>
      </Snackbar>
 
    </div>
  );
}
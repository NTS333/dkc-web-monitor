import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SNavBar from '../SNavBar';
import Kho from '../Kho';
import {Switch,Route,useRouteMatch,Link, Redirect} from 'react-router-dom'
import MayNghien from '../MayNghien';
import MayEpVien from '../MayEpVien';
import GiuBui from '../GiuBui';
import LoDot from '../LoDot';
import LoSay from '../LoSay';
import { useHistory } from 'react-router';
import PTEV from '../PTEV';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  status:{
    marginRight: theme.spacing(2),
  }
}));

export default function SAppBar() {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const routeMatch = useRouteMatch();
  const toggle = () => {
    setOpen(!open);
  };
  const toggleDrawer = useCallback(
    (open) => (event) => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setOpen(open);
    },
    [],
  )
  const handleLogout = ()=>{
    history.replace('/login')
  }
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggle}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            DKC NGHỆ AN
          </Typography>
          <Typography id='status' className={classes.status}>Disconnected</Typography>
          <Button style={{background:'#e9d8a6',color:'black',width:90,margin:10,marginRight:0}} variant='text' onClick={handleLogout}
          ><b>Log out</b></Button>
        </Toolbar>
      </AppBar>
      <SNavBar open={open} toggle={toggle}></SNavBar>
      <Switch>
          <Route path={routeMatch.path+'/maynghien'}>
              <MayNghien></MayNghien>
          </Route>
          <Route path={routeMatch.path+'/kho'}>
              <Kho></Kho>
          </Route>
          <Route path={routeMatch.path+'/giubui'}>
              <GiuBui></GiuBui>
          </Route>
          <Route path={routeMatch.path+'/lodot'}>
              <LoDot></LoDot>
          </Route>
          <Route path={routeMatch.path+'/losay'}>
              <LoSay></LoSay>
          </Route>
          <Route path={routeMatch.path+'/phutroepvien'}>
              <PTEV></PTEV>
          </Route>
          <Route path={routeMatch.path+'/epvien'}>
              <MayEpVien></MayEpVien>
          </Route>
          <Redirect to={routeMatch.path+'/maynghien'}></Redirect>
      </Switch>
     
      {/* <Link to={routeMatch.path+'/khonghientho'}>
        <KhoNghienTho></KhoNghienTho>
      </Link> */}
    </div>
  );
}

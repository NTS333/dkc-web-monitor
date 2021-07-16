import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Box, Typography } from '@material-ui/core'
import PropTypes from 'prop-types';
import { green, orange } from '@material-ui/core/colors';
import { useParams, useRouteMatch, useHistory } from 'react-router';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  header: {
    background: green[300]
  },
  listItem: {
    '&:hover': {
      background: orange[100],
      cursor: 'pointer',
      // pointerEvents: 'all !important'
    }
  }
});

function SNavBar(props) {
  const classes = useStyles();
  const { open, toggle } = props;
  // const [open, setOpen] = useState(false);
  const param = useParams();
  const routeMatch = useRouteMatch();
  const history = useHistory();
  console.log(param)
  console.log(routeMatch)
  // const toggle = () => {
  //   setOpen(!open);
  // };

  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor='left'
          open={open}
          onClose={toggle}
          onOpen={toggle}

        >
          <div className={classes.list}>
            <Box textAlign='center' p={2} className={classes.header}>
              <Typography variant='h4' >Khu vực</Typography>
            </Box>
            <Divider></Divider>
            <List>
              <ListItem className={classes.listItem}
                onClick={() => {
                  history.replace(`${routeMatch.path}/maynghien`);
                  toggle();
                }}
              >
                <ListItemText>
                  MÁY NGHIỀN
                </ListItemText>
              </ListItem>

              <ListItem className={classes.listItem}
                onClick={() => {
                  history.replace(`${routeMatch.path}/kho`);
                  toggle();
                }}
              >
                <ListItemText >
                  KHO
                </ListItemText>
              </ListItem>

              <Divider></Divider>

              <ListItem className={classes.listItem}
                onClick={() => {
                  history.replace(`${routeMatch.path}/giubui`);
                  toggle();
                }}
              >
                <ListItemText>
                  GIŨ BỤI TRUNG TÂM
                </ListItemText>
              </ListItem>

              <Divider></Divider>

              <ListItem className={classes.listItem}
              onClick={() => {
                history.replace(`${routeMatch.path}/lodot`);
                toggle();
              }}
              >
                <ListItemText>
                  LÒ ĐỐT
                </ListItemText>
              </ListItem>
              <Divider></Divider>

              <ListItem className={classes.listItem}
               onClick={() => {
                history.replace(`${routeMatch.path}/losay`);
                toggle();
              }}
              >
                <ListItemText>
                  LÒ SẤY
                </ListItemText>
              </ListItem>

              <Divider></Divider>

              <ListItem className={classes.listItem}>
                <ListItemText>
                  PHỤ TRỢ ÉP VIÊN
                </ListItemText>
              </ListItem>

              <Divider></Divider>

              <ListItem className={classes.listItem}
                onClick={() => {
                  history.replace(`${routeMatch.path}/epvien`);
                  toggle();
                }}
              >
                <ListItemText>
                  ÉP VIÊN
                </ListItemText>
              </ListItem>
            </List>
          </div>
        </SwipeableDrawer>
      </React.Fragment>
      )
    </div>
  );
}
SNavBar.propTypes = {
  toggleDrawer: PropTypes.func
}
export default React.memo(SNavBar)
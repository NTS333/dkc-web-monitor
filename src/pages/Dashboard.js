import React, { useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { Switch,Route,Link } from 'react-router-dom';
import SAppBar from '../components/SAppBar'
import SNavBar from '../components/SNavBar'
import SSwitch from '../components/SSwitch'


const Dashboard = () => {
    const history = useHistory();
    
    useEffect(() => {
        if( localStorage.getItem('token')){
                history.push('/login')
        }
        // if(true) {
        //     window.history.pushState(null, null, window.location.href);
        //     window.onpopstate = function(event) {
        //       window.history.go(1);
        //     };
        //   }
    }, [])
    
    return (
        <>
           <SAppBar></SAppBar>
       

           {/* <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch>
           <SSwitch tagName='PL_BT'></SSwitch>
           <SSwitch tagName='PL_QH'></SSwitch>
           <SSwitch tagName='PL_BTT'></SSwitch>
           <SSwitch tagName='Alarm_HT'></SSwitch> */}
          
        </>
    )
}

export default Dashboard

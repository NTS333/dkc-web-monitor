import React from 'react'
import { Paper, Card, Avatar, CardHeader, IconButton, CardContent, CardMedia, Typography, Grid,Box } from '@material-ui/core'
import { MoreVert as MoreVertIcon } from '@material-ui/icons'
import SSwitch from '../SSwitch'
import { makeStyles } from '@material-ui/core/styles';
import { blue, green } from '@material-ui/core/colors'
import { width } from '@material-ui/system';
const useStyles = makeStyles({
    card: {
        background: '#dcd7d7',
        maxWidth: 600,
        minWidth:300,
        width:500
    },
    title: {
        background: '#5f89d6',
        padding: 5,
        marginTop: 0,
        display: 'flex',
        justifyContent: 'center',
        color:'white',
        fontWeight:'bold'
    },
    gridItem:{
        display:'flex',
        justifyContent:'center',
       
    }
});

function PTEV() {
    const classes = useStyles();
    const prefix = 'RemoteStation1/PLC_Control/PTEV'
    return (
        <div style={{ position: 'relative', margin: '0 auto', marginTop: 50,marginLeff:20,display:'flex',justifySelf:'center' }}>
            
            <Grid
              container
              spacing={2}
              direction="row"
              justify="space-between"
              alignItems="center"
              alignContent="center"
              wrap="wrap"
            >
               <Grid
                    item
                    xs={12}
                    md={12}
                    xl={12}
                    className={classes.gridItem}
                >
                    <Card className={classes.card}>
                        <CardContent >
                            <Typography variant='h6' className={classes.title}>LÒ SẤY</Typography>
                            <SSwitch tagName='BTCLPT1' prefix={prefix} caption='BĂNG TẢI CẤP LIỆU PT1'></SSwitch>
                            <SSwitch tagName='BTRLPT3' prefix={prefix} caption='BĂNG TẢI RA LIỆU PT3'  ></SSwitch>
                            <SSwitch tagName='BBTPT4' prefix={prefix} caption='BĂNG TẢI TỪ PT4'  ></SSwitch>
                            <SSwitch tagName='BTTPPT11' prefix={prefix} caption='BĂNG TẢI THÀNH PHẨM PT11'  ></SSwitch>
                            <SSwitch tagName='PumpPT5' prefix={prefix} caption='BƠM PT5'  ></SSwitch>
                            <SSwitch tagName='BTThapPt6' prefix={prefix} caption='BĂNG TẢI THÁP PT6'  ></SSwitch>
                            <SSwitch tagName='AirThapPt7' prefix={prefix} caption='AIRLOCK THÁP PT7'  ></SSwitch>
                            <SSwitch tagName='SanRungPT8' prefix={prefix} caption='SÀN RUNG PT8'  ></SSwitch>
                            <SSwitch tagName='QHPT9' prefix={prefix} caption='QUẠT HÚT PT9'  ></SSwitch>
                            <SSwitch tagName='VTLLPT10' prefix={prefix} caption='VÍT TẢI LẤY LIỆU PT10'  ></SSwitch>
                            <SSwitch tagName='PumpPT2' prefix={prefix} caption='BƠM PT2'  ></SSwitch>
                            <SSwitch tagName='VTHA' prefix={prefix} caption='VÍT TẢI HÚT ẨM'  ></SSwitch>
                            <SSwitch tagName='AirlockHA' prefix={prefix} caption='AIRLOCK HÚT ẨM'  ></SSwitch>
                            <SSwitch tagName='AirlockLL' prefix={prefix} caption='AIRLOCK LẤY LIỆU'  ></SSwitch>
                            <SSwitch tagName='QHHA' prefix={prefix} caption='QUẠT HÚT HÚT ẨM'  ></SSwitch>
                        </CardContent>
                    </Card>
                </Grid>
                
            </Grid>
            
        </div>
    )
}


export default PTEV

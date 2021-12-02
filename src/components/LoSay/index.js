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

function LoSay() {
    const classes = useStyles();
    const prefix = 'RemoteStation1/PLC_Control/LoSay'
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
                            <SSwitch tagName='QHMain' prefix={prefix} caption='QUẠT HÚT CHÍNH'></SSwitch>
                            <SSwitch tagName='QHThoilo' prefix={prefix} caption='QUẠT THỔI LÒ'  ></SSwitch>
                            <SSwitch tagName='QuayBon' prefix={prefix} caption='QUAY BỒN'  ></SSwitch>
                            <SSwitch tagName='AirlockRL' prefix={prefix} caption='AIRLOCK RA LIỆU'  ></SSwitch>
                            <SSwitch tagName='BT' prefix={prefix} caption='BĂNG TẢI'  ></SSwitch>
                            <SSwitch tagName='BT1' prefix={prefix} caption='BĂNG TẢI 1'  ></SSwitch>
                            <SSwitch tagName='BT2' prefix={prefix} caption='BĂNG TẢI 2'  ></SSwitch>
                            <SSwitch tagName='VTKSS' prefix={prefix} caption='VÍT TẢI KSS'  ></SSwitch>
                            <SSwitch tagName='GT' prefix={prefix} caption='GÀU TẢI'  ></SSwitch>
                            <SSwitch tagName='VTBin' prefix={prefix} caption='VÍT TẢI BIN'  ></SSwitch>
                            <SSwitch tagName='VTMain' prefix={prefix} caption='VÍT TẢI CHÍNH'  ></SSwitch>
                        </CardContent>
                    </Card>
                </Grid>
                
            </Grid>
            













        </div>
    )
}


export default LoSay

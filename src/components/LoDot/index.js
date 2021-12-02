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
        padding: 10,
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

function LoDot() {
    const classes = useStyles();
    const prefix = 'RemoteStation1/PLC_Control/LoDot'
    return (
        <div style={{ position: 'relative', margin: '0 auto', marginTop: 60,marginLeff:20,display:'flex',justifySelf:'center' }}>
            
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
                    md={6}
                    xl={6}
                    className={classes.gridItem}
                >
                    <Card className={classes.card}>
                        <CardContent >
                            <Typography variant='h6' className={classes.title}>LÒ ĐỐT 1</Typography>
                            <SSwitch tagName='QHMain' prefix={prefix + '1'} caption='QUẠT HÚT CHÍNH'></SSwitch>
                            <SSwitch tagName='QHUp' prefix={prefix + '1'} caption='QUẠT HÚT TRÊN'  ></SSwitch>
                            <SSwitch tagName='BTCL' prefix={prefix + '1'} caption='BĂNG TẢI CẤP LIỆU'  ></SSwitch>
                            <SSwitch tagName='VTVL' prefix={prefix + '1'} caption='VÍT TẢI VÀO LIỆU'  ></SSwitch>
                           
                        </CardContent>
                    </Card>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    xl={6}
                    className={classes.gridItem}
                >
                    <Card className={classes.card}>
                        <CardContent >
                            <Typography variant='h6' className={classes.title}>LÒ ĐỐT 2</Typography>
                            <SSwitch tagName='QHMain' prefix={prefix +'2'} caption='QUẠT HÚT CHÍNH'></SSwitch>
                            <SSwitch tagName='QHUp' prefix={prefix +'2'} caption='QUẠT HÚT TRÊN'  ></SSwitch>
                            <SSwitch tagName='BTCL' prefix={prefix +'2'} caption='BĂNG TẢI CẤP LIỆU'  ></SSwitch>
                            <SSwitch tagName='VTVL' prefix={prefix +'2'} caption='VÍT TẢI VÀO LIỆU'  ></SSwitch>
                        </CardContent>
                    </Card>
                </Grid>
               
            </Grid>
            
        </div>
    )
}


export default LoDot

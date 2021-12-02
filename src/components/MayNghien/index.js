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

function MayNghien() {
    const classes = useStyles();
    const prefix_ntho = 'RemoteStation1/PLC_Control/NghienTho';
    const prefix_ntinh= 'RemoteStation1/PLC_Control/NghienTinh';
    return (
        <div style={{ position: 'relative', margin: '0 auto', marginTop: 60,marginLeff:20,display:'flex',justifySelf:'center' }}>
            
            <Grid
              container
              spacing={3}
              direction="row"
              justify="space-around"
              alignItems="center"
              alignContent="center"
              wrap="wrap"
            >
               <Grid
                    item
                    xs={12}
                    md={3}
                    xl={3}
                    className={classes.gridItem}
                >
                    <Card className={classes.card}>
                        <CardContent >
                            <Typography variant='h6' className={classes.title}>MÁY NGHIỀN THÔ 1</Typography>
                            <SSwitch tagName='MayNghien' prefix={prefix_ntho + '1'} caption='MÁY NGHIỀN'></SSwitch>
                            <SSwitch tagName='BtCapLieu' prefix={prefix_ntho + '1'} caption='BĂNG TẢI CẤP LIỆU'></SSwitch>
                            <SSwitch tagName='QuatHut' prefix={prefix_ntho + '1'} caption='QUẠT HÚT'></SSwitch>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={3}
                    xl={3}
                    className={classes.gridItem}
                >
                    <Card className={classes.card}>
                        <CardContent >
                            <Typography variant='h6' className={classes.title}>MÁY NGHIỀN THÔ 2</Typography>
                            <SSwitch tagName='MayNghien' prefix={prefix_ntho + '2'} caption='MÁY NGHIỀN'></SSwitch>
                            <SSwitch tagName='BtCapLieu' prefix={prefix_ntho + '2'} caption='BĂNG TẢI CẤP LIỆU'></SSwitch>
                            <SSwitch tagName='QuatHut' prefix={prefix_ntho + '2'} caption='QUẠT HÚT'></SSwitch>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid
                    item
                   
                    xs={12}
                    md={3}
                    xl={3}
                    className={classes.gridItem}
                >
                    <Card className={classes.card}>
                        <CardContent >
                            <Typography variant='h6' className={classes.title}>MÁY NGHIỀN THÔ 3</Typography>
                            <SSwitch tagName='MayNghien' prefix={prefix_ntho + '3'} caption='MÁY NGHIỀN'></SSwitch>
                            <SSwitch tagName='BtCapLieu' prefix={prefix_ntho + '3'} caption='BĂNG TẢI CẤP LIỆU'></SSwitch>
                            <SSwitch tagName='QuatHut' prefix={prefix_ntho + '3'} caption='QUẠT HÚT'></SSwitch>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid
                    item
                   
                    xs={12}
                    md={3}
                    xl={3}
                    className={classes.gridItem}
                >
                    <Card className={classes.card}>
                        <CardContent >
                            <Typography variant='h6' className={classes.title}>MÁY NGHIỀN THÔ 4</Typography>
                            <SSwitch tagName='MayNghien' prefix={prefix_ntho + '4'} caption='MÁY NGHIỀN'></SSwitch>
                            <SSwitch tagName='BtCapLieu' prefix={prefix_ntho + '4'} caption='BĂNG TẢI CẤP LIỆU'></SSwitch>
                            <SSwitch tagName='QuatHut' prefix={prefix_ntho + '4'} caption='QUẠT HÚT'></SSwitch>
                        </CardContent>
                    </Card>
                </Grid>
                
                <Grid
                    item
                    xs={12}
                    md={6}
                    xl={6}
                    className={classes.gridItem}
                    style={{marginTop:10}}
                >
                    <Card className={classes.card}>
                        <CardContent >
                            <Typography variant='h6' className={classes.title}>MÁY NGHIỀN TINH 1</Typography>
                            <SSwitch tagName='MayNghien' prefix={prefix_ntinh + '1'} caption='MÁY NGHIỀN'></SSwitch>
                            <SSwitch tagName='VtCapLieu' prefix={prefix_ntinh + '1'} caption='VÍT TẢI CẤP LIỆU'></SSwitch>
                            <SSwitch tagName='QuatHut' prefix={prefix_ntinh + '1'} caption='QUẠT HÚT'></SSwitch>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid
                    item
                   
                    xs={12}
                    md={6}
                    xl={6}
                    className={classes.gridItem}
                    style={{marginTop:10}}
                >
                    <Card className={classes.card}>
                        <CardContent >
                            <Typography variant='h6' className={classes.title}>MÁY NGHIỀN TINH 2</Typography>
                            <SSwitch tagName='MayNghien' prefix={prefix_ntinh + '2'} caption='MÁY NGHIỀN'></SSwitch>
                            <SSwitch tagName='VtCapLieu' prefix={prefix_ntinh + '2'} caption='VÍT TẢI CẤP LIỆU'></SSwitch>
                            <SSwitch tagName='QuatHut' prefix={prefix_ntinh + '2'} caption='QUẠT HÚT'></SSwitch>
                            <SSwitch tagName='VTTG1' prefix={prefix_ntinh + '2'} caption='VÍT TẢI TRUNG GIAN 1'></SSwitch>
                            <SSwitch tagName='VTTG2' prefix={prefix_ntinh + '2'} caption='VÍT TẢI TRUNG GIAN 2'></SSwitch>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default MayNghien

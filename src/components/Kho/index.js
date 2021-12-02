import React from 'react'
import { Paper, Card, Avatar, CardHeader, IconButton, CardContent, CardMedia, Typography, Grid } from '@material-ui/core'
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
        justifyItems:'center',
        alignContent:'center'
    }
});

function Kho() {
    const classes = useStyles();
    const prefix = 'Local Station/Control/Device1'
    const prefix_khonghientho = 'RemoteStation1/PLC_Control/KhoNghienTho'
    const prefix_khosausay = 'RemoteStation1/PLC_Control/KhoSauSay'
    const prefix_khonghientinh = 'RemoteStation1/PLC_Control/KhoNghienTinh'
    return (
        <div style={{ position: 'relative', margin: '0 auto', marginTop: 60,marginLeff:20,display:'flex',justifySelf:'center' }}>
            
        <Grid
          container
          spacing={3}
          direction="row"
          justify="space-around"
          alignItems="flex-start"
          alignContent="center"
          wrap="wrap"
        >
           <Grid
                item
                xs={12}
                md={4}
                xl={4}
                
                className={classes.gridItem}
            >
                <Card className={classes.card}>
                    <CardContent >
                        <Typography variant='h6' className={classes.title}>KHO NGHIỀN THÔ</Typography>
                        <SSwitch tagName='PumpA1' prefix={prefix_khonghientho} caption='BƠM DẦU 1'></SSwitch>
                        <SSwitch tagName='PumpA2' prefix={prefix_khonghientho} caption='BƠM DẦU 2'></SSwitch>
                        <SSwitch tagName='RVFDA1' prefix={prefix_khonghientho} caption='CHẠY NGHỊCH VÍT TẢI CẤP LIỆU 1'></SSwitch>
                        <SSwitch tagName='FWFDA1' prefix={prefix_khonghientho} caption='CHẠY THUẬN VÍT TẢI CẤP LIỆU 1'></SSwitch>
                        <SSwitch tagName='RVFDA2' prefix={prefix_khonghientho} caption='CHẠY NGHỊCH VÍT TẢI CẤP LIỆU 2'></SSwitch>
                        <SSwitch tagName='FWFDA2' prefix={prefix_khonghientho} caption='CHẠY THUẬN VÍT TẢI CẤP LIỆU 2'></SSwitch>
                        <SSwitch tagName='ScrewA' prefix={prefix_khonghientho} caption='VÍT TẢI RA LIỆU'></SSwitch>

                    </CardContent>
                </Card>
            </Grid>
            <Grid
                item
               
                xs={12}
                md={4}
                xl={4}
                className={classes.gridItem}
            >
                <Card className={classes.card}>
                    <CardContent >
                        <Typography variant='h6' className={classes.title}>KHO SAY SẤY</Typography>
                        <SSwitch tagName='PumpB1' prefix={prefix_khosausay} caption='BƠM DẦU 1'></SSwitch>
                        <SSwitch tagName='PumpB2' prefix={prefix_khosausay} caption='BƠM DẦU 2'></SSwitch>
                        <SSwitch tagName='RVFDB1' prefix={prefix_khosausay} caption='CHẠY NGHỊCH VÍT TẢI CẤP LIỆU 1'></SSwitch>
                        <SSwitch tagName='FWFDB1' prefix={prefix_khosausay} caption='CHẠY THUẬN VÍT TẢI CẤP LIỆU 1'></SSwitch>
                        <SSwitch tagName='RVFDB2' prefix={prefix_khosausay} caption='CHẠY NGHỊCH VÍT TẢI CẤP LIỆU 2'></SSwitch>
                        <SSwitch tagName='FWFDB2' prefix={prefix_khosausay} caption='CHẠY THUẬN VÍT TẢI CẤP LIỆU 2'></SSwitch>
                        <SSwitch tagName='ScrewB' prefix={prefix_khosausay} caption='VÍT TẢI RA LIỆU'></SSwitch>

                    </CardContent>
                </Card>
            </Grid>
            <Grid
                item
                xs={12}
                md={4}
                xl={4}
                className={classes.gridItem}
            >
                <Card className={classes.card}>
                    <CardContent >
                        <Typography variant='h6' className={classes.title}>KHO NGHIỀN TINH</Typography>
                        <SSwitch tagName='PumpC1' prefix={prefix_khonghientinh} caption='BƠM DẦU 1'></SSwitch>
                        <SSwitch tagName='RVFDC1' prefix={prefix_khonghientinh} caption='CHẠY NGHỊCH VÍT TẢI CẤP LIỆU 1'></SSwitch>
                        <SSwitch tagName='FWFDC1' prefix={prefix_khonghientinh} caption='CHẠY THUẬN VÍT TẢI CẤP LIỆU 1'></SSwitch>
                        <SSwitch tagName='RVFDC2' prefix={prefix_khonghientinh} caption='CHẠY NGHỊCH VÍT TẢI CẤP LIỆU 2'></SSwitch>
                        <SSwitch tagName='FWFDC2' prefix={prefix_khonghientinh} caption='CHẠY THUẬN VÍT TẢI CẤP LIỆU 2'></SSwitch>
                        <SSwitch tagName='ScrewC' prefix={prefix_khonghientinh} caption='VÍT TẢI RA LIỆU'></SSwitch>

                    </CardContent>
                </Card>
            </Grid>
            
            
        </Grid>
        
    </div>
    )
}

export default Kho

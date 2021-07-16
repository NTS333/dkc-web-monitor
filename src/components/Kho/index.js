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
                        <SSwitch tagName='Tag1' prefix={prefix} caption='BƠM DẦU 1'></SSwitch>
                        <SSwitch tagName='Tag1' prefix={prefix} caption='BƠM DẦU 2'></SSwitch>
                        <SSwitch tagName='Tag1' prefix={prefix} caption='CHẠY THUẬN VÍT TẢI CẤP LIỆU 1'></SSwitch>
                        <SSwitch tagName='Tag1' prefix={prefix} caption='CHẠY NGHỊCH VÍT TẢI CẤP LIỆU 1'></SSwitch>
                        <SSwitch tagName='Tag1' prefix={prefix} caption='CHẠY THUẬN VÍT TẢI CẤP LIỆU 2'></SSwitch>
                        <SSwitch tagName='Tag1' prefix={prefix} caption='CHẠY NGHỊCH VÍT TẢI CẤP LIỆU 2'></SSwitch>
                        <SSwitch tagName='Tag1' prefix={prefix} caption='VÍT TẢI RA LIỆU'></SSwitch>

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
                        <SSwitch tagName='Tag1' prefix={prefix} caption='BƠM DẦU 1'></SSwitch>
                        <SSwitch tagName='Tag1' prefix={prefix} caption='CHẠY THUẬN VÍT TẢI CẤP LIỆU 1'></SSwitch>
                        <SSwitch tagName='Tag1' prefix={prefix} caption='CHẠY NGHỊCH VÍT TẢI CẤP LIỆU 1'></SSwitch>
                        <SSwitch tagName='Tag1' prefix={prefix} caption='CHẠY THUẬN VÍT TẢI CẤP LIỆU 2'></SSwitch>
                        <SSwitch tagName='Tag1' prefix={prefix} caption='CHẠY NGHỊCH VÍT TẢI CẤP LIỆU 2'></SSwitch>
                        <SSwitch tagName='Tag1' prefix={prefix} caption='VÍT TẢI RA LIỆU'></SSwitch>

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
                        <SSwitch tagName='Tag1' prefix={prefix} caption='BƠM DẦU 1'></SSwitch>
                        <SSwitch tagName='Tag2' prefix={prefix} caption='BƠM DẦU 2'></SSwitch>
                        <SSwitch tagName='Tag3' prefix={prefix} caption='CHẠY THUẬN VÍT TẢI CẤP LIỆU 1'></SSwitch>
                        <SSwitch tagName='Tag3' prefix={prefix} caption='CHẠY NGHỊCH VÍT TẢI CẤP LIỆU 1'></SSwitch>
                        <SSwitch tagName='Tag3' prefix={prefix} caption='CHẠY THUẬN VÍT TẢI CẤP LIỆU 2'></SSwitch>
                        <SSwitch tagName='Tag3' prefix={prefix} caption='CHẠY NGHỊCH VÍT TẢI CẤP LIỆU 2'></SSwitch>
                        <SSwitch tagName='Tag3' prefix={prefix} caption='VÍT TẢI RA LIỆU'></SSwitch>

                    </CardContent>
                </Card>
            </Grid>
            
            
        </Grid>
        
    </div>
    )
}

export default Kho

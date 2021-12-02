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

function GiuBui() {
    const classes = useStyles();
    const prefix = 'RemoteStation1/PLC_Control/GiuBui'
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
                            <Typography variant='h6' className={classes.title}>GIŨ BỤI 1</Typography>
                            <SSwitch tagName='Airlock1' prefix={prefix + '1'} caption='Airlock 1'></SSwitch>
                            <SSwitch tagName='Airlock2' prefix={prefix + '1'} caption='Airlock 2'  ></SSwitch>
                            <SSwitch tagName='Airlock3' prefix={prefix + '1'} caption='Airlock 3'  ></SSwitch>
                            <SSwitch tagName='GB' prefix={prefix + '1'} caption='Giũ bụi'  ></SSwitch>
                            <SSwitch tagName='QH' prefix={prefix + '1'} caption='Quạt hút'  ></SSwitch>
                            <SSwitch tagName='VT' prefix={prefix + '1'} caption='Vít tải'  ></SSwitch>
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
                            <Typography variant='h6' className={classes.title}>GIŨ BỤI 2</Typography>
                            <SSwitch tagName='Airlock1' prefix={prefix + '2'} caption='Airlock 1'></SSwitch>
                            <SSwitch tagName='Airlock2' prefix={prefix + '2'} caption='Airlock 2'  ></SSwitch>
                            <SSwitch tagName='Airlock3' prefix={prefix + '2'} caption='Airlock 3'  ></SSwitch>
                            <SSwitch tagName='GB' prefix={prefix + '2'} caption='Giũ bụi'  ></SSwitch>
                            <SSwitch tagName='QH' prefix={prefix + '2'} caption='Quạt hút'  ></SSwitch>
                            <SSwitch tagName='VT' prefix={prefix + '2'} caption='Vít tải'  ></SSwitch>
                        </CardContent>
                    </Card>
                </Grid>
               
            </Grid>
            
        </div>
    )
}


export default GiuBui

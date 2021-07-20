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
    const prefix = 'Local Station/Control/Device1'
    return (
        <div style={{ position: 'relative', margin: '0 auto', marginTop: 60,marginLeff:20,display:'flex',justifySelf:'center' }}>
            
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="space-between"
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
                            <SSwitch tagName='Tag1' prefix={prefix} caption='Control_VTGB'></SSwitch>
                            <SSwitch tagName='Tag2' prefix={prefix} caption='Control_AikGB1'  ></SSwitch>
                            <SSwitch tagName='Tag3' prefix={prefix} caption='Control_AikGB2'  ></SSwitch>
                            <SSwitch tagName='Tag3' prefix={prefix} caption='Control_AikGB3'  ></SSwitch>
                            <SSwitch tagName='Tag3' prefix={prefix} caption='Control_GB'  ></SSwitch>
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
                            <SSwitch tagName='Tag1' prefix={prefix} caption='Control_VTGB'></SSwitch>
                            <SSwitch tagName='Tag2' prefix={prefix} caption='Control_AikGB1'  ></SSwitch>
                            <SSwitch tagName='Tag3' prefix={prefix} caption='Control_AikGB2'  ></SSwitch>
                            <SSwitch tagName='Tag3' prefix={prefix} caption='Control_AikGB3'  ></SSwitch>
                            <SSwitch tagName='Tag3' prefix={prefix} caption='Control_GB'  ></SSwitch>
                        </CardContent>
                    </Card>
                </Grid>
               
            </Grid>
            
        </div>
    )
}


export default GiuBui

import React from 'react'
import { Paper, Card, Avatar, CardHeader, IconButton, CardContent, CardMedia, Typography, Grid } from '@material-ui/core'
import { MoreVert as MoreVertIcon } from '@material-ui/icons'
import SSwitch from '../SSwitch'
import { makeStyles } from '@material-ui/core/styles';
import { blue, green } from '@material-ui/core/colors'
import { width } from '@material-ui/system';
import MayEpComponent from '../NewComponents/MayEpComponent';
import PhuTroEpVienComponent from '../NewComponents/PhuTroEpVienComponent';
const useStyles = makeStyles({
    card: {
        background: '#dcd7d7',
        maxWidth: 600,
        minWidth: 300,
        width: 500
    },
    title: {
        background: '#5f89d6',
        padding: 10,
        marginTop: 0,
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    gridItem: {
        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
        alignContent: 'center'
    }
});

function PTEV() {
    const classes = useStyles();
    const prefix = 'RemoteStation1/PLC_PTEV/'
    return (
        <div style={{ position: 'relative', margin: '0 auto', marginTop: 60, marginLeff: 20, display: 'flex', justifySelf: 'center' }}>

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
                    md={3}
                    xl={3}

                    className={classes.gridItem}
                >
                    <Card className={classes.card}>
                        <CardContent >
                            <Typography variant='h6' className={classes.title}>PHỤ TRỢ ÉP VIÊN</Typography>
                            <PhuTroEpVienComponent prefix ={prefix+'PTEV/'}></PhuTroEpVienComponent>
                            {/* <SSwitch tagName='Tag1' prefix={prefix} caption='Control M'></SSwitch>
                            <SSwitch tagName='Tag1' prefix={prefix} caption='Control A'></SSwitch>
                            <SSwitch tagName='Tag1' prefix={prefix} caption='Control B'></SSwitch>
                            <SSwitch tagName='Tag1' prefix={prefix} caption='Control DS'></SSwitch>
                            <SSwitch tagName='Tag1' prefix={prefix} caption='Control MX'></SSwitch> */}

                        </CardContent>
                    </Card>
                </Grid>
                
               

            </Grid>

        </div>
    )
}

export default PTEV

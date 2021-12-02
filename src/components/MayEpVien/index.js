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

function MayEpVien() {
    const classes = useStyles();
    const prefix = 'Local Station/PLC_Control/MayEp'
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
                            <Typography variant='h6' className={classes.title}>MÁY ÉP VIÊN 1</Typography>
                            <SSwitch tagName='M' prefix={prefix+"1"} caption='M'></SSwitch>
                            <SSwitch tagName='MX' prefix={prefix+"1"} caption='MX'></SSwitch>
                            <SSwitch tagName='A' prefix={prefix+"1"} caption='A'></SSwitch>
                            <SSwitch tagName='B' prefix={prefix+"1"} caption='B'></SSwitch>
                            

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
                            <Typography variant='h6' className={classes.title}>MÁY ÉP VIÊN 2</Typography>
                            <SSwitch tagName='M' prefix={prefix+"2"} caption='M'></SSwitch>
                            <SSwitch tagName='MX' prefix={prefix+"2"} caption='MX'></SSwitch>
                            <SSwitch tagName='A' prefix={prefix+"2"} caption='A'></SSwitch>
                            <SSwitch tagName='B' prefix={prefix+"2"} caption='B'></SSwitch>
                            
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
                            <Typography variant='h6' className={classes.title}>MÁY ÉP VIÊN 3</Typography>
                            <SSwitch tagName='M' prefix={prefix+"3"} caption='M'></SSwitch>
                            <SSwitch tagName='MX' prefix={prefix+"3"} caption='MX'></SSwitch>
                            <SSwitch tagName='A' prefix={prefix+"3"} caption='A'></SSwitch>
                            <SSwitch tagName='B' prefix={prefix+"3"} caption='B'></SSwitch>
                            
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
                            <Typography variant='h6' className={classes.title}>MÁY ÉP VIÊN 4</Typography>
                            <SSwitch tagName='M' prefix={prefix+"4"} caption='M'></SSwitch>
                            <SSwitch tagName='MX' prefix={prefix+"4"} caption='MX'></SSwitch>
                            <SSwitch tagName='A' prefix={prefix+"4"} caption='A'></SSwitch>
                            <SSwitch tagName='B' prefix={prefix+"4"} caption='B'></SSwitch>
                            
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>

        </div>
    )
}

export default MayEpVien

import React from 'react'
import { Paper, Card, Avatar, CardHeader, IconButton, CardContent, CardMedia, Typography, Grid,Box } from '@material-ui/core'
import { MoreVert as MoreVertIcon } from '@material-ui/icons'
import SSwitch from '../SSwitch'
import { makeStyles } from '@material-ui/core/styles';
import { blue, green } from '@material-ui/core/colors'
import { width } from '@material-ui/system';
import MaynghienTho1 from '../NewComponents/MaynghienTho1'
import MaynghienTho2 from '../NewComponents/MaynghienTho2';
import MayNghienTinh from '../NewComponents/MayNghienTinh';
const useStyles = makeStyles({
    card: {
        // background: '#dcd7d7',
        maxWidth: 600,
        minWidth:300,
        width:500,
        marginTop:0
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
    const prefixTho = 'RemoteStation1/PLC_MayNghienTho/'
    const prefixTinh = 'RemoteStation1/PLC_MayNghienTinh/'
    return (
        <div style={{ position: 'relative', margin: '0 auto', marginTop: 40,marginLeff:20,display:'flex',justifySelf:'center' }}>
            
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
                            {/* <Typography variant='h6' className={classes.title}>MÁY NGHIỀN THÔ 1</Typography> */}
                            <MaynghienTho1 prefix={prefixTho+'MayNghienTho1/'} title='MÁY NGHIỀN THÔ 1'></MaynghienTho1>
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
                            
                            <MaynghienTho1 prefix={prefixTho+'MayNghienTho2/'} title='MÁY NGHIỀN THÔ 2'></MaynghienTho1>
                            
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
                            
                            <MaynghienTho1 prefix={prefixTho+'MayNghienTho3/'} title='Máy nghiền thô 3'></MaynghienTho1>
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
                        <MaynghienTho1 prefix={prefixTho+'MayNghienTho4/'} title='Máy nghiền thô 4'></MaynghienTho1>
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
                            <MayNghienTinh prefix={prefixTinh+'MayNghienTinh1/'}></MayNghienTinh>
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
                            <MayNghienTinh prefix={prefixTinh+'MayNghienTinh2/'}></MayNghienTinh>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default MayNghien

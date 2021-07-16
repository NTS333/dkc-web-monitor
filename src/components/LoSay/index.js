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
    const prefix = 'Local Station/Control/Device1'
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
                            <SSwitch tagName='Tag1' prefix={prefix} caption='Control_QH_Main_LS'></SSwitch>
                            <SSwitch tagName='Tag2' prefix={prefix} caption='Control_QH_TLo_LS'  ></SSwitch>
                            <SSwitch tagName='Tag3' prefix={prefix} caption='Control_Quay_Bon_LS'  ></SSwitch>
                            <SSwitch tagName='Tag3' prefix={prefix} caption='Control_Air_Ra_Lieu_LS'  ></SSwitch>
                            <SSwitch tagName='Tag3' prefix={prefix} caption='Control_Btai_LS'  ></SSwitch>
                            <SSwitch tagName='Tag3' prefix={prefix} caption='Control_Air1_KSS'  ></SSwitch>
                            <SSwitch tagName='Tag3' prefix={prefix} caption='Control_QH_TLKho'  ></SSwitch>
                            <SSwitch tagName='Tag3' prefix={prefix} caption='Control_Air2_KSS'  ></SSwitch>
                            <SSwitch tagName='Tag3' prefix={prefix} caption='Control_Vtai_KSS'  ></SSwitch>
                            <SSwitch tagName='Tag3' prefix={prefix} caption='Control_GTai'  ></SSwitch>
                            <SSwitch tagName='Tag3' prefix={prefix} caption='Control_VTai_Bin_LS'  ></SSwitch>
                            <SSwitch tagName='Tag3' prefix={prefix} caption='Control_VTai_Main'  ></SSwitch>
                            <SSwitch tagName='Tag3' prefix={prefix} caption='Control_Air_IN_LS'  ></SSwitch>
                        </CardContent>
                    </Card>
                </Grid>
                
            </Grid>
            













        </div>
    )
}


export default LoSay

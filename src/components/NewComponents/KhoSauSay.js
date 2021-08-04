import {
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  CardActionArea,
  Typography,
  Grid,
  CardMedia,
  Box,
  TextField,
  InputAdornment,
  Input,
  Button,
  Select,
} from "@material-ui/core";
import React, { useState, useEffect, useCallback } from "react";

import VTaiOn from "../../assets/images/Vittai_On.svg";
import VTaiOff from "../../assets/images/Vittai_Off.svg";
import BDauOn from "../../assets/images/Pump_On.svg";
import BDauOff from "../../assets/images/Pump_Off.svg";
import VTFull_Off from "../../assets/images/Vittai_Full_Off.svg";
import VTFull_On from "../../assets/images/Vittai_Full_On.svg";

import ControlPanel_MayNghien from "./ControlPanel_MayNghien";
import { useRecoilValue } from "recoil";
import { tagsFileState, tagsState } from "../../stateManager";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import LoopIcon from "@material-ui/icons/Loop";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import PropTypes from "prop-types";


const useStyles = makeStyles((theme) => (

  {
    card_root: {
      maxWidth: 640,
      width: "auto",
      minWidth: 350,
      // minWidth:480
      background: '#18191a'
    },
    cardheader_root: {
      // backgroundColor: "#0277bd",
      textTransform: "uppercase",

    },

    card_img: {
      marginBottom: 0,
      height: 70,
    },
    card_actionArea: {

      marginTop: -10,
      background: 'transperance'
    },
    card_header: {
      textAlign: "center",
      textTransform: "uppercase",
      backgroundColor: "#123",
      color: 'white',
      // paddingTop:10,
      marginTop: 0,
      fontSize: '1rem',
      padding: 7
    },

    btnTogle_selected: {
      backgroundColor: "orange !important",
      color: "#333 !important",
    },
    status_container: {
      marginTop: 10,
      // marginRight:1
    },
    status_item__Active: {
      // border:'.5px solid #333',
      padding: 10,
      margin: 5,
      background: "#b28900",
    },
    status_item__InActive: {
      // border:'.5px solid #333',
      padding: 10,
      margin: 5,
      background: "transperance",
    },
    status_item__Active_S: {
      // border:'.5px solid #333',
      padding: 10,
      margin: 5,
      background: "#2d6a4f",
      color: 'white',
      fontWeight: 'bold'
    },
    status_item__InActive_S: {
      // border:'.5px solid #333',
      padding: 10,
      margin: 5,
      background: "transperance",


    },
    title: {
      background: '#5f89d6',
      padding: 5,
      marginTop: 0,
      // display: 'flex',
      // justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '1rem'
    },
    xylanh_icon_Back: {
      fontSize: "3.5rem",
      color: "gray",
      // color: "gray",
      [theme.breakpoints.down("sm")]: {
        marginLeft: 0,
      },
      marginLeft: 10,
    },
    xylanh_icon_Forward: {
      fontSize: "3.5rem",
      // color: "lightGreen",
      color: "gray",

      [theme.breakpoints.down("sm")]: {
        marginRight: 0,
      },
    },
    // statusMachine:{
    //   backgroundColor:'red',
    //     '&:selected':{
    //         backgroundColor:'black'
    //     }
    // }
  }
));

function KhoSauSay(props) {
  const handleOpenCtrPanel = (e) => {
    setisOpen(true);
  };
  const handleClose = () => {
    setisOpen(false);
  };
  const classes = useStyles();
  const { title, id_auto, id_man, tagName, tagListProp, prefix } = props;
  const [auto, setAuto] = useState(false);
  const [isON, setisON] = useState(false);
  const [manual, setManual] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [view, setView] = React.useState(true);
  const [isReading, setisReading] = useState(true);
  const tags = useRecoilValue(tagsState);
  const tagList = useRecoilValue(tagsFileState);
  // const InitialData = useCallback(() => InitializeTagValue(), []);
  // const [NTho1Tags, setNTho1Tags] = useState(InitialData);

  const [Accept, setAccept] = useState(false);
  const [Alarm_HT, setAlarm_HT] = useState(false);
  const [PL_SCADA, setPL_SCADA] = useState(false);
  const [PL_Auto, setPL_Auto] = useState(false);
  const [PL_Manual, setPL_Manual] = useState(false);
  const [PL_CD1, setPL_CD1] = useState(false);
  const [PL_CD2, setPL_CD2] = useState(false);
  const [PL_CD3, setPL_CD3] = useState(false);
  const [Alarm_XL1, setAlarm_XL1] = useState(false);
  const [Alarm_XL2, setAlarm_XL2] = useState(false);
  const [Alarm_XL3, setAlarm_XL3] = useState(false);
  const [Alarm_XL4, setAlarm_XL4] = useState(false);
  const [HI_LV1, setHI_LV1] = useState(false);
  const [HI_LV2, setHI_LV2] = useState(false);
  const [HI_LV_Cylone1, setHI_LV_Cylone1] = useState(false);
  const [HI_LV_Cylone2, setHI_LV_Cylone2] = useState(false);
  const [HI_LV_Screw, setHI_LV_Screw] = useState(false);
  const [PL_FW_FD1, setPL_FW_FD1] = useState(false);
  const [PL_FW_FD2, setPL_FW_FD2] = useState(false);
  const [PL_RV_FD1, setPL_RV_FD1] = useState(false);
  const [PL_RV_FD2, setPL_RV_FD2] = useState(false);
  const [PL_Screw, setPL_Screw] = useState(false);
  const [PL_Pump1, setPL_Pump1] = useState(false);
  const [PL_Pump2, setPL_Pump2] = useState(false);
  const [ST_FW_Vale1, setST_FW_Vale1] = useState(false);
  const [ST_FW_Vale2, setST_FW_Vale2] = useState(false);
  const [ST_FW_Vale3, setST_FW_Vale3] = useState(false);
  const [ST_FW_Vale4, setST_FW_Vale4] = useState(false);
  const [ST_RV_Vale1, setST_RV_Vale1] = useState(false);
  const [ST_RV_Vale2, setST_RV_Vale2] = useState(false);
  const [ST_RV_Vale3, setST_RV_Vale3] = useState(false);
  const [ST_RV_Vale4, setST_RV_Vale4] = useState(false);

  const [PL_OVL_FD1, setPL_OVL_FD1] = useState(false);
  const [PL_OVL_FD2, setPL_OVL_FD2] = useState(false);
  const [PL_OVL_Screw, setPL_OVL_Screw] = useState(false);
  const [PL_OVL_Pump1, setPL_OVL_Pump1] = useState(false);
  const [PL_OVL_Pump2, setPL_OVL_Pump2] = useState(false);



  const handleChange = (event, nextView) => {
    setView(nextView);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Kho nghiền thô');
      console.log(prefix)
      if(typeof(window.subcribeTag) === 'object')
       window.subcribeTag?.forEach(tag => {
        let value = tag.Value
        switch (tag.Path) {
          case prefix + 'ALARM_B':
            setAlarm_HT(value == "1");
            break;
          case prefix + 'SCADA_B':
            setPL_SCADA(value == "1");
            break;
          case prefix + 'PL_Auto_B':
            setPL_Auto(value == "1");
            break;
          case prefix + 'PL_Man_B':
            setPL_Manual(value == "1");
            break;
          case prefix + 'PL_CD1_B':
            setPL_CD1(value == "1");
            break;
          case prefix + 'PL_CD2_B':
            setPL_CD2(value == "1");
            break;
          case prefix + 'PL_CD3_B':
            setPL_CD3(value == '1')
            break;
          case prefix + 'Alarm_XL1B':
            setAlarm_XL1(value == '1')
            break;
          case prefix + 'Alarm_XL2B':
            setAlarm_XL2(value == '1')
            break;
          case prefix + 'Alarm_XL3B':
            setAlarm_XL3(value == '1')
            break;
          case prefix + 'Alarm_XL4B':
            setAlarm_XL4(value == '1')
            break;
          case prefix + 'HI_LV_B1':
            setHI_LV1(value == '1')
            break;
          case prefix + 'HI_LV_B2':
            setHI_LV2(value == '1')
            break;
          case prefix + 'HI_LV_CyloneB1':
            setHI_LV_Cylone1(value == '1')
            break;
          case prefix + 'HI_LV_CyloneB2':
            setHI_LV_Cylone2(value == '1')
            break;
         
            case prefix + 'HI_LV_Screw_B':
              setHI_LV_Screw(value == '1')
              break;
          case prefix + 'PL_FW_FD_B1':
            setPL_FW_FD1(value == '1')
            break;
          case prefix + 'PL_FW_FD_B2':
            setPL_FW_FD2(value == '1')
            break;
          case prefix + 'PL_RV_FD_B1':
            setPL_RV_FD1(value == '1')
            break;
          case prefix + 'PL_RV_FD_B2':
            setPL_RV_FD2(value == '1')
            break;
          case prefix + 'PL_Screw_B':
            setPL_Screw(value == '1')
            break;
          case prefix + 'PL_Pump_B1':
            setPL_Pump1(value == '1')
            break;
          case prefix + 'PL_Pump_B2':
            setPL_Pump2(value == '1')
            break;
          case prefix + 'ST_FW1_Vale_B':
            setST_FW_Vale1(value == '1')
            break;
          case prefix + 'ST_FW2_Vale_B':
            setST_FW_Vale2(value == '1')
            break;
          case prefix + 'ST_FW3_Vale_B':
            setST_FW_Vale3(value == '1')
            break;
          case prefix + 'ST_FW4_Vale_B':
            setST_FW_Vale4(value == '1')
            break;
          case prefix + 'ST_RV1_Vale_B':
            setST_RV_Vale1(value == '1')
            break;
          case prefix + 'ST_RV2_Vale_B':
            setST_RV_Vale2(value == '1')
            break;
          case prefix + 'ST_RV3_Vale_B':
            setST_RV_Vale3(value == '1')
            break;
          case prefix + 'ST_RV4_Vale_B':
            setST_RV_Vale4(value == '1')
            break;
          case prefix + 'PL_OVL_FD_B1':
            setPL_OVL_FD1(value == '1')
            break;
          case prefix + 'PL_OVL_FD_B2':
            setPL_OVL_FD2(value == '1')
            break;
          case prefix + 'PL_OVL_Screw_B':
            setPL_OVL_Screw(value == '1')
            break;
          case prefix + 'PL_OVL_Pump_B1':
            setPL_OVL_Pump1(value == '1')
            break;
          case prefix + 'PL_OVL_Pump_B2':
            setPL_OVL_Pump2(value == '1')
            break;

          default:
            break;
        }
       
      });
    }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <Card
        classes={{
          root: classes.card_root,
        }}
      >
        <CardHeader
          title={title}
          action={
            <>
              <div className={classes.status_container}>
                <span
                  className={
                    PL_SCADA
                      ? classes.status_item__Active_S
                      : classes.status_item__InActive_S
                  }
                  id={id_auto}
                  onClick={() => setisReading(!isReading)}
                >
                  SCADA
                </span>
                <span
                  className={
                    PL_Auto
                      ? classes.status_item__Active
                      : classes.status_item__InActive
                  }
                  id={id_auto}
                  onClick={() => setisReading(!isReading)}
                >
                  Auto
                </span>
                <span
                  className={
                    PL_Manual
                      ? classes.status_item__Active
                      : classes.status_item__InActive
                  }
                  id={id_man}
                >
                  Manual
                </span>
                <span
                  className={
                    PL_CD1
                      ? classes.status_item__Active
                      : classes.status_item__InActive
                  }
                  
                >
                  CĐ1
                </span>
                <span
                  className={
                    PL_CD2
                      ? classes.status_item__Active
                      : classes.status_item__InActive
                  }
                 
                >
                  CĐ2
                </span>
                <span
                  className={
                    PL_CD3
                      ? classes.status_item__Active
                      : classes.status_item__InActive
                  }
                >
                 CĐ3
                </span>

              </div>
            </>

          }
          classes={{
            root: classes.cardheader_root,
            title: classes.card_title,
          }}
        ></CardHeader>
        <CardContent style={{ border: Alarm_HT ? '5px solid red' : '', background: 'transperance' }}>
          <CardActionArea
            onClick={handleOpenCtrPanel}
            className={classes.card_actionArea}
          >
            <Card>
              <CardHeader
                title="Xy lanh"
                className={classes.card_header}
              ></CardHeader>
              <CardContent>
                <Grid container justify="center" alignItems="center" wrap="wrap">
                  <Grid item xs={6} style={{ textAlign: "center" }}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant='h6'>Xy lanh 1</Typography>
                      </Grid>
                      <Grid item xs={6} style={{ textAlign: "center", marginTop: -10 }}>
                        <div style={{ textAlign: "center", float: "left" }}>

                          <ArrowBackIcon
                            className={classes.xylanh_icon_Back}
                            style={{ color:Alarm_XL1?'red':ST_RV_Vale1? 'cyan':'gray' }}
                          ></ArrowBackIcon>
                          <Typography
                            variant="h6"
                            color="initial"
                            style={{ marginLeft: 0, marginTop: -10 }}
                          >
                            Lùi
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item xs={6} style={{ textAlign: "center", marginTop: -10 }}>
                        <div style={{ textAlign: "center", float: "right" }}>
                          <ArrowForwardIcon
                            className={classes.xylanh_icon_Forward}
                            style={{ color:Alarm_XL1?'red':ST_FW_Vale1? 'cyan':'gray' }}
                          ></ArrowForwardIcon>
                          <Typography
                            variant="h6"
                            color="initial"
                            style={{ marginRight: 0, marginTop: -10 }}
                          >
                            Tiến
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={6} style={{ textAlign: "center" }}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant='h6'>Xy lanh 2</Typography>
                      </Grid>
                      <Grid item xs={6} style={{ textAlign: "center", marginTop: -10 }}>
                        <div style={{ textAlign: "center", float: "left" }}>

                          <ArrowBackIcon
                            className={classes.xylanh_icon_Back}
                            style={{ color:Alarm_XL2?'red':ST_RV_Vale2? 'cyan':'gray' }}
                          ></ArrowBackIcon>
                          <Typography
                            variant="h6"
                            color="initial"
                            style={{ marginLeft: 0, marginTop: -10 }}
                          >
                            Lùi
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item xs={6} style={{ textAlign: "center", marginTop: -10 }}>
                        <div style={{ textAlign: "center", float: "right" }}>
                          <ArrowForwardIcon
                            className={classes.xylanh_icon_Forward}
                            style={{ color:Alarm_XL2?'red':ST_FW_Vale2? 'cyan':'gray' }}
                          ></ArrowForwardIcon>
                          <Typography
                            variant="h6"
                            color="initial"
                            style={{ marginRight: 0, marginTop: -10 }}
                          >
                            Tiến
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={6} style={{ textAlign: "center" }}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant='h6'>Xy lanh 3</Typography>
                      </Grid>
                      <Grid item xs={6} style={{ textAlign: "center", marginTop: -10 }}>
                        <div style={{ textAlign: "center", float: "left" }}>

                          <ArrowBackIcon
                            className={classes.xylanh_icon_Back}
                            style={{ color:Alarm_XL3?'red':ST_RV_Vale3? 'cyan':'gray' }}
                          ></ArrowBackIcon>
                          <Typography
                            variant="h6"
                            color="initial"
                            style={{ marginLeft: 0, marginTop: -10 }}
                          >
                            Lùi
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item xs={6} style={{ textAlign: "center", marginTop: -10 }}>
                        <div style={{ textAlign: "center", float: "right" }}>
                          <ArrowForwardIcon
                            className={classes.xylanh_icon_Forward}
                            style={{ color:Alarm_XL3?'red':ST_FW_Vale3? 'cyan':'gray' }}
                          ></ArrowForwardIcon>
                          <Typography
                            variant="h6"
                            color="initial"
                            style={{ marginRight: 0, marginTop: -10 }}
                          >
                            Tiến
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={6} style={{ textAlign: "center" }}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant='h6'>Xy lanh 4</Typography>
                      </Grid>
                      <Grid item xs={6} style={{ textAlign: "center", marginTop: -10 }}>
                        <div style={{ textAlign: "center", float: "left" }}>

                          <ArrowBackIcon
                            className={classes.xylanh_icon_Back}
                            style={{ color:Alarm_XL4?'red':ST_RV_Vale4? 'cyan':'gray' }}
                          ></ArrowBackIcon>
                          <Typography
                            variant="h6"
                            color="initial"
                            style={{ marginLeft: 0, marginTop: -10 }}
                          >
                            Lùi
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item xs={6} style={{ textAlign: "center", marginTop: -10 }}>
                        <div style={{ textAlign: "center", float: "right" }}>
                          <ArrowForwardIcon
                            className={classes.xylanh_icon_Forward}
                            style={{ color:Alarm_XL4?'red':ST_FW_Vale4? 'cyan':'gray' }}
                          ></ArrowForwardIcon>
                          <Typography
                            variant="h6"
                            color="initial"
                            style={{ marginRight: 0, marginTop: -10 }}
                          >
                            Tiến
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>

                </Grid>
              </CardContent>
            </Card>
          </CardActionArea>


          <Card>
            <CardHeader
              title="Vít tải cấp liệu"
              className={classes.card_header}
            ></CardHeader>
            <CardContent>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                wrap="wrap"
                spacing={1}
                style={{
                  marginBottom: -10
                }}
              >
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant='h6'>Vít tải cấp liệu 1</Typography>
                    </Grid>
                    <Grid item xs={6} style={{ textAlign: "center", marginTop: -10 }}>
                      <div style={{ textAlign: "center", float: "left" }}>

                        <LoopIcon
                          className={classes.xylanh_icon_Back}
                          style={{ color:PL_OVL_FD1?'red':PL_RV_FD1? 'cyan':'gray' }}
                        ></LoopIcon>
                        <Typography
                          variant="h6"
                          color="initial"
                          style={{ marginLeft: 0, marginTop: -10 }}
                        >
                          Nghịch
                        </Typography>
                      </div>
                    </Grid>
                    <Grid item xs={6} style={{ textAlign: "center", marginTop: -10 }}>
                      <div style={{ textAlign: "center", float: "right" }}>
                        <AutorenewIcon
                          className={classes.xylanh_icon_Forward}
                          style={{ color:PL_OVL_FD1?'red':PL_FW_FD1? 'cyan':'gray' }}
                        ></AutorenewIcon>
                        <Typography
                          variant="h6"
                          color="initial"
                          style={{ marginRight: 0, marginTop: -10 }}
                        >
                          Thuận
                        </Typography>
                      </div>
                    </Grid>
                    <Grid xs={12}>
                      <div style={{ textAlign: "center", marginTop: -30 }}>
                        {/* <LoopIcon className={classes.xylanh_icon_Back}></LoopIcon>
                     */}
                        <img width={130} src={HI_LV1?VTFull_On:VTFull_Off} alt="" style={{ transform: 'rotate(270deg)' }} />
                      </div>
                      <div style={{ textAlign: "center", marginBottom: 10, marginTop: -30 }}>
                        <Typography variant="h6" color="initial">
                          Báo đầy
                        </Typography>
                      </div>

                    </Grid>

                  </Grid>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant='h6'>Vít tải cấp liệu 2</Typography>
                    </Grid>
                    <Grid item xs={6} style={{ textAlign: "center", marginTop: -10 }}>
                      <div style={{ textAlign: "center", float: "left" }}>

                        <LoopIcon
                          className={classes.xylanh_icon_Back}
                          style={{ color:PL_OVL_FD2?'red':PL_RV_FD2? 'cyan':'gray' }}
                        ></LoopIcon>
                        <Typography
                          variant="h6"
                          color="initial"
                          style={{ marginLeft: 0, marginTop: -10 }}
                        >
                          Nghịch
                        </Typography>
                      </div>
                    </Grid>
                    <Grid item xs={6} style={{ textAlign: "center", marginTop: -10 }}>
                      <div style={{ textAlign: "center", float: "right" }}>
                        <AutorenewIcon
                          className={classes.xylanh_icon_Forward}
                          style={{ color:PL_OVL_FD2?'red':PL_FW_FD2? 'cyan':'gray' }}
                        ></AutorenewIcon>
                        <Typography
                          variant="h6"
                          color="initial"
                          style={{ marginRight: 0, marginTop: -10 }}
                        >
                          Thuận
                        </Typography>
                      </div>
                    </Grid>
                    <Grid xs={12}>
                      <div style={{ textAlign: "center", marginTop: -30 }}>
                        {/* <LoopIcon className={classes.xylanh_icon_Back}></LoopIcon>
                     */}
                        <img width={130} src={HI_LV2?VTFull_On:VTFull_Off} alt="" style={{ transform: 'rotate(270deg)' }} />
                      </div>
                      <div style={{ textAlign: "center", marginBottom: 10, marginTop: -30 }}>
                        <Typography variant="h6" color="initial">
                          Báo đầy
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>

              </Grid>
            </CardContent>
          </Card>
          <Card>
            <CardHeader
              title="Vít tải ra liệu"
              className={classes.card_header}
            ></CardHeader>
            <CardContent>
              <Grid container justify="center" alignItems="center" wrap="wrap">
                <Grid item xs={6} style={{ textAlign: "center", marginTop: -10 }}>
                  <div style={{ textAlign: "center", float: "left" }}>

                    <img
                      src={PL_Screw?VTaiOn:VTaiOff}
                      className={classes.xylanh_icon_Back}
                      style={{ backgroundColor: PL_OVL_Screw?'red':''}}
                      
                    ></img>
                    <Typography
                      variant="h6"
                      color="initial"
                      style={{ marginLeft: 0, marginTop: -10 }}
                    >
                      Trạng thái
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center", marginTop: -10 }}>
                  <div style={{ textAlign: "center", float: "right" }}>

                    <img width={130} src={HI_LV_Screw?VTFull_On:VTFull_Off} alt="" style={{ transform: 'rotate(270deg)' }} />

                    <Typography
                      variant="h6"
                      color="initial"
                      style={{ marginRight: 20, marginTop: -40 }}
                    >
                      Báo đầy
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card>
            <CardHeader
              title="Cylone"
              className={classes.card_header}
            ></CardHeader>
            <CardContent>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                wrap="wrap"
                spacing={1}
                style={{
                  marginBottom: -10
                }}
              >
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant='h6'>Cylone 1</Typography>
                    </Grid>
                    <Grid xs={12}>
                      <div style={{ textAlign: "center", marginTop: -30 }}>
                        {/* <LoopIcon className={classes.xylanh_icon_Back}></LoopIcon>
                     */}
                        <img width={130} src={HI_LV_Cylone1?VTFull_On:VTFull_Off} alt="" style={{ transform: 'rotate(270deg)' }} />
                      </div>
                      <div style={{ textAlign: "center", marginBottom: 0, marginTop: -30 }}>
                        <Typography variant="h6" color="initial">
                          Báo đầy
                        </Typography>
                      </div>

                    </Grid>

                  </Grid>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant='h6'>Cylone 2</Typography>
                    </Grid>
                    <Grid xs={12}>
                      <div style={{ textAlign: "center", marginTop: -30 }}>
                        {/* <LoopIcon className={classes.xylanh_icon_Back}></LoopIcon>
                     */}
                        <img width={130} src={HI_LV_Cylone2?VTFull_On:VTFull_Off} alt="" style={{ transform: 'rotate(270deg)' }} />
                      </div>
                      <div style={{ textAlign: "center", marginBottom: 0, marginTop: -30 }}>
                        <Typography variant="h6" color="initial">
                          Báo đầy
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              
                {/* <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant='h6'>Cylone 3</Typography>
                    </Grid>
                    <Grid xs={12}>
                      <div style={{ textAlign: "center", marginTop: -30 }}>
                       
                        <img width={130} src={HI_LV_Cylone21?VTFull_On:VTFull_Off} alt="" style={{ transform: 'rotate(270deg)' }} />
                      </div>
                      <div style={{ textAlign: "center", marginBottom: 0, marginTop: -30 }}>
                        <Typography variant="h6" color="initial">
                          Báo đầy
                        </Typography>
                      </div>

                    </Grid>

                  </Grid>
                </Grid> */}
                {/* <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant='h6'>Cylone 4</Typography>
                    </Grid>
                    <Grid xs={12}>
                      <div style={{ textAlign: "center", marginTop: -30 }}>
                        
                        <img width={130} src={HI_LV_Cylone22?VTFull_On:VTFull_Off} alt="" style={{ transform: 'rotate(270deg)' }} />
                      </div>
                      <div style={{ textAlign: "center", marginBottom: 0, marginTop: -30 }}>
                        <Typography variant="h6" color="initial">
                          Báo đầy
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                </Grid> */}

              </Grid>
            </CardContent>
          </Card>
          <Card>
            <CardHeader
              title="Bơm dầu"
              className={classes.card_header}
            ></CardHeader>
            <CardContent>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                wrap="wrap"
                spacing={1}
                style={{
                  marginBottom: -10
                }}
              >
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant='h6'>Bơm dầu 1</Typography>
                    </Grid>
                    <Grid xs={12}>
                      <div style={{ textAlign: "center" }}>
                        {/* <LoopIcon className={classes.xylanh_icon_Back}></LoopIcon>
                     */}
                        <img width={130} src={PL_Pump1?BDauOn:BDauOff} alt=""  
                        style={{ backgroundColor: PL_OVL_Pump1?'red':''}}/>
                      </div>

                    </Grid>

                  </Grid>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant='h6'>Bơm dầu 2</Typography>
                    </Grid>
                    <Grid xs={12}>
                      <div style={{ textAlign: "center" }}>
                        {/* <LoopIcon className={classes.xylanh_icon_Back}></LoopIcon>
                     */}
                        <img width={130} src={PL_Pump2?BDauOn:BDauOff} alt="" 
                         style={{ backgroundColor: PL_OVL_Pump2?'red':''}}
                        />
                      </div>

                    </Grid>
                  </Grid>
                </Grid>

              </Grid>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
      <ControlPanel_MayNghien
        tagListProp={tagListProp}
        isOpen={isOpen}
        handleClose={handleClose}
        tagName={tagName}
      ></ControlPanel_MayNghien>
    </>
  );
}
// KhoSauSay.propTypes = {
//   tagList: PropTypes.object,
// };
export default KhoSauSay;

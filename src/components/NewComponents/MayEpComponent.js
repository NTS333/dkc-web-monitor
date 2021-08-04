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
import AirlockOn from "../../assets/images/Airlock_On.svg";
import AirlockOff from "../../assets/images/Airlock_Off.svg";
import AirlockFault from "../../assets/images/Airlock_Fault.svg";
import MotorOn from "../../assets/images/Motor_On.svg";
import MotorOff from "../../assets/images/Motor_Off.svg";
import MotorFault from "../../assets/images/Motor_Fault.svg";

import BDauOn from "../../assets/images/Pump_On.svg";
import BDauOff from "../../assets/images/Pump_Off.svg";
import VTFull_Off from "../../assets/images/Vittai_Full_Off.svg";
import VTFull_On from "../../assets/images/Vittai_Full_On.svg";
import FanOff from "../../assets/images/Fan_Off.svg";
import FanOn from "../../assets/images/Fan_On.svg";
import FanFault from "../../assets/images/Fan_Fault.svg";

import ControlPanel_MayNghien from "./ControlPanel_MayNghien";
import { useRecoilValue } from "recoil";
import { tagsFileState, tagsState } from "../../stateManager";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import LoopIcon from "@material-ui/icons/Loop";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  card_root: {
    maxWidth: 640,
    width: "auto",
    minWidth: 350,
    // minWidth:480
    background: "#18191a",
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
    background: "transperance",
  },
  card_header: {
    textAlign: "center",
    textTransform: "uppercase",
    backgroundColor: "#123",
    color: "white",
    // paddingTop:10,
    marginTop: 0,
    fontSize: "1rem",
    padding: 7,
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
    color: "white",
    fontWeight: "bold",
  },
  status_item__InActive_S: {
    // border:'.5px solid #333',
    padding: 10,
    margin: 5,
    background: "transperance",
  },
  title: {
    background: "#5f89d6",
    padding: 5,
    marginTop: 0,
    // display: 'flex',
    // justifyContent: 'center',
    color: "white",
    fontWeight: "bold",
    fontSize: "1rem",
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
}));

function MayEpComponent(props) {
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

  // const InitialData = useCallback(() => InitializeTagValue(), []);
  // const [NTho1Tags, setNTho1Tags] = useState(InitialData);

  const [PL_Man_EV, setPL_Man_EV] = useState(false);
  const [PL_Auto_EV, setPL_Auto_EV] = useState(false);
  const [Alarm_EV, setAlarm_EV] = useState(false);
  const [SCADA_EV, setSCADA_EV] = useState(false);
  const [PL_OVL_M, setPL_OVL_M] = useState(false);
  const [PL_OVL_MX, setPL_OVL_MX] = useState(false);
  const [PL_OVL_B, setPL_OVL_B] = useState(false);
  const [PL_OVL_A, setPL_OVL_A] = useState(false);
  const [PL_M, setPL_M] = useState(false);
  const [PL_MX, setPL_MX] = useState(false);
  const [PL_B, setPL_B] = useState(false);
  const [PL_A, setPL_A] = useState(false);
  const [Hz_A, setHz_A] = useState(null);
  const [Hz_M, setHz_M] = useState(null);

  const [CurrentDigitalM, setCurrentDigitalM] = useState(false);
  const [Current_Digital_M1, setCurrent_Digital_M1] = useState(null);
  const [Current_Digital_M2, setCurrent_Digital_M2] = useState(null);
  const [Current_Digital_A, setCurrent_Digital_A] = useState(null);
  const [Current_Digital_B, setCurrent_Digital_B] = useState(null);
  const [Current_Digital_MX, setCurrent_Digital_MX] = useState(null);


  //Máy ép viên
  //Mixer
  //Feeder B
  // Feeder A

  //Băng tải
  const [PL_BTai1_LS, setPL_BTai1_LS] = useState(false);
  const [PL_BTai2_LS, setPL_BTai2_LS] = useState(false);
  const [PL_OVL_Btai_LS, setPL_OVL_Btai_LS] = useState(false);
  const [PL_FW_Btai_LS, setPL_FW_Btai_LS] = useState(false);
  const [PL_RV_Btai_LS, setPL_RV_Btai_LS] = useState(false);
  //Vít tải
  const [PL_VTai_Bin_LS, setPL_VTai_Bin_LS] = useState(false);
  const [PL_VTai_Main, setPL_VTai_Main] = useState(false);
  const [PL_Hand_VTai_Bin_LS, setPL_Hand_VTai_Bin_LS] = useState(false);
  const [PL_Hand_VTai_Main, setPL_Hand_VTai_Main] = useState(false);
  const [PL_Auto_VTai_Bin_LS, setPL_Auto_VTai_Bin_LS] = useState(false);
  const [PL_Auto_VTai_Main, setPL_Auto_VTai_Main] = useState(false);
  const [PL_OVL_VTai_Bin_LS, setPL_OVL_VTai_Bin_LS] = useState(false);
  const [PL_OVL_VTai_Main, setPL_OVL_VTai_Main] = useState(false);
  //Gàu tải
  const [PL_GTai, setPL_GTai] = useState(false);
  const [PL_Hand_GTai, setPL_Hand_GTai] = useState(false);
  const [PL_Auto_GTai, setPL_Auto_GTai] = useState(false);
  const [PL_OVL_GTai, setPL_OVL_GTai] = useState(false);
  //Quay bồn
  const [PL_Quay_Bon_LS, setPL_Quay_Bon_LS] = useState(false);
  const [PL_OVL_Quay_Bon_LS, setPL_OVL_Quay_Bon_LS] = useState(false);

  //Quạt hút
  const [PL_QH_Main_LS, setPL_QH_Main_LS] = useState(false);
  const [PL_OVL_QH_Main_LS, setPL_OVL_QH_Main_LS] = useState(false);
  const [PL_QH_TLKho, setPL_QH_TLKho] = useState(false);
  const [PL_OVL_QH_TLKho, setPL_OVL_QH_TLKho] = useState(false);
  const [PL_QH_TLo_LS, setPL_QH_TLo_LS] = useState(false);
  const [PL_OVL_QH_TLo_LS, setPL_OVL_QH_TLo_LS] = useState(false);

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  useEffect(() => {
    console.log("rerender kho nghien tho");
    const timer = setInterval(() => {
      console.log("LO SAY ");

      if (typeof window.subcribeTag === "object")
        window.subcribeTag?.forEach((tag) => {
          let value = tag.Value;
          switch (tag.Path) {
           case prefix +'PL_Man_EV':
             setPL_Man_EV(value == '1');
             break;
           case prefix +'PL_Auto_EV':
             setPL_Auto_EV(value == '1');
             break;
           case prefix +'Alarm_EV':
             setAlarm_EV(value == '1');
             break;
           case prefix +'SCADA_EV':
             setSCADA_EV(value == '1');
             break;
           case prefix +'PL_OVL_M':
             setPL_OVL_M(value == '1');
             break;
           case prefix +'PL_OVL_MX':
             setPL_OVL_MX(value == '1');
             break;
           case prefix +'PL_OVL_B':
             setPL_OVL_B(value == '1');
             break;
           case prefix +'PL_OVL_A':
             setPL_OVL_A(value == '1');
             break;
           case prefix +'PL_M':
             setPL_M(value == '1');
             break;
           case prefix +'PL_MX':
             setPL_MX(value == '1');
             break;
           case prefix +'PL_B':
             setPL_B(value == '1');
             break;
           case prefix +'PL_A':
             setPL_A(value == '1');
             break;
           case prefix +'Hz_A':
             setHz_A(value);
             break;
           case prefix +'Hz_M':
             setHz_M(value);
             break;
           case prefix +'Current_Digital_M1':
             setCurrent_Digital_M1(value);
             break;
           case prefix +'Current_Digital_M2':
             setCurrent_Digital_M2(value);
             break;
           case prefix +'Current_Digital_A':
             setCurrent_Digital_A(value);
             break;
           case prefix +'Current_Digital_B':
             setCurrent_Digital_B(value);
             break;
           case prefix +'Current_Digital_MX':
             setCurrent_Digital_MX(value);
             break;

            default:
              break;
          }
        });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

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
                    SCADA_EV
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
                    PL_Auto_EV
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
                    PL_Man_EV
                      ? classes.status_item__Active
                      : classes.status_item__InActive
                  }
                  id={id_man}
                >
                  Manual
                </span>
                {/* <span
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
                </span> */}
              </div>
            </>
          }
          classes={{
            root: classes.cardheader_root,
            title: classes.card_title,
          }}
        ></CardHeader>
        <CardContent
          style={{
            border: Alarm_EV ? "5px solid red" : "",
            background: "transperance",
          }}
        >
          <CardActionArea
            onClick={handleOpenCtrPanel}
            className={classes.card_actionArea}
          >
            <Card>
              <CardHeader
                title={
                  <>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant="h6">Máy ép</Typography>
                      </Grid>
                      {/* <Grid item xs={12} >
                  <Typography variant='text' style={{fontSize:17}}>Auto</Typography>
                  <Typography variant='text' style={{fontSize:17,marginLeft:10,background:'#b28900',padding:10}}>Hand</Typography>
                  </Grid> */}
                    </Grid>
                  </>
                }
                className={classes.card_header}
              ></CardHeader>
              <CardContent>
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  wrap="wrap"
                >
                  <Grid item xs={12} style={{ textAlign: "center" }}>
                    <CardMedia>
                      <img
                        src={PL_OVL_M ? MotorFault : PL_M ? MotorOn : MotorOff}
                        width={130}
                        
                        aria-label="Control_NTho1"
                        style={{marginBottom:-10,marginTop:-10}}
                      ></img>
                      <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        wrap="wrap"
                        spacing={1}
                      >
                        <Grid item xs={6} style={{ textAlign: "center" }}>
                          <Typography>Dòng motor 1</Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          style={{
                            textAlign: "center",
                            background: "#fffa",
                            color: "black",
                            height: 40,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography>
                            <b>{Current_Digital_M1}</b> A
                          </Typography>
                        </Grid>
                       
                        <Grid item xs={6} style={{ textAlign: "center" }}>
                          <Typography>Dòng motor 2</Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          style={{
                            textAlign: "center",
                            background: "#fffa",
                            color: "black",
                            height: 40,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography>
                            <b>{Current_Digital_M2}</b> A
                          </Typography>
                        </Grid>
                       
                        <Grid item xs={6} style={{ textAlign: "center" }}>
                          <Typography>Tần số</Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          style={{
                            textAlign: "center",
                            background: "#fffa",
                            color: "black",
                            height: 40,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography>
                            <b>{Hz_M}</b> Hz
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardMedia>
                  </Grid>

                  
                </Grid>
              </CardContent>
            </Card>
          </CardActionArea>

          <Card>
            <CardHeader
              title={
                <>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="h6">Feeder</Typography>
                    </Grid>
                    {/* <Grid item xs={12} justifyContent='space-between'>
                  <Typography variant='text' style={{fontSize:17}}>Auto</Typography>
                  <Typography variant='text' style={{fontSize:17,marginLeft:10,background:'#b28900',padding:10}}>Hand</Typography>
                  </Grid> */}
                  </Grid>
                </>
              }
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
                  marginBottom: -10,
                }}
              >
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography variant="h6" style={{marginBottom:-20}}>Feeder A</Typography>
                    </Grid>
                      <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        wrap="wrap"
                        spacing={1}
                      >
                        <Grid item xs={12}>
                        <img
                          src={PL_OVL_A ? MotorFault : PL_A? MotorOn : MotorOff}
                          width={130}
                          style={{marginBottom:-20,marginTop:-10}}
                        ></img>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: "center" }}>
                          <Typography>Dòng motor</Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          style={{
                            textAlign: "center",
                            background: "#fffa",
                            color: "black",
                            height: 40,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography>
                            <b>{Current_Digital_A}</b> A
                          </Typography>
                        </Grid>
                       
                        <Grid item xs={6} style={{ textAlign: "center" }}>
                          <Typography>Tần số</Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          style={{
                            textAlign: "center",
                            background: "#fffa",
                            color: "black",
                            height: 40,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography>
                            <b>{Hz_A}</b> Hz
                          </Typography>
                        </Grid>
                      
                      </Grid>
               
                  </Grid>
                </Grid>

                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography variant="h6" style={{marginBottom:-20}}>Feeder B</Typography>
                    </Grid>
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        wrap="wrap"
                        spacing={1}
                      >
                        <Grid item xs={12}>
                        <img
                          src={PL_OVL_B ? MotorFault : PL_B? MotorOn : MotorOff}
                          width={130}
                          style={{marginBottom:-20,marginTop:-10}}
                        ></img>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: "center" }}>
                          <Typography>Dòng motor</Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          style={{
                            textAlign: "center",
                            background: "#fffa",
                            color: "black",
                            height: 40,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography>
                            <b>{Current_Digital_B}</b> A
                          </Typography>
                        </Grid>
                       
                        <Grid item xs={6} style={{ textAlign: "center" }}>
                          <Typography>Tần số</Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          style={{
                            textAlign: "center",
                            background: "#fffa",
                            color: "black",
                            height: 40,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography>
                            <b>{Hz_A}</b> Hz
                          </Typography>
                        </Grid>
                      
                      </Grid>
               
                    
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card>
            <CardHeader
              title={
                <>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="h6">Mixer</Typography>
                    </Grid>
                    {/* <Grid item xs={12} >
                  <Typography variant='text' style={{fontSize:17}}>Auto</Typography>
                  <Typography variant='text' style={{fontSize:17,marginLeft:10,background:'#b28900',padding:10}}>Hand</Typography>
                  </Grid> */}
                  </Grid>
                </>
              }
              className={classes.card_header}
            ></CardHeader>
            <CardContent>
              <Grid container justify="center" alignItems="center" wrap="wrap">
                <Grid item xs={12} style={{ textAlign: "center" }}>
                  <img
                    width={130}
                    src={
                      PL_OVL_MX ? MotorFault : PL_MX ? MotorOn : MotorOff
                    }
                    alt=""
                    style={{ margin: -20, padding: -10 }}
                  />
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center" }}>
                          <Typography>Dòng motor</Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          style={{
                            textAlign: "center",
                            background: "#fffa",
                            color: "black",
                            height: 40,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography>
                            <b>{Current_Digital_MX}</b> A
                          </Typography>
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
// MayEpComponent.propTypes = {
//   tagList: PropTypes.object,
// };
export default MayEpComponent;

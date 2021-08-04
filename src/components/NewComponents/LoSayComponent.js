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

function LoSayComponent(props) {
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

  const [PL_Man_LS, setPL_Man_LS] = useState(false);
  const [PL_Auto_LS, setPL_Auto_LS] = useState(false);
  const [ALARM_LS, setALARM_LS] = useState(false);
  const [SCADA_LS, setSCADA_LS] = useState(false);
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
            case prefix + "PL_Man_LS":
              setPL_Man_LS(value == "1");
              break;
            case prefix + "PL_Auto_LS":
              setPL_Auto_LS(value == "1");
              break;
            case prefix + "ALARM_LS":
              setALARM_LS(value == "1");
              break;
            case prefix + "SCADA_LS":
              setSCADA_LS(value == "1");
              break;
            case prefix + "PL_BTai1_LS":
              setPL_BTai1_LS(value == "1");
              break;
            case prefix + "PL_BTai2_LS":
              setPL_BTai2_LS(value == "1");
              break;
            case prefix + "PL_OVL_Btai_LS":
              setPL_OVL_Btai_LS(value == "1");
              break;
            case prefix + "PL_FW_Btai_LS":
              setPL_FW_Btai_LS(value == "1");
              break;
            case prefix + "PL_RV_Btai_LS":
              setPL_RV_Btai_LS(value == "1");
              break;
            case prefix + "PL_VTai_Bin_LS":
              setPL_VTai_Bin_LS(value == "1");
              break;
            case prefix + "PL_VTai_Main":
              setPL_VTai_Main(value == "1");
              break;
            case prefix + "PL_Hand_VTai_Bin_LS":
              setPL_Hand_VTai_Bin_LS(value == "1");
              break;
            case prefix + "PL_Hand_VTai_Main":
              setPL_Hand_VTai_Main(value == "1");
              break;
            case prefix + "PL_Auto_VTai_Bin_LS":
              setPL_Auto_VTai_Bin_LS(value == "1");
              break;
            case prefix + "PL_Auto_VTai_Main":
              setPL_Auto_VTai_Main(value == "1");
              break;
            case prefix + "PL_OVL_VTai_Bin_LS":
              setPL_OVL_VTai_Bin_LS(value == "1");
              break;
            case prefix + "PL_OVL_VTai_Main":
              setPL_OVL_VTai_Main(value == "1");
              break;
            case prefix + "PL_GTai":
              setPL_GTai(value == "1");
              break;
            case prefix + "PL_Hand_GTai":
              setPL_Hand_GTai(value == "1");
              break;
            case prefix + "PL_Auto_GTai":
              setPL_Auto_GTai(value == "1");
              break;
            case prefix + "PL_OVL_GTai":
              setPL_OVL_GTai(value == "1");
              break;
            case prefix + "PL_Quay_Bon_LS":
              setPL_Quay_Bon_LS(value == "1");
              break;
            case prefix + "PL_OVL_Quay_Bon_LS":
              setPL_OVL_Quay_Bon_LS(value == "1");
              break;
            case prefix + "PL_QH_Main_LS":
              setPL_QH_Main_LS(value == "1");
              break;
            case prefix + "PL_OVL_QH_Main_LS":
              setPL_OVL_QH_Main_LS(value == "1");
              break;
            case prefix + "PL_QH_TLKho":
              setPL_QH_TLKho(value == "1");
              break;
            case prefix + "PL_OVL_QH_TLKho":
              setPL_OVL_QH_TLKho(value == "1");
              break;
            case prefix + "PL_QH_TLo_LS":
              setPL_QH_TLo_LS(value == "1");
              break;
            case prefix + "PL_OVL_QH_TLo_LS":
              setPL_OVL_QH_TLo_LS(value == "1");
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
                    SCADA_LS
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
                    PL_Auto_LS
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
                    PL_Man_LS
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
            border: ALARM_LS ? "5px solid red" : "",
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
                        <Typography variant="h6">Băng tải</Typography>
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
                  <Grid item xs={6} style={{ textAlign: "center" }}>
                    <CardMedia>
                      <img
                        src={
                          PL_OVL_Btai_LS
                            ? MotorFault
                            : PL_BTai2_LS
                            ? MotorOn
                            : MotorOff
                        }
                        width={130}
                        height="50px"
                        aria-label="Control_NTho1"
                      ></img>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <LoopIcon
                            style={{
                              fontSize: "2.5rem",
                              margin: 0,
                              color: PL_RV_Btai_LS ? "cyan" : "#bfbdbd",
                            }}
                          ></LoopIcon>
                          <Typography>Nghịch</Typography>
                        </div>
                        <div>
                          <AutorenewIcon
                            style={{
                              fontSize: "2.5rem",
                              margin: 0,
                              color: PL_FW_Btai_LS ? "cyan" : "#bfbdbd",
                            }}
                          ></AutorenewIcon>
                          <Typography>Thuận</Typography>
                        </div>
                      </div>
                    </CardMedia>
                    <Typography>Đ/cơ băng tải 1</Typography>
                  </Grid>

                  <Grid item xs={6} style={{ textAlign: "center" }}>
                    <CardMedia>
                      <img
                        src={
                          PL_OVL_Btai_LS
                            ? MotorFault
                            : PL_BTai1_LS
                            ? MotorOn
                            : MotorOff
                        }
                        width={130}
                        height="50px"
                        aria-label="Control_NTho1"
                      ></img>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <LoopIcon
                            style={{
                              fontSize: "2.5rem",
                              margin: 0,
                              color: PL_RV_Btai_LS ? "cyan" : "#bfbdbd",
                            }}
                          ></LoopIcon>
                          <Typography>Nghịch</Typography>
                        </div>
                        <div>
                          <AutorenewIcon
                            style={{
                              fontSize: "2.5rem",
                              margin: 0,
                              color: PL_FW_Btai_LS ? "cyan" : "#bfbdbd",
                            }}
                          ></AutorenewIcon>
                          <Typography>Thuận</Typography>
                        </div>
                      </div>
                    </CardMedia>
                    <Typography>Đ/cơ băng tải 2</Typography>
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
                      <Typography variant="h6">Vít tải</Typography>
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
                      <Typography variant="h6">Vít tải chính</Typography>
                    </Grid>
                    <Grid item xs={6} style={{ textAlign: "start" }}>
                      <div style={{ textAlign: "center" }}>
                        <Typography
                          variant="h6"
                          color="initial"
                          style={{
                            marginLeft: 0,
                            padding: 5,
                          }}
                          className={
                            PL_Auto_VTai_Main
                              ? classes.status_item__Active
                              : classes.status_item__InActive
                          }
                        >
                          Auto
                        </Typography>
                      </div>
                    </Grid>
                    <Grid item xs={6} style={{ textAlign: "start" }}>
                      <div style={{ textAlign: "center" }}>
                        <Typography
                          variant="h6"
                          color="initial"
                          style={{
                            marginRight: 0,
                            padding: 5,
                          }}
                          className={
                            PL_Hand_VTai_Main
                              ? classes.status_item__Active
                              : classes.status_item__InActive
                          }
                        >
                          Hand
                        </Typography>
                      </div>
                    </Grid>
                    <Grid xs={12}>
                      <div style={{ textAlign: "center" }}>
                        {/* <LoopIcon className={classes.xylanh_icon_Back}></LoopIcon>
                         */}
                        <img
                          width={130}
                          src={
                            PL_OVL_VTai_Main
                              ? MotorFault
                              : PL_VTai_Main
                              ? MotorOn
                              : MotorOff
                          }
                          alt=""
                          style={{
                            // background: Alarm_XL_LD ? "red" : "",
                            marginTop: -30,
                          }}
                        />
                      </div>
                      {/* <div style={{ textAlign: "center", marginBottom: 10 }}>
                        <Typography variant="h6" color="initial">
                          Báo đầy
                        </Typography>
                      </div> */}
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography variant="h6">Vít tải bin Lò sấy</Typography>
                    </Grid>
                    <Grid item xs={6} style={{ textAlign: "start" }}>
                      <div style={{ textAlign: "center" }}>
                        <Typography
                          variant="h6"
                          color="initial"
                          style={{
                            marginLeft: 0,
                            padding: 5,
                          }}
                          className={
                            PL_Auto_VTai_Bin_LS
                              ? classes.status_item__Active
                              : classes.status_item__InActive
                          }
                        >
                          Auto
                        </Typography>
                      </div>
                    </Grid>
                    <Grid item xs={6} style={{ textAlign: "start" }}>
                      <div style={{ textAlign: "center" }}>
                        <Typography
                          variant="h6"
                          color="initial"
                          style={{
                            marginRight: 0,
                            padding: 5,
                          }}
                          className={
                            PL_Hand_VTai_Bin_LS
                              ? classes.status_item__Active
                              : classes.status_item__InActive
                          }
                        >
                          Hand
                        </Typography>
                      </div>
                    </Grid>
                    <Grid xs={12}>
                      <div style={{ textAlign: "center" }}>
                        {/* <LoopIcon className={classes.xylanh_icon_Back}></LoopIcon>
                         */}
                        <img
                          width={130}
                          src={
                            PL_OVL_VTai_Bin_LS
                              ? MotorFault
                              : PL_VTai_Bin_LS
                              ? MotorOn
                              : MotorOff
                          }
                          alt=""
                          style={{
                            // background: Alarm_XL_LD ? "red" : "",
                            marginTop: -30,
                          }}
                        />
                      </div>
                      {/* <div style={{ textAlign: "center", marginBottom: 10 }}>
                        <Typography variant="h6" color="initial">
                          Báo đầy
                        </Typography>
                      </div> */}
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
                      <Typography variant="h6">Gàu tải</Typography>
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
                      PL_OVL_GTai ? MotorFault : PL_GTai ? MotorOn : MotorOff
                    }
                    alt=""
                    style={{ margin: -20, padding: -10 }}
                  />
                </Grid>

                <Grid item xs={6} style={{ textAlign: "start", padding: 5 }}>
                  <div style={{ textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      color="initial"
                      style={{ marginLeft: 0, padding: 5 }}
                      className={
                        PL_Auto_GTai
                          ? classes.status_item__Active
                          : classes.status_item__InActive
                      }
                    >
                      Auto
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "start", padding: 5 }}>
                  <div style={{ textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      color="initial"
                      style={{
                        marginRight: 0,
                        padding: 5,
                      }}
                      className={
                        PL_Hand_GTai
                          ? classes.status_item__Active
                          : classes.status_item__InActive
                      }
                    >
                      Hand
                    </Typography>
                  </div>
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
                      <Typography variant="h6">Quay bồn</Typography>
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
                      PL_OVL_Quay_Bon_LS
                        ? MotorFault
                        : PL_Quay_Bon_LS
                        ? MotorOn
                        : MotorOff
                    }
                    alt=""
                    style={{ marginTop: 0, padding: -10 }}
                  />
                </Grid>

                {/* <Grid item xs={6} style={{ textAlign: "start", padding: 5 }}>
                  <div style={{ textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      color="initial"
                      style={{ marginLeft: 0, padding: 5 }}
                      className={
                        PL_QHMain_LD
                          ? classes.status_item__Active
                          : classes.status_item__InActive
                      }
                    >
                      Auto
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "start", padding: 5 }}>
                  <div style={{ textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      color="initial"
                      style={{
                        marginRight: 0,
                        padding: 5,
                      }}
                      className={
                        PL_QHMain_LD
                          ? classes.status_item__Active
                          : classes.status_item__InActive
                      }
                    >
                      Hand
                    </Typography>
                  </div>
                </Grid>
             */}
              </Grid>
            </CardContent>
          </Card>
          <Card>
            <CardHeader
              title={
                <>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="h6">Quạt hút</Typography>
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
                <Grid item xs={4} style={{ textAlign: "center" }}>
                  <img
                    width={130}
                    src={
                      PL_OVL_QH_Main_LS
                        ? FanFault
                        : PL_QH_Main_LS
                        ? FanOn
                        : FanOff
                    }
                    alt=""
                    style={{ marginTop: 0, padding: -10 }}
                  />
                  <Typography>Quạt hút chính</Typography>
                </Grid>
                <Grid item xs={4} style={{ textAlign: "center" }}>
                  <img
                    width={130}
                    src={
                      PL_OVL_QH_TLo_LS
                        ? FanFault
                        : PL_QH_TLo_LS
                        ? FanOn
                        : FanOff
                    }
                    alt=""
                    style={{ marginTop: 0, padding: -10 }}
                  />
                  <Typography>Quạt hút thổi lò</Typography>
                </Grid>
                <Grid item xs={4} style={{ textAlign: "center" }}>
                  <img
                    width={130}
                    src={
                      PL_OVL_QH_TLKho ? FanFault : PL_QH_TLKho ? FanOn : FanOff
                    }
                    alt=""
                    style={{ marginTop: 0, padding: -10 }}
                  />
                  <Typography>Quạt hút thổi kho</Typography>
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
// LoSayComponent.propTypes = {
//   tagList: PropTypes.object,
// };
export default LoSayComponent;

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

function LoDotComponent(props) {
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

  const [PL_Man_LD, setPL_Man_LD] = useState(false);
  const [PL_OVL_BTCL_LD, setPL_OVL_BTCL_LD] = useState(false);
  const [PL_Auto_BTCL_LD, setPL_Auto_BTCL_LD] = useState(false);
  const [PL_Hand_VTCL_LD, setPL_Hand_VTCL_LD] = useState(false);
  const [PL_Hand_QH_Up_LD, setPL_Hand_QH_Up_LD] = useState(false);
  const [PL_BTCL_LD, setPL_BTCL_LD] = useState(false);
  const [SCADA_LD, setSCADA_LD] = useState(false);
  const [PL_Auto_VTCL_LD, setPL_Auto_VTCL_LD] = useState(false);
  const [PL_XL1_LD, setPL_XL1_LD] = useState(false);
  const [PL_XL2_LD, setPL_XL2_LD] = useState(false);
  const [PL_OVL_QH_Up_LD, setPL_OVL_QH_Up_LD] = useState(false);
  const [PL_QHMain_LD, setPL_QHMain_LD] = useState(false);
  const [Alarm_XL_LD, setAlarm_XL_LD] = useState(false);
  const [PL_VTCL1_LD, setPL_VTCL1_LD] = useState(false);
  const [PL_QH_Up_LD, setPL_QH_Up_LD] = useState(false);
  const [ALARM_LD, setALARM_LD] = useState(false);
  const [PL_Hand_XL_LD, setPL_Hand_XL_LD] = useState(false);
  const [PL_Hand_BTCL_LD, setPL_Hand_BTCL_LD] = useState(false);
  const [PL_OVL_QHMain_LD, setPL_OVL_QHMain_LD] = useState(false);
  const [PL_Auto_QH_Up_LD, setPL_Auto_QH_Up_LD] = useState(false);
  const [PL_Auto_LD, setPL_Auto_LD] = useState(false);
  const [PL_OVL_VTCL1_LD, setPL_OVL_VTCL1_LD] = useState(false);
  

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  useEffect(() => {
    console.log("rerender kho nghien tho");
    const timer = setInterval(() => {
      console.log("GiuBuiTrungTam ");

      if (typeof window.subcribeTag === "object")
        window.subcribeTag?.forEach((tag) => {
          let value = tag.Value;
          switch (tag.Path) {
            case prefix + "PL_Man_LD":
              setPL_Man_LD(value == "1");
              break;
            case prefix + "PL_OVL_BTCL_LD":
              setPL_OVL_BTCL_LD(value == "1");
              break;
            case prefix + "PL_Auto_BTCL_LD":
              setPL_Auto_BTCL_LD(value == "1");
              break;
            case prefix + "PL_Hand_VTCL_LD":
              setPL_Hand_VTCL_LD(value == "1");
              break;
            case prefix + "PL_Hand_QH_Up_LD":
              setPL_Hand_QH_Up_LD(value == "1");
              break;
            case prefix + "PL_BTCL_LD":
              setPL_BTCL_LD(value == "1");
              break;
            case prefix + "SCADA_LD":
              setSCADA_LD(value == "1");
              break;
            case prefix + "PL_Auto_VTCL_LD":
              setPL_Auto_VTCL_LD(value == "1");
              break;
            case prefix + "PL_XL1_LD":
              setPL_XL1_LD(value == "1");
              break;
            case prefix + "PL_XL2_LD":
              setPL_XL2_LD(value == "1");
              break;
            case prefix + "PL_OVL_QH_Up_LD":
              setPL_OVL_QH_Up_LD(value == "1");
              break;
            case prefix + "PL_QHMain_LD":
              setPL_QHMain_LD(value == "1");
              break;
            case prefix + "Alarm_XL_LD":
              setAlarm_XL_LD(value == "1");
              break;
            case prefix + "PL_VTCL1_LD":
              setPL_VTCL1_LD(value == "1");
              break;
            case prefix + "PL_QH_Up_LD":
              setPL_QH_Up_LD(value == "1");
              break;
            case prefix + "ALARM_LD":
              setALARM_LD(value == "1");
              break;
            case prefix + "PL_Hand_XL_LD":
              setPL_Hand_XL_LD(value == "1");
              break;
            case prefix + "PL_Hand_BTCL_LD":
              setPL_Hand_BTCL_LD(value == "1");
              break;
            case prefix + "PL_OVL_QHMain_LD":
              setPL_OVL_QHMain_LD(value == "1");
              break;
            case prefix + "PL_Auto_QH_Up_LD":
              setPL_Auto_QH_Up_LD(value == "1");
              break;
            case prefix + "PL_Auto_LD":
              setPL_Auto_LD(value == "1");
              break;
            case prefix + "PL_OVL_VTCL1_LD":
              setPL_OVL_VTCL1_LD(value == "1");
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
                    SCADA_LD
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
                    PL_Auto_LD
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
                    PL_Man_LD
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
            border: ALARM_LD ? "5px solid red" : "",
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
                  <Grid item xs={12} style={{ textAlign: "center" }}>
                    <img
                      width={130}
                      src={
                        PL_OVL_BTCL_LD ? MotorFault : PL_BTCL_LD ? MotorOn : MotorOff
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
                          PL_Auto_BTCL_LD
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
                          PL_Hand_BTCL_LD
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
          </CardActionArea>

          <Card>
            <CardHeader
              title={
                <>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="h6">Xy lanh</Typography>
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
                      <Typography variant="h6">Xylanh 1</Typography>
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
                            1
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
                            PL_Hand_XL_LD
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
                          src={Alarm_XL_LD?MotorFault:PL_XL1_LD ? MotorOn : MotorOff}
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
                      <Typography variant="h6">Xylanh 2</Typography>
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
                            1
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
                            PL_Hand_XL_LD
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
                          src={Alarm_XL_LD?MotorFault:PL_XL2_LD ? MotorOn : MotorOff}
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
                      <Typography variant="h6">Vít tải</Typography>
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
                      PL_OVL_VTCL1_LD ? MotorFault : PL_VTCL1_LD ? MotorOn : MotorOff
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
                        PL_Auto_VTCL_LD
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
                        PL_Hand_VTCL_LD
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
                      <Typography variant="h6">Quạt thổi trên</Typography>
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
                    src={PL_OVL_QH_Up_LD ? FanFault : PL_QH_Up_LD ? FanOn : FanOff}
                    alt=""
                    style={{ marginTop: 0, padding: -10 }}
                  />
                </Grid>

                <Grid item xs={6} style={{ textAlign: "start", padding: 5 }}>
                  <div style={{ textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      color="initial"
                      style={{ marginLeft: 0, padding: 5 }}
                      className={
                        PL_Auto_QH_Up_LD
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
                        PL_Hand_QH_Up_LD
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
                      <Typography variant="h6">Quạt thổi chính</Typography>
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
                    src={PL_OVL_QHMain_LD ? FanFault : PL_QHMain_LD ? FanOn : FanOff}
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
// LoDotComponent.propTypes = {
//   tagList: PropTypes.object,
// };
export default LoDotComponent;

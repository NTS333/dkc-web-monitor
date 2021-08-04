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
import {ReactComponent as ReactLogo} from "../../assets/images/Vittai_Full_On.svg"
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

function GiuBuiComponent(props) {
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

  const [Accept, setAccept] = useState(false);
  const [Alarm_HT, setAlarm_HT] = useState(false);
  const [PL_SCADA, setPL_SCADA] = useState(false);
  const [PL_Auto, setPL_Auto] = useState(false);
  const [PL_Manual, setPL_Manual] = useState(false);
  const [PL_AikGB1, setPL_AikGB1] = useState(false);
  const [PL_AikGB2, setPL_AikGB2] = useState(false);
  const [PL_Auto_AikGB1, setPL_Auto_AikGB1] = useState(false);
  const [PL_Auto_AikGB2, setPL_Auto_AikGB2] = useState(false);
  const [PL_Auto_GB, setPL_Auto_GB] = useState(false);
  const [PL_Auto_VTGB, setPL_Auto_VTGB] = useState(false);
  const [PL_GB, setPL_GB] = useState(false);
  const [PL_Hand_AikGB1, setPL_Hand_AikGB1] = useState(false);
  const [PL_Hand_AikGB2, setPL_Hand_AikGB2] = useState(false);
  const [PL_Hand_VTGB, setPL_Hand_VTGB] = useState(false);
  const [PL_Man_GB, setPL_Man_GB] = useState(false);
  const [PL_OVL_AikGB1, setPL_OVL_AikGB1] = useState(false);
  const [PL_OVL_AikGB2, setPL_OVL_AikGB2] = useState(false);
  const [PL_OVL_QHGB, setPL_OVL_QHGB] = useState(false);
  const [PL_OVL_VTGB, setPL_OVL_VTGB] = useState(false);
  const [PL_QHGB, setPL_QHGB] = useState(false);
  const [PL_VTGB, setPL_VTGB] = useState(false);

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
            case prefix + "Alarm_GB":
              setAlarm_HT(value == "1");
              break;
            case prefix + "SCADA_GB":
              setPL_SCADA(value == "1");
              break;
            case prefix + "PL_Auto_GB":
              setPL_Auto(value == "1");
              break;
            case prefix + "PL_Man_GB":
              setPL_Manual(value == "1");
              break;
            case prefix + "PL_AikGB1":
              setPL_AikGB1(value == "1");
              break;
            case prefix + "PL_AikGB2":
              setPL_AikGB2(value == "1");
              break;
            case prefix + "PL_Auto_AikGB1":
              setPL_Auto_AikGB1(value == "1");
              break;
            case prefix + "PL_Auto_AikGB2":
              setPL_Auto_AikGB2(value == "1");
              break;
            case prefix + "PL_Auto_GB":
              setPL_Auto_AikGB2(value == "1");
              break;
            case prefix + "PL_Auto_VTGB":
              setPL_Auto_VTGB(value == "1");
              break;
            case prefix + "PL_GB":
              setPL_GB(value == "1");
              break;
            case prefix + "PL_Hand_AikGB1":
              setPL_Hand_AikGB1(value == "1");
              break;
            case prefix + "PL_Hand_AikGB2":
              setPL_Hand_AikGB2(value == "1");
              break;
            case prefix + "PL_Hand_VTGB":
              setPL_Hand_VTGB(value == "1");
              break;
            case prefix + "PL_Man_GB":
              setPL_Man_GB(value == "1");
              break;
            case prefix + "PL_OVL_AikGB1":
              setPL_OVL_AikGB1(value == "1");
              break;
            case prefix + "PL_OVL_AikGB2":
              setPL_OVL_AikGB2(value == "1");
              break;
            case prefix + "PL_OVL_QHGB":
              setPL_OVL_QHGB(value == "1");
              break;
            case prefix + "PL_OVL_VTGB":
              setPL_OVL_VTGB(value == "1");
              break;
            case prefix + "PL_QHGB":
              setPL_QHGB(value == "1");
              break;
            case prefix + "PL_VTGB":
              setPL_VTGB(value == "1");
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
            border: Alarm_HT ? "5px solid red" : "",
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
                        <Typography variant="h6">Giũ bụi</Typography>
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
                  <img
                    width={130}
                    src={PL_GB ? MotorOn : MotorOff}
                    alt=""
                    style={{ margin: -20, padding: -10 }}
                  />
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
                      <Typography variant="h6">Air lock</Typography>
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
                      <Typography variant="h6">Airlock 1</Typography>
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
                          className={PL_Auto_AikGB1
                            ? classes.status_item__Active
                            : classes.status_item__InActive}
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
                          className={PL_Hand_AikGB1
                            ? classes.status_item__Active
                            : classes.status_item__InActive}
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
                          src={PL_AikGB1 ? AirlockOn : AirlockOff}
                          alt=""
                          style={{background:PL_OVL_AikGB1?'red':''}}
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
                      <Typography variant="h6">Airlock 2</Typography>
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
                          className={PL_Auto_AikGB2
                            ? classes.status_item__Active
                            : classes.status_item__InActive}
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
                          className={PL_Hand_AikGB2
                            ? classes.status_item__Active
                            : classes.status_item__InActive}
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
                          src={PL_AikGB2 ? AirlockOn : AirlockOff}
                          alt=""
                          style={{background:PL_OVL_AikGB2?'red':''}}
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
                    src={PL_OVL_VTGB?MotorFault:PL_VTGB ? MotorOn : MotorOff}
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
                      className={PL_Auto_VTGB
                        ? classes.status_item__Active
                        : classes.status_item__InActive}
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
                      className={PL_Hand_VTGB
                        ? classes.status_item__Active
                        : classes.status_item__InActive}
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
                <Grid item xs={12} style={{ textAlign: "center" }}>
                  <img
                    width={130}
                    src={PL_OVL_QHGB?MotorFault:PL_QHGB ? MotorOn : MotorOff}
                    alt=""
                    style={{ margin: -20, padding: -10 }}
                  />
                </Grid>

                {/* <Grid item xs={6} style={{ textAlign: "start", padding: 5 }}>
                  <div style={{ textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      color="initial"
                      style={{ marginLeft: 0, padding: 5, background: "green" }}
                      className={PL_Auto_QHGB
                        ? classes.status_item__Active
                        : classes.status_item__InActive}
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
                      className={PL_Hand_VTGB
                        ? classes.status_item__Active
                        : classes.status_item__InActive}
                    >
                      Hand
                    </Typography>
                  </div>
                </Grid> */}
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
// GiuBuiComponent.propTypes = {
//   tagList: PropTypes.object,
// };
export default GiuBuiComponent;

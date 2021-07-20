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
      padding:7
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
      color: "cyan",
      // color: "gray",
      [theme.breakpoints.down("sm")]: {
        marginLeft: 0,
      },
      marginLeft: 30,
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

function KhoNghienTho(props) {
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

  const [test, setTest] = useState(false)
  const [Accept, setAccept] = useState(false);
  const [Alarm_HT, setAlarm_HT] = useState(false);
  const [PL_SCADA, setPL_SCADA] = useState(false);
  const [PL_Auto, setPL_Auto] = useState(false);
  const [PL_Manual, setPL_Manual] = useState(false);
  const [PL_VT, setPL_VT] = useState(false);
  const [PL_VTTG, setPL_VTTG] = useState(false);
  const [PL_Qhut, setPL_Qhut] = useState(false);
  const [PL_FW_MN, setPL_FW_MN] = useState(false);
  const [PL_RV_MN, setPL_RV_MN] = useState(false);
  const [PL_OVL_VT, setPL_OVL_VT] = useState(false);
  const [PL_OVL_VTTG, setPL_OVL_VTTG] = useState(false);
  const [PL_OVL_MN, setPL_OVL_MN] = useState(false);
  const [PL_OVL_Qhut, setPL_OVL_Qhut] = useState(false);
  const [Result_Hz_VT, setResult_Hz_VT] = useState(null);
  const [Current_Digital_MN, setCurrent_Digital_MN] = useState(null);
  const [Current_Digital_VT, setCurrent_Digital_VT] = useState(null);
  const [Current_Digital_QH, setCurrent_Digital_QH] = useState(null);
  const [TempLeft_MN, setTempLeft_MN] = useState(null);
  const [TempRight_MN, setTempRight_MN] = useState(null);
  const [TempLeft_QH, setTempLeft_QH] = useState(null);
  const [TempRight_QH, setTempRight_QH] = useState(null);
  const handleChange = (event, nextView) => {
    setView(nextView);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('May nghien tinh ');
      console.log(prefix)
      window.subcribeTag && window.subcribeTag?.forEach(tag => {
        let value = tag.Value
        switch (tag.Path) {
          case prefix + 'Alarm_HT':
            setAlarm_HT(value == "1");
            break;
          case prefix + 'SCADA_MN':
            setPL_SCADA(value == "1");
            break;
          case prefix + 'PL_Auto_MN':
            setPL_Auto(value == "1");
            break;
          case prefix + 'PL_Man_MN':
            setPL_Manual(value == "1");
            break;
          case prefix + 'PL_FW_MN':
            setPL_FW_MN(value == "1");
            break;
          case prefix + 'PL_RV_MN':
            setPL_RV_MN(value == "1");
            break;
          case prefix + 'PL_VT':
            setPL_VT(value == '1')
            break;
          case prefix + 'PL_VTTG':
            setPL_VTTG(value == '1')
            break;
          case prefix + 'PL_QH':
            setPL_Qhut(value == '1')
            break;
          case prefix + 'PL_OVL_MN':
            setPL_OVL_MN(value == '1')
            break;
          case prefix + 'PL_OVL_VT':
            setPL_OVL_VT(value == '1')
            break;
          case prefix + 'PL_OVL_VTTG':
            setPL_OVL_VTTG(value == '1')
            break;
          case prefix + 'PL_OVL_QH':
            setPL_OVL_Qhut(value == '1')
            break;
          case prefix + 'Current_Digital_MN':
            setCurrent_Digital_MN(value)
            break;
          case prefix + 'Current_Digital_VT':
            setCurrent_Digital_VT(value)
            break;
          case prefix + 'Current_Digital_QH':
            setCurrent_Digital_QH(value)
            break;
          case prefix + 'Hz_VT':
            setResult_Hz_VT(value)
            break;
          case prefix + 'Tem_Left_MN':
            setTempLeft_MN(value)
            break;
          case prefix + 'Tem_Left_QH':
            setTempLeft_QH(value)
            break;
          case prefix + 'Tem_Right_MN':
            setTempRight_MN(value)
            break;
          case prefix + 'Tem_Right_QH':
            setTempRight_QH(value)
            break;
          default:
            break;
        }
        console.log(tag)
      });


    }, 1300);

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
                    !PL_SCADA
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
                    !PL_Auto
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
                    !PL_Manual
                      ? classes.status_item__Active
                      : classes.status_item__InActive
                  }
                  id={id_man}
                >
                  Manual
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
                          ></ArrowForwardIcon>
                          <Typography
                            variant="h6"
                            color="initial"
                            style={{ marginRight: 20, marginTop: -10 }}
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
                          ></ArrowForwardIcon>
                          <Typography
                            variant="h6"
                            color="initial"
                            style={{ marginRight: 20, marginTop: -10 }}
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
                          ></ArrowForwardIcon>
                          <Typography
                            variant="h6"
                            color="initial"
                            style={{ marginRight: 20, marginTop: -10 }}
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
                          ></ArrowForwardIcon>
                          <Typography
                            variant="h6"
                            color="initial"
                            style={{ marginRight: 20, marginTop: -10 }}
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
                  marginBottom:-10
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
                        ></AutorenewIcon>
                        <Typography
                          variant="h6"
                          color="initial"
                          style={{ marginRight: 20, marginTop: -10 }}
                        >
                          Thuận
                        </Typography>
                      </div>
                    </Grid>
                    <Grid xs={12}>
                      <div style={{ textAlign: "center" ,marginTop:-30}}>
                        {/* <LoopIcon className={classes.xylanh_icon_Back}></LoopIcon>
                     */}
                        <img width={130} src={VTFull_Off} alt="" style={{transform:'rotate(270deg)'}}/>
                      </div>
                      <div style={{ textAlign: "center", marginBottom: 10,marginTop:-30 }}>
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
                        ></AutorenewIcon>
                        <Typography
                          variant="h6"
                          color="initial"
                          style={{ marginRight: 20, marginTop: -10 }}
                        >
                          Thuận
                        </Typography>
                      </div>
                    </Grid>
                    <Grid xs={12}>
                      <div style={{ textAlign: "center",marginTop:-30 }}>
                        {/* <LoopIcon className={classes.xylanh_icon_Back}></LoopIcon>
                     */}
                        <img width={130} src={VTFull_Off} alt="" style={{transform:'rotate(270deg)'}}/>
                      </div>
                      <div style={{ textAlign: "center", marginBottom: 10 ,marginTop:-30}}>
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
                        src={VTaiOff}
                        className={classes.xylanh_icon_Back}
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
                     
                        <img width={130} src={VTFull_Off} alt="" style={{transform:'rotate(270deg)'}}/>
                      
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
                  marginBottom:-10
                }}
              >
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant='h6'>Cylone 1</Typography>
                    </Grid>
                    <Grid xs={12}>
                      <div style={{ textAlign: "center" ,marginTop:-30}}>
                        {/* <LoopIcon className={classes.xylanh_icon_Back}></LoopIcon>
                     */}
                        <img width={130} src={VTFull_Off} alt="" style={{transform:'rotate(270deg)'}}/>
                      </div>
                      <div style={{ textAlign: "center", marginBottom: 0,marginTop:-30 }}>
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
                      <div style={{ textAlign: "center" ,marginTop:-30}}>
                        {/* <LoopIcon className={classes.xylanh_icon_Back}></LoopIcon>
                     */}
                        <img width={130} src={VTFull_Off} alt="" style={{transform:'rotate(270deg)'}}/>
                      </div>
                       <div style={{ textAlign: "center", marginBottom: 0,marginTop:-30 }}>
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
                  marginBottom:-10
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
                        <img width={130} src={BDauOff} alt="" />
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
                        <img width={130} src={BDauOff} alt="" />
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
// KhoNghienTho.propTypes = {
//   tagList: PropTypes.object,
// };
export default KhoNghienTho;

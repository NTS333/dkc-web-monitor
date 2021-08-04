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
import MtOn from "../../assets/images/Motor_On.svg";
import MtOff from "../../assets/images/Motor_Off.svg";
import MtFault from '../../assets/images/Motor_Fault.svg'

import ControlPanel_MayNghien from "./ControlPanel_MayNghien";
import { useRecoilValue } from "recoil";
import { tagsFileState, tagsState } from "../../stateManager";
import LoopIcon from "@material-ui/icons/Loop";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import PropTypes from "prop-types";
import { object } from "yup";


const useStyles = makeStyles({
  card_root: {
    maxWidth: 500,
    width: "auto",
    minWidth: 350,
    // minWidth:480
    background: '#18191a',
    // borderRadius: 12,
    padding: 0
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
    margin: 0,
    // padding: 5,
    border: 'solid gray 1px',
    marginTop:-30
  },
  card_header: {
    textAlign: "center",
    textTransform: "uppercase",
    backgroundColor: "#123",
    color: 'white',
    // paddingTop:10,
    marginTop: 0,
    fontSize: '1rem'
  },

  btnTogle_selected: {
    backgroundColor: "orange !important",
    color: "#333 !important",
  },
  status_container: {
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    padding: 0,

    // marginRight:1
  },
  status_item__Active: {
    // border:'.5px solid #333',
    padding: 10,
    margin: 5,
    background: "#b28900",
    textAlign: 'center'
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
    padding: 10,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  // statusMachine:{
  //   backgroundColor:'red',
  //     '&:selected':{
  //         backgroundColor:'black'
  //     }
  // }
});

function MaynghienTho1(props) {
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
  const [PL_Btai, setPL_Btai] = useState(false);
  const [PL_BTT, setPL_BTT] = useState(false);
  const [PL_Qhut, setPL_Qhut] = useState(false);
  const [PL_FW_MN, setPL_FW_MN] = useState(false);
  const [PL_RV_MN, setPL_RV_MN] = useState(false);
  const [PL_OVL_Btai, setPL_OVL_Btai] = useState(false);
  const [PL_OVL_BTT, setPL_OVL_BTT] = useState(false);
  const [PL_OVL_MN, setPL_OVL_MN] = useState(false);
  const [PL_OVL_Qhut, setPL_OVL_Qhut] = useState(false);
  const [Result_Hz_BT1, setResult_Hz_BT1] = useState(null);
  const [Current_Digital_MN, setCurrent_Digital_MN] = useState(null);
  const [Current_Digital_BT, setCurrent_Digital_BT] = useState(null);
  const [Current_Digital_QH, setCurrent_Digital_QH] = useState(null);
  const [TempLeft_MN, setTempLeft_MN] = useState(null);
  const [TempRight_MN, setTempRight_MN] = useState(null);
  const [TempLeft_QH, setTempLeft_QH] = useState(null);
  const [TempRight_QH, setTempRight_QH] = useState(null);
  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  // const getTagValue = async () => {
  //   // console.log(tagName)
  //   // const tag = tags.find((t) => t.Path == tagName);
  //   // // console.log(tags);
  //   // if (tag) {

  //   //    setisON(tag.Properties.Value == "1");
  //   // }


  //   // const tagList = readTagFile();

  //   let keys = tagList && Object.keys(tagList);
  //   // console.log(keys);
  //   keys && keys.forEach(async (key) => {
  //     let tagName = key;
  //     let tagPath = tagList[key];
  //     let tag = tags.find((t) => t.Path == tagPath);
  //     if (typeof tag !== "undefined" && tag !== null) {
  //       let tagValue = await tag.Properties.Value;

  //       if (tagValue) {
  //         switch (tagName) {
  //           case tagListProp?.Accept:
  //             setAccept(tagValue == "1");
  //             break;
  //           case tagListProp?.PL_Auto:
  //             setPL_Auto(tagValue == "1");
  //             break;
  //           case tagListProp?.PL_Manual:
  //             setPL_Manual(tagValue == "1");
  //             break;
  //           case tagListProp?.PL_FW_MN:
  //             setPL_FW_MN(tagValue == "1");
  //             break;
  //           case tagListProp?.PL_RV_MN:
  //             setPL_RV_MN(tagValue == "1");
  //             break;
  //           case tagListProp?.PL_Btai:
  //             setPL_Btai(tagValue == "1");
  //             break;
  //           case tagListProp?.PL_BTT:
  //             setPL_BTT(tagValue == "1");
  //             break;
  //           case tagListProp?.PL_Qhut:
  //             setPL_Qhut(tagValue == "1");
  //             break;
  //           case tagListProp?.PL_OVL_MN:
  //             setPL_OVL_MN(tagValue == "1");
  //             break;
  //           case tagListProp?.PL_OVL_Btai:
  //             setPL_OVL_Btai(tagValue == "1");
  //             break;
  //           case tagListProp?.PL_OVL_Qhut:
  //             setPL_OVL_Qhut(tagValue == "1");
  //             break;
  //           case tagListProp?.PL_OVL_BTT:
  //             setPL_OVL_BTT(tagValue == "1");
  //             break;
  //           case tagListProp?.Alarm_HT:
  //             setAlarm_HT(tagValue == "1");
  //             break;
  //           case tagListProp?.Resuft_Hz_BT1:
  //             setResult_Hz_BT1(tagValue);
  //             break;
  //           case tagListProp?.Current_Digital_MN:
  //             setCurrent_Digital_MN(tagValue);
  //             break;
  //           case tagListProp?.Current_Digital_QH1:
  //             setCurrent_Digital_QH1(tagValue);
  //             break;
  //           default:
  //             // setResult_Hz_BT1(tagValue);
  //             break;
  //         }

  //         // tagObj[tagName] = tagValue;
  //         // Object.assign(tagObj, tagObj);
  //         // await setNTho1Tags(tagObj);
  //         // await setNTho1Tags(prev=>({...prev,tagObj}));
  //       }
  //       // console.log(tagObj);
  //       // alert(tagObj)
  //     }
  //   });
  //   //  await setNTho1Tags(prev=>({...prev,tagObj}));
  //   // await setNTho1Tags(tagObj);


  //   // console.log(tagObj);
  //   // console.log(tagObj);
  //   // //  console.log(tag&& tag.Value);
  //   //
  // };
  // useEffect(() => {
  //   getTagValue();
  //   //  console.log(NTho1Tags);
  // }, [tags]);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('May nghien tho 1');
      console.log(prefix)
      if(typeof(window.subcribeTag) === 'object')
      window.subcribeTag?.forEach(tag => {
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
          case prefix + 'PL_BT':
            setPL_Btai(value == '1')
            break;
          case prefix + 'PL_BTT':
            setPL_BTT(value == '1')
            break;
          case prefix + 'PL_QH':
            setPL_Qhut(value == '1')
            break;
          case prefix + 'PL_OVL_MN':
            setPL_OVL_MN(value == '1')
            break;
          case prefix + 'PL_OVL_BT':
            setPL_OVL_Btai(value == '1')
            break;
          case prefix + 'PL_OVL_BTT':
            setPL_OVL_BTT(value == '1')
            break;
          case prefix + 'PL_OVL_QH':
            setPL_OVL_Qhut(value == '1')
            break;
          case prefix + 'Current_Digital_MN':
            setCurrent_Digital_MN(value)
            break;
          case prefix + 'Current_Digital_BT':
            setCurrent_Digital_BT(value)
            break;
          case prefix + 'Current_Digital_QH':
            setCurrent_Digital_QH(value)
            break;
          case prefix + 'Hz_BT':
            setResult_Hz_BT1(value)
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
      });
    }, 3000);
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
        style={{ border: Alarm_HT ? '5px solid red' : '' }}
      >
        <CardHeader
          title={
            <Typography variant='h6' className={classes.title}>{title}</Typography>
          }

          subheader={
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

              </div>
            </>
            // <ToggleButtonGroup orientation="horizontal" exclusive>
            //   <ToggleButton
            //     disableFocusRipple = {false}
            //     value={auto}
            //     selected={auto}
            //     aria-label="auto"
            //     onClick={handleToggle_Auto}
            //     classes={{
            //       selected: classes.btnTogle_selected,
            //     }}
            //     id={id_auto}
            //   >
            //     Auto
            //   </ToggleButton>
            //   <ToggleButton
            //    value={manual}
            //   selected={manual}
            //   aria-label="manual"
            //    onClick={handleToggle_Manual}
            //    classes={{
            //      selected: classes.btnTogle_selected,
            //    }}
            //    id={id_man}
            //   >
            //     Manual
            //   </ToggleButton>
            // </ToggleButtonGroup>
          }
          classes={{
            root: classes.cardheader_root,
            title: classes.card_title,
          }}
        ></CardHeader>
        <CardContent >
          <CardActionArea
            onClick={handleOpenCtrPanel}
            className={classes.card_actionArea}
          >
            {/* {tags.map((tag)=>(tag.Name))} */}
            {/* <Typography variant="h1" color="initial">{tags}</Typography> */}
            <Grid container justify="center" alignItems="center" wrap="wrap">
              <Grid item xs={6} style={{ textAlign: "center" }}>
                <CardMedia>
                  <img
                    src={PL_OVL_MN ? MtFault : (PL_FW_MN || PL_RV_MN ? MtOn : MtOff)}
                    width="50%"
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
                          color: PL_RV_MN ? "cyan" : "#333",
                        }}
                      ></LoopIcon>
                      <Typography style={{ color: '#c1ecaa' }}>
                        Nghịch
                      </Typography>
                    </div>
                    <div>
                      <AutorenewIcon
                        style={{
                          fontSize: "2.5rem", margin: 0,
                          color: PL_FW_MN ? "cyan" : "#333",
                        }}
                      ></AutorenewIcon>
                      <Typography style={{ color: '#c1ecaa' }}>
                        Thuận
                        {test.toString()}
                      </Typography>
                    </div>
                  </div>
                </CardMedia>
                <Typography style={{ color: "#c1ecaa" }}>
                  Đ/cơ máy nghiền
                </Typography>
              </Grid>
              <Grid item xs={6} style={{ textAlign: "center" }}>
                <CardMedia>
                  <img
                    src={PL_OVL_Btai ? MtFault : (PL_Btai ? MtOn : MtOff)}
                    width="50%"
                    height="50px"
                    aria-valuetext="Control_NTho1"
                  ></img>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      display: 'none'
                    }}
                  >
                    <div>
                      <LoopIcon style={{ fontSize: "2.5rem", margin: 0 }}>
                        Chạy thuận
                      </LoopIcon>
                      <Typography variant="h6" color="initial">
                        Nghịch
                      </Typography>
                    </div>
                    <div>
                      <AutorenewIcon
                        style={{ fontSize: "2.5rem", margin: 0 }}
                      ></AutorenewIcon>
                      <Typography variant="h6" color="initial">
                        Thuận
                      </Typography>
                    </div>
                  </div>
                </CardMedia>
                <Typography style={{ color: "#c1ecaa" }}>
                  Đ/cơ băng tải
                </Typography>
              </Grid>
              <Grid item xs={6} style={{ textAlign: "center", marginTop: 10 }}>
                <CardMedia>
                  <img
                    src={PL_OVL_BTT ? MtFault : (PL_BTT ? MtOn : MtOff)}
                    width="50%"
                    height="50px"
                  ></img>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      display: 'none'
                    }}
                  >
                    <div>
                      <LoopIcon style={{ fontSize: "2.5rem", margin: 0 }}>
                        Chạy thuận
                      </LoopIcon>
                      <Typography variant="h6" color="initial">
                        Nghịch
                      </Typography>
                    </div>
                    <div>
                      <AutorenewIcon
                        style={{ fontSize: "2.5rem", margin: 0 }}
                      ></AutorenewIcon>
                      <Typography variant="h6" color="initial">
                        Thuận
                      </Typography>
                    </div>
                  </div>
                </CardMedia>
                <Typography style={{ color: "#c1ecaa" }}>
                  Đ/cơ băng tải từ
                </Typography>
              </Grid>
              <Grid item xs={6} style={{ textAlign: "center", marginTop: 10 }}>
                <CardMedia>
                  <img
                    src={PL_OVL_Qhut ? MtFault : (PL_Qhut ? MtOn : MtOff)}
                    width="50%"
                    height="50px"
                  ></img>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      display: 'none'
                    }}
                  >
                    <div>
                      <LoopIcon style={{ fontSize: "2.5rem", margin: 0 }}>
                        Chạy thuận
                      </LoopIcon>
                      <Typography variant="h6" color="initial">
                        Nghịch
                      </Typography>
                    </div>
                    <div>
                      <AutorenewIcon
                        style={{ fontSize: "2.5rem", margin: 0 }}
                      ></AutorenewIcon>
                      <Typography variant="h6" color="initial">
                        Thuận
                      </Typography>
                    </div>
                  </div>
                </CardMedia>
                <Typography style={{ color: "#c1ecaa" }}>
                  Đ/cơ quạt hút
                </Typography>
              </Grid>
            </Grid>
          </CardActionArea>
          <Box m={1}></Box>
          <Card>
            <CardHeader
              title="Máy nghiền"
              className={classes.card_header}
            ></CardHeader>
            <CardContent>
              <Grid container justify="center" alignItems="center" wrap="wrap">
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Typography>Dòng motor</Typography>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center", background: '#fffa', color: 'black', height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography><b>{Current_Digital_MN}</b> A</Typography>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Typography>Nhiệt độ gối bi trái</Typography>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center", background: '#fffa', color: 'black', height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography><b>{TempLeft_MN}</b> oC</Typography>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Typography>Nhiệt độ gối bi phải</Typography>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center", background: '#fffa', color: 'black', height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography><b>{TempRight_MN}</b> oC</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card>
            <CardHeader
              title="Cấp liệu"
              className={classes.card_header}
            ></CardHeader>
            <CardContent>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                wrap="wrap"
                spacing={1}
              >
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Typography>Dòng motor</Typography>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center", background: '#fffa', color: 'black', height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography ><b>{Current_Digital_BT}</b> A</Typography>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Typography>Tần số</Typography>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center", background: '#fffa', color: 'black', height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography ><b>{Result_Hz_BT1}</b> Hz</Typography>
                </Grid>

              </Grid>
            </CardContent>
          </Card>
          <Card>
            <CardHeader
              title="Quạt hút"
              className={classes.card_header}
            ></CardHeader>
            <CardContent>
              <Grid container justify="center" alignItems="center" wrap="wrap">
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Typography>Dòng motor</Typography>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center", background: '#fffa', color: 'black', height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography><b>{Current_Digital_QH}</b> A</Typography>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Typography>Nhiệt độ gối bi trái</Typography>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center", background: '#fffa', color: 'black', height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography><b>{TempLeft_QH}</b> oC</Typography>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Typography>Nhiệt độ gối bi phải</Typography>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center", background: '#fffa', color: 'black', height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography><b>{TempRight_QH}</b> oC</Typography>
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
// MaynghienTho1.propTypes = {
//   tagList: PropTypes.object,
// };
export default MaynghienTho1;

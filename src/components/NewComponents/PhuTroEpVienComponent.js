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
import BDauFault from "../../assets/images/Pump_Fault.svg";
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

function PhuTroEpVienComponent(props) {
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

  const [PL_Man_PTEV, setPL_Man_PTEV] = useState(false);
  const [PL_Auto_PTEV, setPL_Auto_PTEV] = useState(false);
  const [SCADA_PTEV, setSCADA_PTEV] = useState(false);
  const [Alarm_PTEV, setAlarm_PTEV] = useState(false);

  //Băng tải
  const [Current_Digital_BTThap_PT6, setCurrent_Digital_BTThap_PT6] =
    useState(null);
  const [PL_Auto_BTThap_PT6, setPL_Auto_BTThap_PT6] = useState(false);
  const [PL_Hand_BTThap_PT6, setPL_Hand_BTThap_PT6] = useState(false);
  const [PL_OVL_BTThap_PT6, setPL_OVL_BTThap_PT6] = useState(false);
  const [PL_BTThap_PT6, setPL_BTThap_PT6] = useState(false);

  const [PL_BTCL_PT1, setPL_BTCL_PT1] = useState(false);
  const [PL_OVL1_BTCL_PT1, setPL_OVL1_BTCL_PT1] = useState(false);
  const [Current_Digital_BTCL_PT1, setCurrent_Digital_BTCL_PT1] =
    useState(null);

  const [PL_BTRV_PT3, setPL_BTRV_PT3] = useState(false);
  const [PL_OVL_BTRV_PT3, setPL_OVL_BTRV_PT3] = useState(false);

  const [PL_BTT_PT4, setPL_BTT_PT4] = useState(false);
  const [PL_OVL_BTT_PT4, setPL_OVL_BTT_PT4] = useState(false);

  const [PL_BTTP_PT11, setPL_BTTP_PT11] = useState(false);
  const [PL_OVL_BTTP_PT11, setPL_OVL_BTTP_PT11] = useState(false);

  //Vít tải

  const [PL_OVL_VTHA, setPL_OVL_VTHA] = useState(false);
  const [PL_VTHA, setPL_VTHA] = useState(false);

  const [PL_Auto_VTLL_PT10, setPL_Auto_VTLL_PT10] = useState(false);
  const [PL_Hand_VTLL_PT10, setPL_Hand_VTLL_PT10] = useState(false);
  const [PL_OVL_VTLL_PT10, setPL_OVL_VTLL_PT10] = useState(false);
  const [PL_VTLL_PT10, setPL_VTLL_PT10] = useState(false);

  //Airlock
  const [PL_Auto_AirLock_LL, setPL_Auto_AirLock_LL] = useState(false);
  const [PL_Hand_AirLock_HA, setPL_Hand_AirLock_HA] = useState(false);
  const [PL_AirLock_HA, setPL_AirLock_HA] = useState(false);
  const [PL_AirLock_LL, setPL_AirLock_LL] = useState(false);

  const [PL_OVL_AirLock_HA, setPL_OVL_AirLock_HA] = useState(false);
  const [PL_OVL_AirLock_LL, setPL_OVL_AirLock_LL] = useState(false);
  const [PL_Auto_AirLock_HA, setPL_Auto_AirLock_HA] = useState(false);
  const [PL_Hand_AirLock_LL, setPL_Hand_AirLock_LL] = useState(false);

  const [PL_Auto_AirThap_PT7, setPL_Auto_AirThap_PT7] = useState(false);
  const [PL_Hand_AirThap_PT7, setPL_Hand_AirThap_PT7] = useState(false);
  const [PL_AirThap_PT7, setPL_AirThap_PT7] = useState(false);
  const [PL_OVL_AirThap_PT7, setPL_OVL_AirThap_PT7] = useState(false);

  //Quạt hút
  const [PL_Hand_QH_HA, setPL_Hand_QH_HA] = useState(false);
  const [PL_Auto_QH_HA, setPL_Auto_QH_HA] = useState(false);
  const [Current_Digital_QH_PT9, setCurrent_Digital_QH_PT9] = useState(null);
  const [PL_QH_HA, setPL_QH_HA] = useState(false);
  const [Current_Digital_QH_HA, setCurrent_Digital_QH_HA] = useState(null);
  const [PL_OVL_QH_PT9, setPL_OVL_QH_PT9] = useState(false);
  const [PL_QH_PT9, setPL_QH_PT9] = useState(false);
  const [PL_OVL_QH_HA, setPL_OVL_QH_HA] = useState(false);

  //Sàn lồng
  const [PL_Auto_San_PT8, setPL_Auto_San_PT8] = useState(false);
  const [PL_San_PT8, setPL_San_PT8] = useState(false);
  const [PL_OVL_San_PT8, setPL_OVL_San_PT8] = useState(false);
  const [Current_Digital_San_PT8, setCurrent_Digital_San_PT8] = useState(null);
  const [PL_Hand_San_PT8, setPL_Hand_San_PT8] = useState(false);

  //Bơm dầu
  const [PL_Pump_PT2, setPL_Pump_PT2] = useState(false);
  const [PL_OVL_Pump_PT2, setPL_OVL_Pump_PT2] = useState(false);
  const [PL_FW_Vavle_PT2, setPL_FW_Vavle_PT2] = useState(false);
  const [PL_RV_Vavle_PT2, setPL_RV_Vavle_PT2] = useState(false);
  const [PL_Hand_Pump_PT2, setPL_Hand_Pump_PT2] = useState(false);
  const [PL_Auto_Pump_PT2, setPL_Auto_Pump_PT2] = useState(false);
  const [Current_Digital_Pump_PT2, setCurrent_Digital_Pump_PT2] =
    useState(null);

  const [PL_Pump_PT5, setPL_Pump_PT5] = useState(false);
  const [PL_OVL_Pump_PT5, setPL_OVL_Pump_PT5] = useState(false);
  const [PL_RV_Vavle_PT5, setPL_RV_Vavle_PT5] = useState(false);
  const [PL_FW_Vavle_PT5, setPL_FW_Vavle_PT5] = useState(false);
  const [PL_Hand_Pump_PT5, setPL_Hand_Pump_PT5] = useState(false);
  const [PL_Auto_Pump_PT5, setPL_Auto_Pump_PT5] = useState(false);
  const [Current_Digital_Pump_PT5, setCurrent_Digital_Pump_PT5] =
    useState(null);
  //Cooler
  const [PL_Man_Cooler, setPL_Man_Cooler] = useState(false);
  const [PL_Auto_Cooler, setPL_Auto_Cooler] = useState(false);
  const [LOW_LV_Cooler, setLOW_LV_Cooler] = useState(false);
  const [HI_LV_Cooler, setHI_LV_Cooler] = useState(false);

  //Khối lượng cân
  const [KLCanB, setKLCanB] = useState(false);
  const [KLCanA, setKLCanA] = useState(false);
  const [KLCanATotal, setKLCanATotal] = useState(false);
  const [KLCanBTotal, setKLCanBTotal] = useState(false);
  //Bin EV
  const [SCADA_BIN_EV, setSCADA_BIN_EV] = useState(false);
  const [LOW_LV1_Bin_EV, setLOW_LV1_Bin_EV] = useState(false);
  const [LOW_LV2_Bin_EV, setLOW_LV2_Bin_EV] = useState(false);
  const [PL_Man_BIN_EV, setPL_Man_BIN_EV] = useState(false);
  const [PL_Auto_BIN_EV, setPL_Auto_BIN_EV] = useState(false);
  const [ALARM_BIN_EV, setALARM_BIN_EV] = useState(false);
  const [HI_LV_Bin_TP, setHI_LV_Bin_TP] = useState(false);
  const [HI_LV_Bin_EV, setHI_LV_Bin_EV] = useState(false);

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
      console.log("Phu tro ep vien");

      if (typeof window.subcribeTag === "object")
        window.subcribeTag?.forEach((tag) => {
          let value = tag.Value;
          switch (tag.Path) {
            case prefix + "PL_Man_PTEV":
              setPL_Man_PTEV(value == "1");
              break;
            case prefix + "PL_Auto_PTEV":
              setPL_Auto_PTEV(value == "1");
              break;
            case prefix + "SCADA_PTEV":
              setSCADA_PTEV(value == "1");
              break;
            case prefix + "Alarm_PTEV":
              setAlarm_PTEV(value == "1");
              break;

            case prefix + "Current_Digital_BTThap_PT6":
              setCurrent_Digital_BTThap_PT6(value);
              break;
            case prefix + "PL_Auto_BTThap_PT6":
              setPL_Auto_BTThap_PT6(value == "1");
              break;
            case prefix + "PL_Hand_BTThap_PT6":
              setPL_Hand_BTThap_PT6(value == "1");
              break;
            case prefix + "PL_OVL_BTThap_PT6":
              setPL_OVL_BTThap_PT6(value == "1");
              break;
            case prefix + "PL_BTThap_PT6":
              setPL_BTThap_PT6(value == "1");
              break;
            case prefix + "PL_BTCL_PT1":
              setPL_BTCL_PT1(value == "1");
              break;
            case prefix + "PL_OVL1_BTCL_PT1":
              setPL_OVL1_BTCL_PT1(value == "1");
              break;
            case prefix + "Current_Digital_BTCL_PT1":
              setCurrent_Digital_BTCL_PT1(value);
              break;
            case prefix + "PL_BTRV_PT3":
              setPL_BTRV_PT3(value == "1");
              break;
            case prefix + "PL_OVL_BTRV_PT3":
              setPL_OVL_BTRV_PT3(value == "1");
              break;
            case prefix + "PL_BTT_PT4":
              setPL_BTT_PT4(value == "1");
              break;
            case prefix + "PL_OVL_BTT_PT4":
              setPL_OVL_BTT_PT4(value == "1");
              break;
            case prefix + "PL_BTTP_PT11":
              setPL_BTTP_PT11(value == "1");
              break;
            case prefix + "PL_OVL_BTTP_PT11":
              setPL_OVL_BTTP_PT11(value == "1");
              break;

            case prefix + "PL_OVL_VTHA":
              setPL_OVL_VTHA(value == "1");
              break;
            case prefix + "PL_VTHA":
              setPL_VTHA(value == "1");
              break;
            case prefix + "PL_Auto_VTLL_PT10":
              setPL_Auto_VTLL_PT10(value == "1");
              break;
            case prefix + "PL_Hand_VTLL_PT10":
              setPL_Hand_VTLL_PT10(value == "1");
              break;
            case prefix + "PL_OVL_VTLL_PT10":
              setPL_OVL_VTLL_PT10(value == "1");
              break;
            case prefix + "PL_VTLL_PT10":
              setPL_VTLL_PT10(value == "1");
              break;

            case prefix + "PL_Auto_AirLock_LL":
              setPL_Auto_AirLock_LL(value == "1");
              break;
            case prefix + "PL_Hand_AirLock_HA":
              setPL_Hand_AirLock_HA(value == "1");
              break;
            case prefix + "PL_AirLock_HA":
              setPL_AirLock_HA(value == "1");
              break;
            case prefix + "PL_AirLock_LL":
              setPL_AirLock_LL(value == "1");
              break;
            case prefix + "PL_OVL_AirLock_HA":
              setPL_OVL_AirLock_HA(value == "1");
              break;
            case prefix + "PL_OVL_AirLock_LL":
              setPL_OVL_AirLock_LL(value == "1");
              break;
            case prefix + "PL_Auto_AirLock_HA":
              setPL_Auto_AirLock_HA(value == "1");
              break;
            case prefix + "PL_Hand_AirLock_LL":
              setPL_Hand_AirLock_LL(value == "1");
              break;
            case prefix + "PL_Auto_AirThap_PT7":
              setPL_Auto_AirThap_PT7(value == "1");
              break;
            case prefix + "PL_Hand_AirThap_PT7":
              setPL_Hand_AirThap_PT7(value == "1");
              break;
            case prefix + "PL_AirThap_PT7":
              setPL_AirThap_PT7(value == "1");
              break;
            case prefix + "PL_OVL_AirThap_PT7":
              setPL_OVL_AirThap_PT7(value == "1");
              break;

            case prefix + "PL_Hand_QH_HA":
              setPL_Hand_QH_HA(value == "1");
              break;
            case prefix + "PL_Auto_QH_HA":
              setPL_Auto_QH_HA(value == "1");
              break;
            case prefix + "Current_Digital_QH_PT9":
              setCurrent_Digital_QH_PT9(value);
              break;
            case prefix + "PL_QH_HA":
              setPL_QH_HA(value == "1");
              break;
            case prefix + "Current_Digital_QH_HA":
              setCurrent_Digital_QH_HA(value);
              break;
            case prefix + "PL_OVL_QH_PT9":
              setPL_OVL_QH_PT9(value == "1");
              break;
            case prefix + "PL_QH_PT9":
              setPL_QH_PT9(value == "1");
              break;
            case prefix + "PL_OVL_QH_HA":
              setPL_OVL_QH_HA(value == "1");
              break;

            case prefix + "PL_Auto_San_PT8":
              setPL_Auto_San_PT8(value == "1");
              break;
            case prefix + "PL_San_PT8":
              setPL_San_PT8(value == "1");
              break;
            case prefix + "PL_OVL_San_PT8":
              setPL_OVL_San_PT8(value == "1");
              break;
            case prefix + "Current_Digital_San_PT8":
              setCurrent_Digital_San_PT8(value);
              break;
            case prefix + "PL_Hand_San_PT8":
              setPL_Hand_San_PT8(value == "1");
              break;

            case prefix + "PL_Pump_PT2":
              setPL_Pump_PT2(value == "1");
              break;
            case prefix + "PL_FW_Vavle_PT2":
              setPL_FW_Vavle_PT2(value == "1");
              break;
            case prefix + "PL_RV_Vavle_PT2":
              setPL_RV_Vavle_PT2(value == "1");
              break;
            case prefix + "PL_OVL_Pump_PT2":
              setPL_OVL_Pump_PT2(value == "1");
              break;
            case prefix + "PL_Hand_Pump_PT2":
              setPL_Hand_Pump_PT2(value == "1");
              break;
            case prefix + "PL_Auto_Pump_PT2":
              setPL_Auto_Pump_PT2(value == "1");
              break;
            case prefix + "PL_Pump_PT5":
              setPL_Pump_PT5(value == "1");
              break;
            case prefix + "PL_OVL_Pump_PT5":
              setPL_OVL_Pump_PT5(value == "1");
              break;
            case prefix + "Current_Digital_Pump_PT5":
              setCurrent_Digital_Pump_PT5(value);
              break;
            case prefix + "PL_RV_Vavle_PT5":
              setPL_RV_Vavle_PT5(value == "1");
              break;
            case prefix + "PL_FW_Vavle_PT5":
              setPL_FW_Vavle_PT5(value == "1");
              break;
            case prefix + "PL_Hand_Pump_PT5":
              setPL_Hand_Pump_PT5(value == "1");
              break;
            case prefix + "PL_Auto_Pump_PT5":
              setPL_Auto_Pump_PT5(value == "1");
              break;

            case prefix + "PL_Man_Cooler":
              setPL_Man_Cooler(value == "1");
              break;
            case prefix + "PL_Auto_Cooler":
              setPL_Auto_Cooler(value == "1");
              break;
            case prefix + "LOW_LV_Cooler":
              setLOW_LV_Cooler(value == "1");
              break;
            case prefix + "HI_LV_Cooler":
              setHI_LV_Cooler(value == "1");
              break;

            case prefix + "KLCanB":
              setKLCanB(value);
              break;
            case prefix + "KLCanA":
              setKLCanA(value);
              break;

            case prefix + "KLCanATotal":
              setKLCanATotal(value);
              break;
            case prefix + "KLCanBTotal":
              setKLCanBTotal(value);
              break;
            case prefix + "SCADA_BIN_EV":
              setSCADA_BIN_EV(value == "1");
              break;
            case prefix + "LOW_LV1_Bin_EV":
              setLOW_LV1_Bin_EV(value == "1");
              break;
            case prefix + "LOW_LV2_Bin_EV":
              setLOW_LV2_Bin_EV(value == "1");
              break;
            case prefix + "PL_Man_BIN_EV":
              setPL_Man_BIN_EV(value == "1");
              break;
            case prefix + "PL_Auto_BIN_EV":
              setPL_Auto_BIN_EV(value == "1");
              break;
            case prefix + "ALARM_BIN_EV":
              setALARM_BIN_EV(value == "1");
              break;
            case prefix + "HI_LV_Bin_TP":
              setHI_LV_Bin_TP(value == "1");
              break;
            case prefix + "HI_LV_Bin_EV":
              setHI_LV_Bin_EV(value == "1");
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
                    SCADA_PTEV
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
                    PL_Auto_PTEV
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
                    PL_Man_PTEV
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
            border: Alarm_PTEV ? "5px solid red" : "",
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
                  <Grid
                    item
                    xs={6}
                    style={{ textAlign: "center", marginTop: 0 }}
                  >
                    <CardMedia>
                      <Grid container>
                        <Grid xs={12} item>
                          <Typography>BT cấp liệu - PT1</Typography>
                        </Grid>
                        <Grid xs={12} item style={{ marginTop: -20 }}>
                          <img
                            src={
                              PL_OVL1_BTCL_PT1
                                ? MotorFault
                                : PL_BTCL_PT1
                                ? MotorOn
                                : MotorOff
                            }
                            width={130}

                            // height="50px"
                          ></img>
                        </Grid>
                        <Grid
                          xs={12}
                          item
                          justifyContent="center"
                          style={{ marginTop: -20 }}
                        >
                          <Typography>
                            Dòng motor <b>{Current_Digital_BTCL_PT1}</b> A
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardMedia>
                  </Grid>

                  <Grid
                    item
                    xs={6}
                    style={{ textAlign: "center", marginTop: 0 }}
                  >
                    <CardMedia>
                      <Grid container style={{ textAlign: "center" }}>
                        <Grid xs={12} item>
                          <Typography>BT ra liệu - PT3</Typography>
                        </Grid>
                        <Grid xs={12} item>
                          <img
                            src={
                              PL_OVL_BTRV_PT3
                                ? MotorFault
                                : PL_BTRV_PT3
                                ? MotorOn
                                : MotorOff
                            }
                            width={130}
                            // height="50px"
                            style={{ marginTop: -20 }}
                          ></img>
                        </Grid>
                        <Grid
                          xs={12}
                          item
                          justifyContent="center"
                          style={{ visibility: "hidden", marginTop: -20 }}
                        >
                          <Typography>
                            Dòng motor <b>{}</b> A
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardMedia>
                  </Grid>

                  <Grid
                    item
                    xs={6}
                    style={{ textAlign: "center", marginTop: 20 }}
                  >
                    <CardMedia>
                      <Grid container style={{ textAlign: "center" }}>
                        <Grid xs={12} item>
                          <Typography>BT từ- PT4</Typography>
                        </Grid>
                        <Grid xs={12} item>
                          <img
                            src={
                              PL_OVL_BTT_PT4
                                ? MotorFault
                                : PL_BTT_PT4
                                ? MotorOn
                                : MotorOff
                            }
                            width={130}
                            // height="50px"
                            style={{ marginTop: -20 }}
                          ></img>
                        </Grid>
                        <Grid
                          xs={12}
                          item
                          justifyContent="center"
                          style={{ visibility: "hidden" }}
                        >
                          <Typography>
                            Dòng motor <b>{}</b> A
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardMedia>
                  </Grid>

                  <Grid
                    item
                    xs={6}
                    style={{ textAlign: "center", marginTop: 20 }}
                  >
                    <CardMedia>
                      <Grid container style={{ textAlign: "center" }}>
                        <Grid xs={12} item>
                          <Typography>BT thành phẩm - PT11</Typography>
                        </Grid>
                        <Grid xs={12} item>
                          <img
                            src={
                              PL_OVL_BTTP_PT11
                                ? MotorFault
                                : PL_BTTP_PT11
                                ? MotorOn
                                : MotorOff
                            }
                            width={130}
                            // height="50px"
                            style={{ marginTop: -20 }}
                          ></img>
                        </Grid>
                        <Grid
                          xs={12}
                          item
                          justifyContent="center"
                          style={{ visibility: "hidden" }}
                        >
                          <Typography>
                            Dòng motor <b>{}</b> A
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardMedia>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    style={{ textAlign: "center", marginTop: -20 }}
                  >
                    <CardMedia>
                      <Grid container style={{ textAlign: "center" }}>
                        <Grid xs={12} item>
                          <Typography>BT tháp - PT6</Typography>
                        </Grid>
                        <Grid xs={12} item>
                          <img
                            src={
                              PL_OVL_BTThap_PT6
                                ? MotorFault
                                : PL_BTThap_PT6
                                ? MotorOn
                                : MotorOff
                            }
                            width={130}
                            // height="50px"
                            style={{ marginTop: -20, marginBottom: -20 }}
                          ></img>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: "start" }}>
                          <div style={{ textAlign: "center" }}>
                            <Typography
                              // variant="h6"
                              color="initial"
                              style={{ marginLeft: 0, padding: 5 }}
                              className={
                                PL_Auto_BTThap_PT6
                                  ? classes.status_item__Active
                                  : classes.status_item__InActive
                              }
                            >
                              <b>Auto</b>
                            </Typography>
                          </div>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: "start" }}>
                          <div style={{ textAlign: "center" }}>
                            <Typography
                              // variant="h6"
                              color="initial"
                              style={{
                                marginRight: 0,
                                padding: 5,
                              }}
                              className={
                                PL_Hand_BTThap_PT6
                                  ? classes.status_item__Active
                                  : classes.status_item__InActive
                              }
                            >
                              <b>Hand</b>
                            </Typography>
                          </div>
                        </Grid>
                        <Grid xs={12} item justifyContent="center">
                          <Typography>
                            Dòng motor <b>{Current_Digital_BTThap_PT6}</b> A
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
                      <Typography variant="h6" style={{ marginBottom: -10 }}>
                        Vít tải hút ẩm
                      </Typography>
                    </Grid>
                    <Grid xs={12}>
                      <div style={{ textAlign: "center" }}>
                        {/* <LoopIcon className={classes.xylanh_icon_Back}></LoopIcon>
                         */}
                        <img
                          width={130}
                          src={
                            PL_OVL_VTHA
                              ? MotorFault
                              : PL_VTHA
                              ? MotorOn
                              : MotorOff
                          }
                          alt=""
                          style={{
                            // background: Alarm_XL_LD ? "red" : "",
                            marginTop: -20,
                            marginBottom: -30,
                          }}
                        />
                      </div>
                      {/* <div style={{ textAlign: "center", marginBottom: 10 }}>
                        <Typography variant="h6" color="initial">
                          Báo đầy
                        </Typography>
                      </div> */}
                    </Grid>
                    <Grid item xs={6} style={{ textAlign: "start" }}>
                      <div style={{ textAlign: "center" }}>
                        <Typography
                          variant="h6"
                          color="initial"
                          style={{
                            marginLeft: 0,
                            padding: 2,
                            visibility: "hidden",
                          }}
                          className={
                            1
                              ? classes.status_item__Active
                              : classes.status_item__InActive
                          }
                        >
                          <b>Auto</b>
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
                            padding: 2,
                            visibility: "hidden",
                          }}
                          className={
                            !PL_Hand_VTai_Main
                              ? classes.status_item__Active
                              : classes.status_item__InActive
                          }
                        >
                          <b>Hand</b>
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography variant="h6" style={{ marginBottom: -10 }}>
                        Vít tải lấy liệu
                      </Typography>
                    </Grid>
                    <Grid xs={12}>
                      <div style={{ textAlign: "center" }}>
                        {/* <LoopIcon className={classes.xylanh_icon_Back}></LoopIcon>
                         */}
                        <img
                          width={130}
                          src={
                            PL_OVL_VTLL_PT10
                              ? MotorFault
                              : PL_VTLL_PT10
                              ? MotorOn
                              : MotorOff
                          }
                          alt=""
                          style={{
                            // background: Alarm_XL_LD ? "red" : "",
                            marginTop: -20,
                            marginBottom: -30,
                          }}
                        />
                      </div>
                      {/* <div style={{ textAlign: "center", marginBottom: 10 }}>
                        <Typography variant="h6" color="initial">
                          Báo đầy
                        </Typography>
                      </div> */}
                    </Grid>
                    <Grid item xs={6} style={{ textAlign: "start" }}>
                      <div style={{ textAlign: "center" }}>
                        <Typography
                          variant="h6"
                          color="initial"
                          style={{
                            marginLeft: 0,
                            padding: 2,
                          }}
                          className={
                            PL_Auto_VTLL_PT10
                              ? classes.status_item__Active
                              : classes.status_item__InActive
                          }
                        >
                          <b>Auto</b>
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
                            padding: 2,
                          }}
                          className={
                            PL_Hand_VTLL_PT10
                              ? classes.status_item__Active
                              : classes.status_item__InActive
                          }
                        >
                          <b>Hand</b>
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          {/* Airlock */}
          <Card>
            <CardHeader
              title={
                <>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="h6">Airlock</Typography>
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
                      <Typography variant="h6" style={{ marginBottom: -10 }}>
                        Airlock hút ẩm
                      </Typography>
                    </Grid>
                    <Grid xs={12}>
                      <div style={{ textAlign: "center" }}>
                        {/* <LoopIcon className={classes.xylanh_icon_Back}></LoopIcon>
                         */}
                        <img
                          width={130}
                          src={
                            PL_OVL_AirLock_HA
                              ? MotorFault
                              : PL_AirLock_HA
                              ? MotorOn
                              : MotorOff
                          }
                          alt=""
                          style={{
                            // background: Alarm_XL_LD ? "red" : "",
                            marginTop: -20,
                            marginBottom: -30,
                          }}
                        />
                      </div>
                      {/* <div style={{ textAlign: "center", marginBottom: 10 }}>
                        <Typography variant="h6" color="initial">
                          Báo đầy
                        </Typography>
                      </div> */}
                    </Grid>

                    <Grid item xs={6} style={{ textAlign: "start" }}>
                      <div style={{ textAlign: "center" }}>
                        <Typography
                          variant="h6"
                          color="initial"
                          style={{
                            marginLeft: 0,
                            padding: 2,
                          }}
                          className={
                            PL_Auto_AirLock_HA
                              ? classes.status_item__Active
                              : classes.status_item__InActive
                          }
                        >
                          <b>Auto</b>
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
                            padding: 2,
                          }}
                          className={
                            PL_Hand_AirLock_HA
                              ? classes.status_item__Active
                              : classes.status_item__InActive
                          }
                        >
                          <b>Hand</b>
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography variant="h6" style={{ marginBottom: -10 }}>
                        Airlock lấy liệu
                      </Typography>
                    </Grid>
                    <Grid xs={12}>
                      <div style={{ textAlign: "center" }}>
                        {/* <LoopIcon className={classes.xylanh_icon_Back}></LoopIcon>
                         */}
                        <img
                          width={130}
                          src={
                            PL_OVL_AirLock_LL
                              ? MotorFault
                              : PL_AirLock_LL
                              ? MotorOn
                              : MotorOff
                          }
                          alt=""
                          style={{
                            // background: Alarm_XL_LD ? "red" : "",
                            marginTop: -20,
                            marginBottom: -30,
                          }}
                        />
                      </div>
                      {/* <div style={{ textAlign: "center", marginBottom: 10 }}>
                        <Typography variant="h6" color="initial">
                          Báo đầy
                        </Typography>
                      </div> */}
                    </Grid>

                    <Grid item xs={6} style={{ textAlign: "start" }}>
                      <div style={{ textAlign: "center" }}>
                        <Typography
                          variant="h6"
                          color="initial"
                          style={{
                            marginLeft: 0,
                            padding: 2,
                          }}
                          className={
                            PL_Auto_AirLock_LL
                              ? classes.status_item__Active
                              : classes.status_item__InActive
                          }
                        >
                          <b>Auto</b>
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
                            padding: 2,
                          }}
                          className={
                            PL_Hand_AirLock_LL
                              ? classes.status_item__Active
                              : classes.status_item__InActive
                          }
                        >
                          <b>Hand</b>
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  item
                  xs={6}
                  style={{ textAlign: "center", marginTop: -20, marginTop: 10 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h6" style={{ marginBottom: -10 }}>
                        Airlock tháp - PT7
                      </Typography>
                    </Grid>
                    <Grid xs={12}>
                      <div style={{ textAlign: "center" }}>
                        {/* <LoopIcon className={classes.xylanh_icon_Back}></LoopIcon>
                         */}
                        <img
                          width={130}
                          src={
                            PL_OVL_AirThap_PT7
                              ? MotorFault
                              : PL_AirThap_PT7
                              ? MotorOn
                              : MotorOff
                          }
                          alt=""
                          style={{
                            // background: Alarm_XL_LD ? "red" : "",
                            marginTop: -20,
                            marginBottom: -30,
                          }}
                        />
                      </div>
                      {/* <div style={{ textAlign: "center", marginBottom: 10 }}>
                        <Typography variant="h6" color="initial">
                          Báo đầy
                        </Typography>
                      </div> */}
                    </Grid>

                    <Grid item xs={6} style={{ textAlign: "start" }}>
                      <div style={{ textAlign: "center" }}>
                        <Typography
                          variant="h6"
                          color="initial"
                          style={{
                            marginLeft: 0,
                            padding: 2,
                          }}
                          className={
                            PL_Auto_AirThap_PT7
                              ? classes.status_item__Active
                              : classes.status_item__InActive
                          }
                        >
                          <b>Auto</b>
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
                            padding: 2,
                          }}
                          className={
                            PL_Hand_AirThap_PT7
                              ? classes.status_item__Active
                              : classes.status_item__InActive
                          }
                        >
                          <b>Hand</b>
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          {/* Sàn lồng */}
          <Card>
            <CardHeader
              title={
                <>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="h6">Sàn lồng</Typography>
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
                <CardMedia>
                  <Grid container style={{ textAlign: "center" }}>
                    <Grid xs={12} item>
                      <img
                        src={
                          PL_OVL_San_PT8
                            ? MotorFault
                            : PL_San_PT8
                            ? MotorOn
                            : MotorOff
                        }
                        width={130}
                        style={{ margin: -20 }}
                      ></img>
                    </Grid>
                    <Grid item xs={6} style={{ textAlign: "start" }}>
                      <div style={{ textAlign: "center" }}>
                        <Typography
                          variant="h6"
                          color="initial"
                          style={{ marginLeft: 0, padding: 5 }}
                          className={
                            PL_Auto_San_PT8
                              ? classes.status_item__Active
                              : classes.status_item__InActive
                          }
                        >
                          <b>Auto</b>
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
                            PL_Hand_San_PT8
                              ? classes.status_item__Active
                              : classes.status_item__InActive
                          }
                        >
                          <b>Hand</b>
                        </Typography>
                      </div>
                    </Grid>
                    <Grid xs={12} item justifyContent="center">
                      <Typography>
                        Dòng motor <b>{Current_Digital_San_PT8}</b> A
                      </Typography>
                    </Grid>
                  </Grid>
                </CardMedia>
              </Grid>
            </CardContent>
          </Card>
          {/* Quạt hút */}
          <Card>
            <CardHeader
              title={
                <>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="h6">Quạt hút</Typography>
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
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    wrap="wrap"
                  >
                    <CardMedia>
                      <Grid container style={{ textAlign: "center" }}>
                        <Grid xs={12} item justifyContent="center">
                          <Typography>Quạt hút hút ẩm</Typography>
                        </Grid>
                        <Grid xs={12} item>
                          <img
                            src={
                              PL_OVL_QH_HA
                                ? FanFault
                                : PL_QH_HA
                                ? FanOn
                                : FanOff
                            }
                            width={130}
                          ></img>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: "start" }}>
                          <div style={{ textAlign: "center" }}>
                            <Typography
                              variant="h6"
                              color="initial"
                              style={{ marginLeft: 0, padding: 5 }}
                              className={
                                PL_Auto_QH_HA
                                  ? classes.status_item__Active
                                  : classes.status_item__InActive
                              }
                            >
                              <b>Auto</b>
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
                                PL_Hand_QH_HA
                                  ? classes.status_item__Active
                                  : classes.status_item__InActive
                              }
                            >
                              <b>Hand</b>
                            </Typography>
                          </div>
                        </Grid>
                        <Grid xs={12} item justifyContent="center">
                          <Typography>
                            Dòng motor <b>{Current_Digital_QH_HA}</b> A
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardMedia>
                  </Grid>
                </Grid>

                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    wrap="wrap"
                  >
                    <CardMedia>
                      <Grid container style={{ textAlign: "center" }}>
                        <Grid xs={12} item justifyContent="center">
                          <Typography>Quạt làm mát Cooler</Typography>
                        </Grid>
                        <Grid xs={12} item>
                          <img
                            src={
                              PL_OVL_QH_PT9
                                ? FanFault
                                : PL_QH_PT9
                                ? FanOn
                                : FanOff
                            }
                            width={130}
                          ></img>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          style={{ textAlign: "start", display: "none" }}
                        >
                          <div style={{ textAlign: "center" }}>
                            <Typography
                              variant="h6"
                              color="initial"
                              style={{ marginLeft: 0, padding: 5 }}
                              className={
                                1
                                  ? classes.status_item__Active
                                  : classes.status_item__InActive
                              }
                            >
                              <b>Auto</b>
                            </Typography>
                          </div>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          style={{ textAlign: "start", display: "none" }}
                        >
                          <div style={{ textAlign: "center" }}>
                            <Typography
                              variant="h6"
                              color="initial"
                              style={{
                                marginRight: 0,
                                padding: 5,
                              }}
                              className={
                                1
                                  ? classes.status_item__Active
                                  : classes.status_item__InActive
                              }
                            >
                              <b>Hand</b>
                            </Typography>
                          </div>
                        </Grid>
                        <Grid xs={12} item justifyContent="center">
                          <Typography>
                            Dòng motor <b>{Current_Digital_QH_PT9}</b> A
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardMedia>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          {/* Bơm dầu */}
          <Card>
            <CardHeader
              title={
                <>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="h6">Bơm dầu</Typography>
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
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    wrap="wrap"
                  >
                    <CardMedia>
                      <Grid container style={{ textAlign: "center" }}>
                        <Grid xs={12} item justifyContent="center">
                          <Typography>Bơm dầu - PT2</Typography>
                        </Grid>
                        <Grid xs={12} item>
                          <img
                            src={
                              PL_OVL_Pump_PT2
                                ? BDauFault
                                : PL_Pump_PT2
                                ? BDauOn
                                : BDauOff
                            }
                            width={130}
                          ></img>
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: "start" }}>
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
                                  color: 1 ? "green" : "#333",
                                }}
                              ></LoopIcon>
                              <Typography style={{}}>Nghịch</Typography>
                            </div>
                            <div>
                              <AutorenewIcon
                                style={{
                                  fontSize: "2.5rem",
                                  margin: 0,
                                  color: 1 ? "green" : "#333",
                                }}
                              ></AutorenewIcon>
                              <Typography style={{}}>Thuận</Typography>
                            </div>
                          </div>
                        </Grid>

                        <Grid item xs={6} style={{ textAlign: "start" }}>
                          <div style={{ textAlign: "center" }}>
                            <Typography
                              variant="h6"
                              color="initial"
                              style={{ marginLeft: 0, padding: 5,opacity:0 }}
                              className={
                                PL_Auto_Pump_PT2
                                  ? classes.status_item__Active
                                  : classes.status_item__InActive
                              }
                            >
                              <b>Auto</b>
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
                                opacity:0
                              }}
                              className={
                                PL_Hand_Pump_PT2
                                  ? classes.status_item__Active
                                  : classes.status_item__InActive
                              }
                            >
                              <b>Hand</b>
                            </Typography>
                          </div>
                        </Grid>
                        <Grid xs={12} item justifyContent="center" 
                         style={{
                          opacity:0
                        }}
                        >
                          <Typography>
                            Dòng motor <b>{Current_Digital_Pump_PT2}</b> A
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardMedia>
                  </Grid>
                </Grid>

                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    wrap="wrap"
                  >
                    <CardMedia>
                      <Grid container style={{ textAlign: "center" }}>
                        <Grid xs={12} item justifyContent="center">
                          <Typography>Bơm dầu - PT5</Typography>
                        </Grid>
                        <Grid xs={12} item>
                          <img
                            src={
                              PL_OVL_Pump_PT5
                                ? BDauFault
                                : PL_Pump_PT5
                                ? BDauOn
                                : BDauOff
                            }
                            width={130}
                          ></img>
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: "start" }}>
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
                                  color: PL_RV_Vavle_PT5 ? "green" : "#333",
                                }}
                              ></LoopIcon>
                              <Typography style={{}}>Nghịch</Typography>
                            </div>
                            <div>
                              <AutorenewIcon
                                style={{
                                  fontSize: "2.5rem",
                                  margin: 0,
                                  color: PL_FW_Vavle_PT5 ? "green" : "#333",
                                }}
                              ></AutorenewIcon>
                              <Typography style={{}}>Thuận</Typography>
                            </div>
                          </div>
                        </Grid>

                        <Grid item xs={6} style={{ textAlign: "start" }}>
                          <div style={{ textAlign: "center" }}>
                            <Typography
                              variant="h6"
                              color="initial"
                              style={{ marginLeft: 0, padding: 5 }}
                              className={
                                !PL_Auto_GTai
                                  ? classes.status_item__Active
                                  : classes.status_item__InActive
                              }
                            >
                              <b>Auto</b>
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
                                !PL_Hand_GTai
                                  ? classes.status_item__Active
                                  : classes.status_item__InActive
                              }
                            >
                              <b>Hand</b>
                            </Typography>
                          </div>
                        </Grid>
                        <Grid xs={12} item justifyContent="center">
                          <Typography>
                            Dòng motor <b>{Current_Digital_Pump_PT5}</b> A
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardMedia>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Khối lượng cân */}
          <Card>
            <CardHeader
              title={
                <>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="h6">Khối lượng cân</Typography>
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
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    wrap="wrap"
                  >
                    <CardMedia>
                      <Grid container style={{ textAlign: "center" }}>
                        <Grid xs={12} item justifyContent="center">
                          <Typography>Cân A</Typography>
                        </Grid>
                        <Grid xs={12} item justifyContent="center">
                          <Typography>
                            Khối lượng <b>{KLCanA}</b> Kg
                          </Typography>
                        </Grid>
                        <Grid xs={12} item justifyContent="center">
                          <Typography>
                            Khối lượng tổng <b>{KLCanATotal}</b> Kg
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardMedia>
                  </Grid>
                </Grid>

                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    wrap="wrap"
                  >
                    <CardMedia>
                      <Grid container style={{ textAlign: "center" }}>
                        <Grid xs={12} item justifyContent="center">
                          <Typography>Cân B</Typography>
                        </Grid>
                        <Grid xs={12} item justifyContent="center">
                          <Typography>
                            Khối lượng <b>{KLCanB}</b> Kg
                          </Typography>
                        </Grid>
                        <Grid xs={12} item justifyContent="center">
                          <Typography>
                            Khối lượng tổng <b>{KLCanBTotal}</b> Kg
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardMedia>
                  </Grid>
                </Grid>
           
              </Grid>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
      {/* <ControlPanel_MayNghien
        tagListProp={tagListProp}
        isOpen={isOpen}
        handleClose={handleClose}
        tagName={tagName}
      ></ControlPanel_MayNghien> */}
    </>
  );
}
// PhuTroEpVienComponent.propTypes = {
//   tagList: PropTypes.object,
// };
export default PhuTroEpVienComponent;

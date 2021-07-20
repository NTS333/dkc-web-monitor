import { Switch, FormControlLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import ToastNotification from '../ToastNotification';
import { makeStyles } from '@material-ui/core/styles';

var tagsJson =
    `['RemoteStation1/PLC_MayNghienTho/MayNghienTho1/Current_Digital_BT','RemoteStation1/PLC_MayNghienTho/MayNghienTho1/Current_Digital_MN']`;


    
const useStyles = makeStyles((theme) => ({
    root: {
        width: 52,
        height: 26,
        padding: 0,
        margin: theme.spacing(3),
        marginRight: theme.spacing(1),
      },
      switchBase: {
        padding: 1,
        '&$checked': {
          transform: 'translateX(24px)',
          color: theme.palette.common.white,
          '& + $track': {
            backgroundColor: '#52d869',
            opacity: 1,
            border: 'none',
          },
        },
        '&$focusVisible $thumb': {
          color: '#52d869',
          border: '6px solid #fff',
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 28 / 2,
        // border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: 'gray',
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
      },
      checked: {},
      focusVisible: {},
      caption:{
          '&:hover':{
              backgroundColor:'#1111',
              borderRadius:22,
              padding:5,
              marginLeft:5,
              transition:'1s'
          }
      }
  }));
function SSwitch({ tagName, prefix, value,caption }) {
    // window.subcribeTag(tagsJson);
    const classes = useStyles();
    const [checked, setChecked] = useState(false)
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState(false);
    const [message, setMessage] = useState(
        {
            status: 'error',
            content: '',
            action: false
        }
    );
    let isSuccess = false;

    useEffect(async () => {
        
        var getTagTimeer = setTimeout(async () => {
            if (window.isStarted)
                 window.getSubscribedData(ReadCallback);
        }, [1000]);
        return () => {
            // clearInterval(getTagTimeer);
            clearTimeout(getTagTimeer);
        }
    }, []);

    const ReadCallback = (subCribeTags) => {
        
        let tagPath = prefix+'/'+tagName.toString()
        subCribeTags?.map(
            t => {
                if (t.Path == tagPath){
                    setChecked(t.Value == '1' ? true : false)
                    return;
                }
            }
        )
    }

    const WriteCallback = (res, value) => {
        console.log(value)
        isSuccess = res == "ok" ? true : false;
        if (isSuccess) {
            let returnValue = value == '1' ? true : false;
            setChecked((prev) => returnValue);
        }
        handleOpen(isSuccess);
    }


    const onCheckedChanged = (e) => {
        let value = e.target.checked ? "1" : "0";
        let tag = tagName;
        window.writeTag(prefix, tag, value, WriteCallback);
        // setChecked((prev)=>e.target.checked);
    }
    const handleOpen = (isSuccess) => {
        isSuccess ? setMessage({
            status: 'success',
            content: 'Ghi thành công',
            action: true
        }) :
            setMessage({
                status: 'error',
                content: 'Ghi thất bại',
                action: true
            })
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setMessage(
            {
                ...message, content: '', action: false
            }
        );
    };

    return (
        <div>
            <FormControlLabel
                control={
                    <Switch checked={checked} onChange={onCheckedChanged} name={tagName} 
                    focusVisibleClassName={classes.focusVisible}
                    disableRipple
                    classes={{
                        root: classes.root,
                        switchBase: classes.switchBase,
                        thumb: classes.thumb,
                        track: classes.track,
                        checked: classes.checked,
                    }}
                    >
                        {checked}
                    </Switch>
                }
                label={caption}
                className={classes.caption}
            />
            <ToastNotification message={message} handleOpen={handleOpen} handleClose={handleClose}></ToastNotification>
        </div>
    )
}

export default SSwitch

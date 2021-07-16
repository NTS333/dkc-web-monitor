import { IconButton, InputAdornment ,createMuiTheme} from '@material-ui/core';
import {MuiPickersUtilsProvider, DatePicker, KeyboardDateTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import EventIcon from '@material-ui/icons/Event';
import React, { useState } from 'react'


import DateFnsUtils from '@date-io/date-fns';
import lightBlue from "@material-ui/core/colors/lightBlue";
import { ThemeProvider } from "@material-ui/styles";

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
  },
});

  
const CustomDatePicker = (props) => {
    const [date, setDate] = useState(null);
    return (
      // <ThemeProvider theme={defaultMaterialTheme}>
       <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
        clearable={true}
        label="Filter date"
        inputVariant="standard"
        variant="dialog"
        format="MM/dd/yyyy"
        value={date}
        ampm={false}
        autoOk = {false}
        allowKeyboardControl
        // style={{ minWidth: 175}} 
        onChange={(event) => {
          setDate(event);
          props.onFilterChanged(props.columnDef.tableData.id, event);
        }}
        color='secondary'
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <EventIcon />
              </IconButton>
            </InputAdornment>
          ),
          
        }}
        
      />
      </MuiPickersUtilsProvider>
     
    
    );
  };
  export default CustomDatePicker
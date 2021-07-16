import React, { useEffect, useState } from "react";
import { globalFilterState } from "../stateManager";
import moment from "moment";
import CssBaseline from "@material-ui/core/CssBaseline";
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import {
  useAsyncDebounce,
  useBlockLayout,
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import ReactTable from 'react-table'
import DateFnsUtils from "@date-io/date-fns";
// import makeData from './makeData'
import {
  Backdrop,
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TableContainer,
  TablePagination,
  TextField,
  Tooltip,
  useTheme,
} from "@material-ui/core";
import {
  DatePicker,
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core";

import Highlighter from "react-highlight-words";
import styled from "styled-components";

import { useRecoilState, useSetRecoilState } from "recoil";
// import FirstPageIcon from '@material-ui/icons/FirstPage';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import LastPageIcon from '@material-ui/icons/LastPage';
import {
  FirstPage as FirstPageIcon,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LastPage as LastPageIcon,
  Close as CloseIcon,
  GetApp,
  Search,
} from "@material-ui/icons";
// import { useSticky } from "react-table-sticky";
import { Workbook } from "exceljs";
import saveAs from "file-saver";
import { ReportApi } from "../services/reportApi";

const useStyle = makeStyles((theme) => ({
  headerRow: {
    backgroundColor: "#333",
    position: "relative",
    border: "1px solid black",
    fontWeight: "bold",
  },
  headerCell: {
    // borderRadius:'10px',
    border: "1px solid black",
    textAlign: "center",
    fontSize: "16px",
  },
  filterRow: {
    backgroundColor: "#111",
    position: "relative",
    border: "1px solid black",
    height: "20px !important",
    textAlign: "center",
  },
  filterCell: {
    height: "20px",
    textAlign: "center",
  },
  cell: {
    border: "1px solid black",
    backgroundColor: "#CDEDF6",
    color: "black",
    fontWeight: "bold",
    fontFamily: "Segoe UI",
    textAlign: "center",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
  container: {
    width: "100%",
    position: "absulute",
    border: "1px solid black",
    boxShadow: "-11px 10px 5px 0px rgba(0,0,0,0.75)",
    borderRadius: 5,
  },
  pagination: {
    backgroundColor: "#555",
    position: "relative",
    border: "1px solid black",
    fontWeight: "bold",
  },
}));

function SReactTableTest() {
  const classes = useStyle();
  const [fromDate, setfromDate] = useState(new Date("2020-11-07"));
  const [toDate, settoDate] = useState(new Date("2020-11-09"));
  const [reportType, setreportType] = useState("Data");
  const [dataSourceData, setdataSourceData] = useState([]);
  const [dataSourceAlarm, setdataSourceAlarm] = useState([]);
  const [dataSourceRunningTime, setdataSourceRunningTime] = useState([]);

  // const [globalFilterRecoil,setglobalFilterRecoil] =  useRecoilState(globalFilterState)
  const columnsData = React.useMemo(
    () => [
      {
        Header: "DateTime",
        accessor: "DateTime",
        Cell: ({ value }) => {
          return typeof value == "undefined" || !value
            ? null
            : moment(value).format("DD/MM/yyyy HH:mm:ss");
        },
      },
      {
        Header: "Dòng máy nghiền thô 1",
        accessor: "DongMayNghienTho1",
        Cell: CustomHighlightCell,
        // filter:(rows,id,filterType)=>rows.filter(row=>row.values[id].startsWith(filterType)),
        Filter:ColumnFilter
      },
      {
        Header: "Dòng máy nghiền thô 2",
        accessor: "DongMayNghienTho2",
        Cell: CustomHighlightCell,
        // Filter:ColumnFilter
      },
      {
        Header: "Dòng máy nghiền tinh",
        accessor: "DongMayNghienTinh",
        Cell: CustomHighlightCell,
        // Filter:ColumnFilter
      },
      {
        Header: "Dòng máy ép 1",
        accessor: "DongMayEp1",
        Cell: CustomHighlightCell,
        // Filter:ColumnFilter
      },
      {
        Header: "Dòng máy ép 2",
        accessor: "DongMayEp2",
        Cell: CustomHighlightCell,
        // Filter:ColumnFilter
      },
      {
        Header: "Khối lượng cân 1",
        accessor: "KhoiLuongCan1",
        Cell: CustomHighlightCell,
        // Filter:ColumnFilter
      },
      {
        Header: "Khối lượng cân 2",
        accessor: "KhoiLuongCan2",
        Cell: CustomHighlightCell,
        // Filter:ColumnFilter
      },
    ],
    []
  );
  const columnsAlarm = React.useMemo(
    () => [
      {
        Header: "IncommingTime",
        accessor: "IncommingTime",
        Cell: ({ value }) => {
          return typeof value == "undefined" || !value
            ? null
            : moment(value).format("DD/MM/yyyy HH:mm:ss");
        },
        // Filter:ColumnFilter
      },
      {
        Header: "AlarmText",
        accessor: "AlarmText",
        Cell: CustomHighlightCell,
        Filter: ColumnFilter,
        // Cell: ({ cell: { value }, state: { globalFilter } }) => (value, globalFilter)
        // Filter:ColumnFilter
      },
      {
        Header: "Value",
        accessor: "Value",
        Cell: CustomHighlightCell,
        // Filter:ColumnFilter
      },
      {
        Header: "State",
        accessor: "State",
        Cell: CustomHighlightCell,
        // Filter:ColumnFilter
      },
      {
        Header: "OutgoingTime",
        accessor: "OutgoingTime",
        Cell: ({ value }) => {
          return typeof value == "undefined"
            ? null
            : moment(value).format("DD/MM/yyyy HH:mm:ss");
        },
        // Filter:ColumnFilter
      },
    ],
    []
  );
  const columnsRunningTime = React.useMemo(
    () => [
      {
        Header: "Id",
        accessor: "Id",
        Cell: CustomHighlightCell,
        // Filter:ColumnFilter
      },
      {
        Header: "Máy",
        accessor: "May",
        Cell: CustomHighlightCell,
      },
      {
        Header: "StartTime",
        accessor: "StartTime",
        Cell: ({ value }) => {
          return typeof value == "undefined" || !value
            ? null
            : moment(value).format("DD/MM/yyyy HH:mm:ss");
        },
        // Filter:ColumnFilter
      },
      {
        Header: "StopTime",
        accessor: "StopTime",
        Cell: ({ value }) => {
          console.log(value);
          return typeof value == "undefined" || !value
            ? null
            : moment(value).format("DD/MM/yyyy HH:mm:ss");
        },
        // Filter:ColumnFilter
      },
      {
        Header: "RunTimeTotal",
        accessor: "RunTimeTotal",
        Cell: CustomHighlightCell,
        // Filter:ColumnFilter
      },
    ],
    []
  );
  useEffect(() => {
    // getData();
    return () => {};
  }, []);
  return (
    <div>
     
      {reportType == "Data" ? (
        <Table
          style={{ marginTop: 10 }}
          columns={columnsData}
          data={dataSourceData}
          reportType={reportType}
          setreportType={setreportType}
          columnsData={columnsData}
          columnsAlarm={columnsAlarm}
          columnsRunningTime={columnsRunningTime}
          dataSourceData={dataSourceData}
          dataSourceAlarm={dataSourceAlarm}
          dataSourceRunningTime={dataSourceRunningTime}
          setdataSourceAlarm={setdataSourceAlarm}
          setdataSourceData={setdataSourceData}
          setdataSourceRunningTime={setdataSourceRunningTime}
        />
      ) : reportType == "Alarm" ? (
        <Table
          style={{ marginTop: 10 }}
          columns={columnsAlarm}
          data={dataSourceAlarm}
          reportType={reportType}
          setreportType={setreportType}
          columnsData={columnsData}
          columnsAlarm={columnsAlarm}
          columnsRunningTime={columnsRunningTime}
          dataSourceData={dataSourceData}
          dataSourceAlarm={dataSourceAlarm}
          dataSourceRunningTime={dataSourceRunningTime}
          setdataSourceAlarm={setdataSourceAlarm}
          setdataSourceData={setdataSourceData}
          setdataSourceRunningTime={setdataSourceRunningTime}
        />
      ) : (
        <Table
          style={{ marginTop: 10 }}
          columns={columnsRunningTime}
          data={dataSourceRunningTime}
          reportType={reportType}
          setreportType={setreportType}
          columnsData={columnsData}
          columnsAlarm={columnsAlarm}
          columnsRunningTime={columnsRunningTime}
          dataSourceData={dataSourceData}
          dataSourceAlarm={dataSourceAlarm}
          dataSourceRunningTime={dataSourceRunningTime}
          setdataSourceAlarm={setdataSourceAlarm}
          setdataSourceData={setdataSourceData}
          setdataSourceRunningTime={setdataSourceRunningTime}
        />
      )}
    </div>
  );
}
function Table({
  columns,
  data,
  reportType,
  setreportType,
  columnsData,
  columnsAlarm,
  columnsRunningTime,
  dataSourceData,
  dataSourceAlarm,
  dataSourceRunningTime,
  fromDate,
  setfromDate,
  toDate,
  settoDate,
  setdataSourceData,
  setdataSourceAlarm,
  setdataSourceRunningTime,
}) {
  const classes = useStyle();

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    setGlobalFilter,
    visibleColumns,
    getTableBodyProps,
    firstPageRows
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useFilters,
    usePagination
    // useBlockLayout,
    // useSticky
  );
  const { globalFilter, pageIndex, pageSize } = state;
  const handleChangePage = (event, newPage) => {
    gotoPage(newPage);
  };
  // Render the UI for your table
  return (
    <>
      <GlobalFilter
        fromDate={fromDate}
        setfromDate={setfromDate}
        toDate={toDate}
        settoDate={settoDate}
        filter={globalFilter}
        setFilter={setGlobalFilter}
        reportType={reportType}
        setreportType={setreportType}
        columnsData={columnsData}
        columnsAlarm={columnsAlarm}
        columnsRunningTime={columnsRunningTime}
        dataSourceData={dataSourceData}
        dataSourceAlarm={dataSourceAlarm}
        dataSourceRunningTime={dataSourceRunningTime}
        setdataSourceData={setdataSourceData}
        setdataSourceAlarm={setdataSourceAlarm}
        setdataSourceRunningTime={setdataSourceRunningTime}
      ></GlobalFilter>
      <TableContainer>
     <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                  {/* Render the columns filter UI */}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
          <tr>
            <th
              colSpan={visibleColumns.length}
              style={{
                textAlign: 'left',
              }}
            >
              {/* <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              /> */}
            </th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
        <TablePagination
          className={classes.pagination}
          // rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length} //số hàng trong bảng
          rowsPerPage={pageSize}
          page={pageIndex}
          onChangePage={(e, newPage) => gotoPage(newPage)}
          onChangeRowsPerPage={(e) => setPageSize(e.target.value)}
          ActionsComponent={TablePaginationActions}
        />
      </TableContainer>
    </>
  );
}
const GlobalFilter = ({
  filter,
  setFilter,
  reportType,
  setreportType,
  columnsData,
  dataSourceData,
  setdataSourceData,
  columnsAlarm,
  dataSourceAlarm,
  setdataSourceAlarm,
  columnsRunningTime,
  dataSourceRunningTime,
  setdataSourceRunningTime,
}) => {
  const classes = useStyle();
  const [filterValue, setfilterValue] = useState(filter);
  const [fromDate, setfromDate] = useState(new Date("2020-11-07 00:00:00"));
  const [toDate, settoDate] = useState(new Date("2020-11-09 23:59:59"));
  const [machine, setmachine] = useState("MayNghienTho1");
  // const [reportType, setreportType] = useState("Alarm");
  const [loading, setloading] = useState(false);
  const handleChange = (event) => {
    setreportType(event.target.value);
    // setdataSource([])
  };
  const handleChangeMachine = (event) => {
    setmachine(event.target.value);
    // setdataSource([])
  };
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 500);
  // const setGlobalFiter = useSetRecoilState(globalFilterState)

  // const data = React.useMemo(() => getData(), [])
  const getData = async () => {
    const params = {
      reportType: reportType,
      fromDate: moment(fromDate).format("yyyy-MM-DD"),
      toDate: moment(toDate).format("yyyy-MM-DD"),
      may: machine,
    };
    setloading(true);
    const res = await ReportApi.GetReportData(params);
    if (res) {
      switch (reportType) {
        case "Data":
          setdataSourceData(res);
          break;
        case "Alarm":
          setdataSourceAlarm(res);
          break;
        case "RunningTime":
          setdataSourceRunningTime(res);
          break;
        default:
          break;
      }
    }
    // console.log(res);

    setloading(false);
    // console.log(res);
  };
  function writeExcel(filename, headers, content) {
    if (!filename) {
      filename = "Untitled";
    }

    let workbook = new Workbook();

    let d = new Date();
    workbook.created = d;
    workbook.modified = d;

    let sheet = workbook.addWorksheet("Data", {
      properties: { tabColor: { argb: "FF00FF00" } },
    });
    // console.log(headers);
    let columns = [];
    const generateHeader = () => {
      headers.map((item, key) => {
        columns.push({
          header: item.Header,
          key: item.accessor,
        });
      });
      // console.log(columns);
      sheet.columns = columns;
    };
    generateHeader();

    for (let item of content) {
      // console.log(content);
      sheet.addRow(item);
      // sheet.getCell('A2').value = 1.6;
    }

    return workbook.xlsx.writeBuffer().then(function (buffer) {
      saveAs(
        new Blob([buffer], {
          type: "application/octet-stream",
        }),
        `${filename}-${moment().format("YYYY-MM-DD__HH:mm:ss")}.xlsx`
      );
    });
  }
  return (
    <>
      <div style={{ float: "left", marginBottom: 10 }}>
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDateTimePicker
            autoOk
            variant="inline"
            inputVariant="standard"
            label="From Date"
            format="dd/MM/yyyy HH:mm:ss"
            value={fromDate}
            // inputAdornmentProps={{ position: "end" }}
            onChange={setfromDate}
            style={{ marginRight: 30, position: "relative" }}
            color="primary"
            // ref={fromDateRef}
          />
          <KeyboardDateTimePicker
            autoOk
            variant="inline"
            inputVariant="standard"
            label="To Date"
            format="dd/MM/yyyy HH:mm:ss"
            value={toDate}
            // inputAdornmentProps={{ position: "end" }}
            onChange={settoDate}
            color="primary"
            // ref={toDateRef}
          />
        </MuiPickersUtilsProvider>
        <FormControl style={{ marginLeft: 30 }}>
          <InputLabel color="secondary">Report Type</InputLabel>
          <Select
            color="secondary"
            style={{ minWidth: 150 }}
            labelId="demo-controlled-open-select-label"
            // open={open}
            // onClose={handleClose}
            // onOpen={handleOpen}
            value={reportType}
            onChange={handleChange}
          >
            {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
            <MenuItem value="Data">Data</MenuItem>
            <MenuItem value="Alarm">Alarm</MenuItem>
            <MenuItem value="RunningTime">Thời gian chạy máy</MenuItem>
            {/* <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
        </FormControl>
        {reportType == "RunningTime" ? (
          <FormControl style={{ marginLeft: 30 }}>
            <InputLabel color="secondary">Machine</InputLabel>
            <Select
              color="secondary"
              style={{ minWidth: 150 }}
              labelId="demo-controlled-open-select-label"
              // open={open}
              // onClose={handleClose}
              // onOpen={handleOpen}
              value={machine}
              onChange={handleChangeMachine}
            >
              {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
              <MenuItem value="MayNghienTho1">Máy nghiền thô 1</MenuItem>
              <MenuItem value="MayNghienTho2">Máy nghiền thô 2</MenuItem>
              <MenuItem value="MayNghienTinh">Máy nghiền tinh</MenuItem>
              <MenuItem value="Epvien1">Máy ép viên 1</MenuItem>
              <MenuItem value="Epvien2">Máy ép viên 2</MenuItem>
              {/* <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </FormControl>
        ) : null}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: 40, height: 50 }}
          onClick={getData}
        >
          GET DATA
        </Button>
      </div>
      <div style={{ float: "right", marginBottom: 10 }}>
        <Tooltip title="Export" placement="top-start">
          <IconButton
            onClick={() =>
              reportType == "Data"
                ? writeExcel(reportType, columnsData, dataSourceData):
                reportType == "Alarm"?
                writeExcel(reportType, columnsAlarm, dataSourceAlarm):
                writeExcel(reportType, columnsRunningTime, dataSourceRunningTime)

            }
          >
            <GetApp></GetApp>
          </IconButton>
        </Tooltip>

        <TextField
          value={filterValue || ""}
          onChange={(e) => {
            onChange(e.target.value);
            setfilterValue(e.target.value);
          }}
          defaultValue=""
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <IconButton
          onClick={() => {
            onChange(null);
            setfilterValue(null);
          }}
        >
          <CloseIcon />
        </IconButton>
      </div>
    </>
  );
};
const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <>
      <TextField
        variant="standard"
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
        defaultValue=""
        placeholder="Search"
      ></TextField>
      <IconButton
        onClick={() => {
          setFilter("");
        }}
      >
        <CloseIcon />
      </IconButton>
    </>
  );
};
const CustomHighlightCell = ({ value, globalFilter }) => {
  // const [globalFilterRecoil,setglobalFilterRecoil] =  useRecoilState(globalFilterState)
  return (
    <>
      <Highlighter
        highlightClassName="YourHighlightClass"
        searchWords={[globalFilter]}
        autoEscape={true}
        textToHighlight={value?.toString()}
      />
    </>
  );
};
function TablePaginationActions(props) {
  const classes = useStyle();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

export default SReactTableTest;

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import axiosClient from "../../Services/axiosClient";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { Form, DropdownButton, Dropdown } from "react-bootstrap";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  cardLarge: {
    width: 400,
    // height: 400,
    marginLeft: 95,
    marginTop: 40,
  },

  cardSmall: {
    width: 400,
    marginTop: 23,
    marginLeft: 95,
    height: 84,
    background: "rgba(0, 0, 0, 0.04)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 4,
  },
  cardSmallLeft: {
    float: "left",
    backgroundColor: "cyan",
    width: "79% ",
    height: "100%",
    textAlign: "center",
    paddingTop: "6%",
  },
  cardSmallRight: {
    float: "right",
    backgroundColor: "red",
    width: "21%",
    height: "100%",
    textAlign: "center",
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: "140%",
    paddingTop: "4%",

    color: "#000000",
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formGenderControl: {
    // margin: theme.spacing(1),
    minWidth: 179.74,
    height: 42.27,
  },
  formCityControl: {
    // margin: theme.spacing(1),
    minWidth: 534,
    height: 42.27,
  },
  formGroup: {
    marginTop: theme.spacing(6),
    height: 60,
  },
}));

const GeneralSetting = () => {
  const classes = useStyles();

  const [selectedBirthDate, setselectedBirthDate] = useState(
    new Date("2014-08-18T21:11:54")
  );

  const [renterData, setRenterData] = useState({});

  const [listCities, setListCities] = useState([]);

  const [name, setName] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const [nickName, setNickName] = useState("");
  const handleNickNameChange = (event) => {
    setNickName(event.target.value);
  };

  const [city, setCity] = useState("");
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const [country, setCountry] = useState("");
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleBirthDateChange = (date) => {
    setselectedBirthDate(date);
  };

  const [gender, setGender] = React.useState("");
  const [openGenderSelector, setOpenGenderSelector] = React.useState(false);
  const [openCitySelector, setOpenCitySelector] = React.useState(false);
  const [openSucessDialog, setOpenSucessDialog] = useState(false);
  const [openErrorDialog, setOpenErrorDialog] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState('Cập nhật thành công');
  const [errorMessage, setErrorMessage] = React.useState('Server lỗi, vui lòng thử lại sau ít phút!!');

  const handleSaveClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosClient.patch("/renter/general", {
        id: renterData._id,
        gender,
        city,
        country,
        nickName,
        birthDate: selectedBirthDate,
        name,
      });
      console.log(response);
      if (response.data.success){ 
        setOpenSucessDialog(true);
        setSuccessMessage(response.data.message);
      }
      else setOpenErrorDialog(true);
    } catch (error) {
      setOpenErrorDialog(true);
      const {message} = error.response.data;
      setErrorMessage(message);
    }
  };

  const handleSaveClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSucessDialog(false);
    setOpenErrorDialog(false);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleGenderClose = () => {
    setOpenGenderSelector(false);
  };

  const handleCityClose = () => {
    setOpenCitySelector(false);
  };

  const handleGenderOpen = () => {
    setOpenGenderSelector(true);
  };

  const handleCityOpen = () => {
    setOpenCitySelector(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/renter");
        const data = response.data.data;
        setRenterData(data);
        setGender(data.gender);
        setName(data.name);
        setNickName(data.nickName);
        setCity(data.city);
        setCountry(data.nation);
        setselectedBirthDate(data.birthDate);

        console.log(data);

        // set list cities
        const response2 = await axiosClient.get("/city");
        const cities = response2.data.cities;
        setListCities(cities);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "inline-block",
          verticalAlign: "middle",

          float: "left",
        }}
      >
        <div style={{ marginLeft: "14%", paddingTop: "20px" }}>
          <h1
            style={{
              fontFamily: "Barlow",
              fontSize: "28px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "140%",
              letterSpacing: "0em",
              textAlign: "left",
              // color: "white"
            }}
          >
            
            HELLO PINKY ...
          </h1>
          <h2
            style={{
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "140%",
              color: "rgba(178, 178, 178, 0.64)",
            }}
          >
            Have a nice day with RentMe
          </h2>
        </div>
        <Card className={classes.cardLarge}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="400px"
              width="300px"
              title="Contemplative Reptile"
              image={renterData.avatar}
              onClick={(e) =>{console.log('Header')}}
            />
          </CardActionArea>
        </Card>
        <Card className={classes.cardSmall} style={{ display: "inline-block" }}>
          <div className={classes.cardSmallLeft}>Renew Your ProAccount</div>
          <Button className={classes.cardSmallRight}>Update Now </Button>
        </Card>
      </div>

      <div
        style={{
          width: "40%",
          height: "100%",
          display: "inline-block",
          float: "left",
          // padding: "70px",
          // marginLeft: "10%"
        }}
      >
        <Form>
          <Form.Group className={classes.formGroup}>
            <Form.Label>Họ và tên</Form.Label>
            <Form.Control
              type="text"
              style={{ borderRadius: "30px" }}
              value={name}
              onChange={handleNameChange}
            />
          </Form.Group>
          <Form.Group className={classes.formGroup}>
            <Form.Label>Giới tính</Form.Label>
            <br></br>
            <FormControl className={classes.formGenderControl}>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={openGenderSelector}
                onClose={handleGenderClose}
                onOpen={handleGenderOpen}
                value={gender}
                onChange={handleGenderChange}
              >
                <MenuItem value={"Nam"}>Nam</MenuItem>
                <MenuItem value={"Nữ"}>Nữ</MenuItem>
                <MenuItem value={"Khác"}>Khác</MenuItem>
              </Select>
            </FormControl>
          </Form.Group>

          <Form.Group className={classes.formGroup}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Form.Label>Ngày sinh</Form.Label>
              <Grid>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Ngày / Tháng / Năm"
                  value={selectedBirthDate}
                  onChange={handleBirthDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </Form.Group>

          <Form.Group className={classes.formGroup}>
            <Form.Label>Nickname</Form.Label>
            <Form.Control
              type="text"
              style={{ borderRadius: "30px" }}
              value={nickName}
              onChange={handleNickNameChange}
            />
          </Form.Group>

          <Form.Group className={classes.formGroup}>
            <Form.Label>Tỉnh / Thành phố</Form.Label>
            <br></br>
            <FormControl className={classes.formCityControl}>
              <Select
                // labelId="demo-controlled-open-select-label"
                // id="demo-controlled-open-select"
                open={openCitySelector}
                onClose={handleCityClose}
                onOpen={handleCityOpen}
                value={city}
                onChange={handleCityChange}
              >
                {listCities.map((item) => {
                  return (
                    <MenuItem value={item} key={item}>
                      {item}
                    </MenuItem>
                  );
                })}

                {/* <MenuItem value={"Nữ"}>Nữ</MenuItem>
          <MenuItem value={"Khác"}>Khác</MenuItem> */}
              </Select>
            </FormControl>
          </Form.Group>

          <Form.Group className={classes.formGroup}>
            <Form.Label>Quốc Gia</Form.Label>
            <Form.Control
              type="text"
              style={{ borderRadius: "30px" }}
              value={country}
              onChange={handleCountryChange}
            />
          </Form.Group>

          <Form.Group className={classes.formGroup}>
            <Button
              variant="secondary"
              type="submit"
              style={{
                backgroundColor: "#271A24",
                borderRadius: "14px",
                color: "#EA7C69",
                height: "48px",
                width: "172px",
                padding: "14px",
              }}
            >
              Hoàn tác
            </Button>
            <Button
              variant="secondary"
              type="submit"
              style={{
                background: "#F47722",
                borderRadius: "14px",
                color: "#FAFAFA",
                height: "48px",
                width: "172px",
                padding: "14px",
                marginLeft: "10px",
              }}
              onClick={handleSaveClick}
            >
              Lưu thay đổi
            </Button>
            <Snackbar
              open={openSucessDialog}
              autoHideDuration={2000}
              onClose={handleSaveClose}
            >
              <Alert onClose={handleSaveClose} severity="success">
                {successMessage}
              </Alert>
            </Snackbar>

            <Snackbar
              open={openErrorDialog}
              autoHideDuration={2000}
              onClose={handleSaveClose}
            >
              <Alert onClose={handleSaveClose} severity="error">
                {errorMessage}
              </Alert>
            </Snackbar>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default GeneralSetting;

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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
  root: {
    maxWidth: 345,
    margin: "95px",
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

  const handleSaveClick = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axiosClient.patch("/renter/general", {id: renterData._id, gender, city, country, nickName, birthDate: selectedBirthDate, name});
      console.log(response);
      if(response.data.success)
        setOpenSucessDialog(true);
      else
        setOpenErrorDialog(true);
    } catch (error) {
      setOpenErrorDialog(true);
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
          float: "left",
        }}
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="300px"
              width="300x"
              title="Contemplative Reptile"
              image={renterData.avatar}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "inline-block",
          float: "left",
          padding: "70px",
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
                Cập nhật thành công
              </Alert>
            </Snackbar>

            <Snackbar
              open={openErrorDialog}
              autoHideDuration={2000}
              onClose={handleSaveClose}
            >
              <Alert onClose={handleSaveClose} severity="error">
                Server lỗi ! Vui lòng thử lại sau ít phút !
              </Alert>
            </Snackbar>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default GeneralSetting;

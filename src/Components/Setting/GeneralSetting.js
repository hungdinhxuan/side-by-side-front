import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axiosClient from "../../Services/axiosClient";

import { Form, DropdownButton, Dropdown } from "react-bootstrap";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "95px",
  },
});

const GeneralSetting = () => {
  const classes = useStyles();
  useEffect(async () => {
    const response = await axiosClient.get("/renter");
    console.log(response.data.data);
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
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Họ và tên</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
          </Form.Group>
          
          <Form.Label>Giới tính</Form.Label>
          <DropdownButton id="dropdown-item-button" title="Nữ" variant="secondary" size="lg">
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
          </DropdownButton>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default GeneralSetting;

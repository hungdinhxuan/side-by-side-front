import React from "react";
import {Form, Button} from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    formStyle: {
        width: "50%",
        height: "50%",
        margin: "auto"
    }
}));

const WalletSetting = () => {
   const classes = useStyles();
   
  return (
    <div className={classes.formStyle}>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

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
  );
};

export default WalletSetting;

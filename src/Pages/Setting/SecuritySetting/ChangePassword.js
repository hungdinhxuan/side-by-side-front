import React from "react";
import { Form, Button } from "react-bootstrap";

const ChangePassword = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Mật khẩu hiện tại</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Mật khẩu mới</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Xác nhận mật khẩu mới</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="text-center" >
          <Button variant="primary" type="submit" style={{width: "50%", backgroundColor: "rgb(244, 119, 34)"}}>
            Submit
          </Button>
        </div>  
      </Form>
    </div>
  );
};

export default ChangePassword;

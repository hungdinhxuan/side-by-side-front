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
          <Form.Label>Nhập mã thẻ thanh toán</Form.Label>
          <Form.Control type="email" placeholder="Mã thẻ thanh toán" className="text-wallet-setting" />
          <Form.Text className="text-muted">
            Chúng tôi sẽ bảo mật thông tin cá nhân của bạn
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Họ và tên chủ thẻ</Form.Label>
          <Form.Control type="text" placeholder="Nhập tên" className="text-wallet-setting" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Đồng ý với thông tin đã điền" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default WalletSetting;

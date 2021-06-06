import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axiosClient from "../../../Services/axiosClient";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const ChangePassword = () => {

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] =useState('');
  const [cofirmPassword, setCofirmPassword] =useState('');
  const [openSucessDialog, setOpenSucessDialog] = useState(false);
  const [openErrorDialog, setOpenErrorDialog] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState('Mật khẩu đã được thay đổi thành công');
  const [errorMessage, setErrorMessage] = React.useState('Server lỗi, vui lòng thử lại sau ít phút!!');


  const handleCurrentPasswordChange=  (e) => {
    setCurrentPassword(e.target.value);
  }

  const handleNewPasswordChange= (e) => {
    setNewPassword(e.target.value);
  }

  const handleCofirmPasswordChange= (e) => {
    setCofirmPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axiosClient.patch('/auth/change-password', {password: currentPassword, newPassword});
      setSuccessMessage(data.message)
      console.log(data.message)
      setOpenSucessDialog(true);
      setCurrentPassword('');
      setNewPassword('');
      setCofirmPassword('');

    } catch (error) {
      const {data} = error.response
      setErrorMessage(data.message)
      setOpenErrorDialog(true);
      console.log(data.message)
      
    }
  }

  const handleSaveClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSucessDialog(false);
    setOpenErrorDialog(false);
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Mật khẩu hiện tại</Form.Label>
          <Form.Control type="password" value={currentPassword} onChange={handleCurrentPasswordChange}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Mật khẩu mới</Form.Label>
          <Form.Control type="password" value={newPassword} onChange={handleNewPasswordChange}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Xác nhận mật khẩu mới</Form.Label>
          <Form.Control type="password" value={cofirmPassword} onChange={handleCofirmPasswordChange}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        
      </Form>
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
    </div>
  );
};

export default ChangePassword;

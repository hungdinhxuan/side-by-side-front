import React, { useState, useCallback, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector, useDispatch } from "react-redux";
import {updateUserAccount} from "../../actions/admin";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ListUsers = ({ item, id }) => {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditvalue] = useState(item)
  const [successMessage, setSuccessMessage] = useState('Cập nhật thành công');
  const [errorMessage, setErrorMessage] = useState('Server lỗi, vui lòng thử lại sau ít phút!!');
  const [openSucessDialog, setOpenSucessDialog] = useState(false);
  const [openErrorDialog, setOpenErrorDialog] = useState(false);

  const dispatch = useDispatch();

  const handleOnEdit = () => {
    setOnEdit(true);
  };


  const handleChange = (event) => {
    setEditvalue({
        ...editValue,
        [event.target.name]: event.target.value
    });
  }

  const handleCancelEdit = () => {
    setOnEdit(false);
  }
  
  const handleCloseDialog = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSucessDialog(false);
    setOpenErrorDialog(false);
  }

  const handleUpdate =   async () => {
    const data = await dispatch(updateUserAccount(editValue))
    if(data.payload.error){
      setErrorMessage(data.payload.error.message);
      setOpenErrorDialog(true);

    }else{
      setSuccessMessage(data.payload.data.message);
      setOpenSucessDialog(true);
    }
    setOnEdit(false);

  }


 
  if (onEdit) {
    return (
      <tr>
           <th scope="col">
          {" "}
          <input type="checkbox" />
        </th>
        <td>
          <TextField type="text" name="name" value={editValue.name} />
        </td>
        <td>
          <img
            src={`https://rent-me-now.herokuapp.com/public/images/${
              item.avatar.split("/")[item.avatar.split("/").length - 1]
            }`}
            style={{ width: "60px" }}
          />
          <input type="file" />
        </td>
        <td>
          <TextField type="text" name="city" value={editValue.city} onChange={handleChange}/>
        </td>
        <td>
          <TextField type="text" name="username" value={editValue.username} onChange={handleChange}/>
        </td>
        <td>
          <TextField type="text" name="password" value={editValue.password} onChange={handleChange}/>
        </td>
        <td>
          <TextField type="text" name="email" value={editValue.email} onChange={handleChange}/>
        </td>
        <td>
          <TextField type="text" name="nickName" value={editValue.nickName} onChange={handleChange}/>
        </td>
        <td>
          <TextField type="text" name="role" value={editValue.role} onChange={handleChange}/>
        </td>
        <td>
          <button className="btn btn-success" style={{ marginRight: "5px" }} onClick={handleUpdate}>
            <CheckIcon />
          </button>
          <button className="btn btn-danger" onClick={handleCancelEdit}>
            <CloseIcon />
          </button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr key={item._id}>
        <th scope="col">
          {" "}
          <input type="checkbox" />
        </th>
        <td>{item.name}</td>
        <td>
          <img
            src={`https://rent-me-now.herokuapp.com/public/images/${
              item.avatar.split("/")[item.avatar.split("/").length - 1]
            }`}
            style={{ width: "60px" }}
          />
        </td>
        <td>{item.city}</td>
        <td>{item.username}</td>
        <td>{item.password}</td>
        <td>{item.email}</td>
        <td>{item.nickName}</td>
        <td>{item.role}</td>
        <td>
          <button
            className="btn btn-success"
            style={{ marginRight: "5px" }}
            onClick={handleOnEdit}
          >
            <EditIcon />
          </button>
          <button className="btn btn-danger" >
            <DeleteIcon />
          </button>
        </td>
        <Snackbar
              open={openSucessDialog}
              autoHideDuration={2000}
              onClose={handleCloseDialog}
            >
              <Alert onClose={handleCloseDialog} severity="success">
                {successMessage}
              </Alert>
            </Snackbar>

            <Snackbar
              open={openErrorDialog}
              autoHideDuration={2000}
              onClose={handleCloseDialog}
            >
              <Alert onClose={handleCloseDialog} severity="error">
                {errorMessage}
              </Alert>
            </Snackbar>
      </tr>
      
    );
  }
};

export default ListUsers;

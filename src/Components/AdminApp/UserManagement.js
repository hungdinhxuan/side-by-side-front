import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import getUserAccountByPage from "../../actions/admin";
import { Input } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Pagination from "@material-ui/lab/Pagination";
import BackToTop from "../../Hooks/BackToTop";
import "./Admin.css";

export default function UserManagement() {
  const { userAccount, isLoading, error } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const [account, setAccount] = useState(true);
  const [edit, setEdit] = useState(true);
  const [getData, setData] = useState([]);

  // Pagination
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(getUserAccountByPage(page));
  }, [page]);

  // useEffect(() => {
  //   setData(
  //     userAccount.renters?.map((item, index) => ({ ...item, isEdit: false }))
  //   );
  // }, [userAccount]);
  // const handleEdit = (rowCheck) => {
  //   setData(
  //     userAccount.renters?.map((item, index) => ({
  //       ...item,
  //       isEdit: rowCheck === index,
  //     }))
  //   );
  //   setEdit(true);
  // };

  const handleEdit = (id) => {
    const oldData = [...userAccount.renters];
    console.log(oldData);
    oldData.map((item, index) => {
      if (index === id) {
        setEdit(false);
      }
    });
    console.log('Helo');
  };

  

  const handleCancelEdit = () => {
    setData(
      userAccount.renters?.map((item, index) => ({ ...item, isEdit: false }))
    );
  };

  const handleAdd = () => {
    console.log(getData);
    setData([
      {
        avatar: "",
        isEdit: true,
      },
      ...getData,
    ]);
  };

  const handleChangeForm = (event, id) => {
    // console.log(event.target.name);
    const oldData = [...getData];
    oldData.forEach((item, index) => {
      if (id === index) {
        item[event.target.name] = event.target.value;
      }
    });
    setData(oldData);
  };

  return (
    <div className="mt-3">
      <div className="row" style={{ marginTop: "70px" }}>
        <button
          className="btn btn-success"
          style={{ padding: "15px", marginLeft: "25px", marginRight: "10px" }}
          onClick={() => {
            handleAdd();
          }}
        >
          <AddIcon />
        </button>
        <button className="btn btn-warning">Xóa toàn bộ</button>
      </div>
      <table class="table" style={{ marginTop: "15px" }}>
        <thead>
          <tr>
            <th scope="col">
              {" "}
              <input type="checkbox" />
            </th>
            <th scope="col">Tên</th>
            <th scope="col">Ảnh</th>
            <th scope="col">Thành phố</th>
            <th scope="col">Username</th>
            <th scope="col">Mật khẩu</th>
            <th scope="col">Email</th>
            <th scope="col">Nick name</th>
            <th scope="col">Vai trò</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userAccount.renters &&
            userAccount.renters.map((item, index) => (
              <tr key={item._id}>
                <td scope="row">
                  <input type="checkbox" />
                </td>
                {edit ? (
                  <>
                    <td>{item.name}</td>
                    <td>
                      <img
                        src={`https://rent-me-now.herokuapp.com/public/images/${
                          item.avatar.split("/")[
                            item.avatar.split("/").length - 1
                          ]
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
                        onClick={() => {handleEdit(item._id)}}
                      >
                        <EditIcon />
                      </button>
                      <button className="btn btn-danger">
                        <DeleteIcon />
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>
                      <TextField
                        type="text"
                        name="name"
                        value={item.name}
                        onChange={handleChangeForm}
                      />
                    </td>
                    <td>
                      <img
                        src={`https://rent-me-now.herokuapp.com/public/images/${
                          item.avatar.split("/")[
                            item.avatar.split("/").length - 1
                          ]
                        }`}
                        style={{ width: "60px" }}
                      />
                      <input type="file" />
                    </td>
                    <td>
                      <TextField type="text" name="city" value={item.city} />
                    </td>
                    <td>
                      <TextField
                        type="text"
                        name="userName"
                        value={item.username}
                        onChange={handleChangeForm}
                      />
                    </td>
                    <td>
                      <TextField
                        type="text"
                        name="password"
                        value={item.password}
                        onChange={handleChangeForm}
                      />
                    </td>
                    <td>
                      <TextField
                        type="text"
                        name="email"
                        value={item.email}
                        onChange={handleChangeForm}
                      />
                    </td>
                    <td>
                      <TextField
                        type="text"
                        name="nickName"
                        value={item.nickName}
                        onChange={handleChangeForm}
                      />
                    </td>
                    <td>
                      <TextField
                        type="text"
                        name="role"
                        value={item.role}
                        onChange={handleChangeForm}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-success"
                        style={{ marginRight: "5px" }}
                      >
                        <CheckIcon />
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          handleCancelEdit();
                        }}
                      >
                        <CloseIcon />
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
        </tbody>
      </table>
      <div
        style={{ width: "100%  ", margin: "10px auto" }}
        className="Admin-pagination"
      >
        <Pagination
          count={10}
          page={page}
          size="large"
          color="primary"
          onChange={handleChange}
        />
      </div>
      <BackToTop />
    </div>
  );
}

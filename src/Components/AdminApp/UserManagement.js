import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import AddIcon from "@material-ui/icons/Add";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import getUserAccountByPage from "../../actions/admin";
import { Input } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Pagination from "@material-ui/lab/Pagination";
import BackToTop from "../../Hooks/BackToTop";
import "./Admin.css";
import ListAccount from "./ListAccount";

export default function UserManagement() {
  const { userAccount, isLoading, error } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const [account, setAccount] = useState(true);
  const [edit, setEdit] = useState(true);
  const [getData, setData] = useState(userAccount.renters);

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
  console.log(userAccount.renters);

  return (
    <div className="mt-3">
      <div className="row" style={{ marginTop: "70px" }}>
        <button
          className="btn btn-success"
          style={{ padding: "15px", marginLeft: "25px", marginRight: "10px" }}
         
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
              <ListAccount account={item}  key={index} />
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

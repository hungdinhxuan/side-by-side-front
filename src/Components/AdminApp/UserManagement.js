import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import AddIcon from "@material-ui/icons/Add";

import getUserAccountByPage from "../../actions/admin";

import Pagination from "@material-ui/lab/Pagination";
import BackToTop from "../../Hooks/BackToTop";
import "./Admin.css";

import ListUsers from "./ListUsers";

export default function UserManagement() {
  const { userAccount, isLoading, error } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const [getData, setData] = useState([]);

  // Pagination
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await dispatch(getUserAccountByPage(page));
      if(data.payload.error){
        alert(data.payload.error.message);
        
      }else{
        // alert(data.payload.data.message);
        setData(data.payload.data.renters)
      }
    }
    fetchData();
  }, [dispatch, page, getData]);

 

  return (
    <div className="mt-3">
      <div className="row" style={{ marginTop: "70px" }}>
        <button
          className="btn btn-success"
          style={{ padding: "15px", marginLeft: "25px", marginRight: "10px" }}
          onClick={() => {
            
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
          {getData.map((item, index) => (
              <ListUsers item={item} id={index} />
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

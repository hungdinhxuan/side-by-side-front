import React, { useState, useEffect, useRef } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Input } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
export default function ListAccount({ account, key, stateEdit}) {
  const [edit, setEdit] = useState(false);
  const [change, setChange] = useState(account);

  console.log(edit);
  //   console.log(change);

  const handleEdit = (id) => {
    setEdit(!edit)
  };

  const handleChange = (event) => {
    setChange((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <tr key={account._id}>
      {!edit ? (
        <>
          <td scope="row">
            <input type="checkbox" />
          </td>
          <td>{account.name}</td>
          <td>
            <img
              src={`https://rent-me-now.herokuapp.com/public/images/${
                account.avatar.split("/")[account.avatar.split("/").length - 1]
              }`}
              style={{ width: "60px" }}
            />
          </td>
          <td>{account.city}</td>
          <td>{account.username}</td>
          <td>{account.password}</td>
          <td>{account.email}</td>
          <td>{account.nickName}</td>
          <td>{account.role}</td>
        </>
      ) : (
        <>
          <td scope="row">
            <input type="checkbox" />
          </td>
          <td>
            <Input
              type="text"
              name="name"
              value={change.name}
              onChange={handleChange}
            />
          </td>
          <td>
            <img
              src={`https://rent-me-now.herokuapp.com/public/images/${
                account.avatar.split("/")[account.avatar.split("/").length - 1]
              }`}
              style={{ width: "60px" }}
            />
            <input type="file" />
          </td>
          <td>
            <TextField
              type="text"
              name="city"
              value={change.city}
              onChange={handleChange}
            />
          </td>
          <td>
            <TextField
              type="text"
              name="username"
              value={change.username}
              onChange={handleChange}
            />
          </td>
          <td>
            <TextField
              type="text"
              name="password"
              value={change.password}
              onChange={handleChange}
            />
          </td>
          <td>
            <TextField
              type="text"
              name="email"
              value={change.email}
              onChange={handleChange}
            />
          </td>
          <td>
            <TextField
              type="text"
              name="nickName"
              value={change.nickName}
              onChange={handleChange}
            />
          </td>
          <td>
            <TextField
              type="text"
              name="role"
              value={change.role}
              onChange={handleChange}
            />
          </td>
        </>
      )}
      <td>
        <button
          className="btn btn-success"
          style={{ marginRight: "5px" }}
          onClick={handleEdit}
        >
          {!edit ? <EditIcon /> : <CheckIcon />}
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            if (edit) {
              setChange({ ...account });
              setEdit(!edit);
            }
          }}
        >
          {!edit ? <DeleteIcon /> : <CloseIcon />}
        </button>
      </td>
    </tr>
  );
}

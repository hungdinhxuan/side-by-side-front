import React, { useState, useRef, useEffect } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import classnames from "classnames";

import "../../Styles/SettingStreamer.css";
import { Manager } from "socket.io-client";

const SettingStreamer = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  //   Setup useState của form
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState([]);
  const [game, setGame] = useState("");
  const [desc, setDesc] = useState("");
  const [social, setSocial] = useState("");
  const [describe, setDescribe] = useState("");
  const [highlight, setHighlight] = useState("");
  const [device, setDevice] = useState("None");
  const [price, setPrice] = useState("");
  const [maxHours, setMaxHours] = useState("");
  const [requestHours, setRequestHours] = useState([]);

  // KHUNG GIỜ
  const HOURSARRAYSANG = [...Array(12).keys()];
  const HOURSARRAYTOI = [...Array(12).keys()];

  //   Handle form
  const handleEditName = () => {
    setEdit(true);
  };

  const handleImage = (event) => {
    // if (event.target.files && event.target.files[0]) {
    //   let reader = new FileReader();
    //   reader.onload = (event) => {
    //     setSelectedFile(event.target.result);
    //   };
    //   reader.readAsDataURL(event.target.files[0]);
    // }
    const files = Array.from(event.target.files);
    Promise.all(
      files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.addEventListener("load", (ev) => {
            resolve(ev.target.result);
          });
          reader.addEventListener("error", reject);
          reader.readAsDataURL(file);
        });
      })
    ).then(
      (images) => {
        /* Once all promises are resolved, update state with image URI array */
        setSelectedFile(images);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const handleCheckValue = () => {
    console.log(name);
  };
  //   const handleSetName = ({ target }) => {
  //     setName(target.value);
  //   };

  //  style={{background: "linear-gradient(0deg, rgba(228, 228, 227, 0.1), rgba(228, 228, 227, 0.1))"}}
  return (
    <div className="container">
      <Nav tabs className="setting-streamer">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Cài đặt thông tin thuê người chơi
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Cài đặt thông tin giờ thuê
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <div className="container">
            {edit ? (
              <div>
                <Form>
                  <FormGroup className="nickname">
                    <Input
                      type="text"
                      placeholder="Nhập nickname của bạn"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-input"
                    />
                  </FormGroup>
                  {/* <Button onClick={handleCheckValue}>Check value</Button> */}
                </Form>
              </div>
            ) : (
              <div>
                <p className="nick-name">
                  NickName{" "}
                  <button
                    style={{ background: "none", border: "none" }}
                    onClick={handleEditName}
                  >
                    <i class="fa fa-edit edit-icon"></i>
                  </button>
                </p>
              </div>
            )}

            <div className="game">
              <p className="game-title">Nhập vào tựa game của bạn</p>
              <Form>
                <FormGroup className="game">
                  <Input
                    type="text"
                    placeholder="Nhập tựa game bạn yêu thích: Liên Minh, Liên quân,...."
                    value={game}
                    onChange={(e) => setGame(e.target.value)}
                    className="border-input"
                  />
                </FormGroup>
                {/* <Button onClick={handleCheckValue}>Check value</Button> */}
              </Form>
            </div>
            <div className="desc">
              <p className="desc-title">Mô tả</p>
              <Form>
                <FormGroup className="desc">
                  <Input
                    type="text"
                    placeholder="Nhập vào mô tả về bản thân bạn"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </FormGroup>
              </Form>
            </div>
            <div className="social">
              <p className="social-title">Liên kết xã hội</p>
              <Form>
                <FormGroup className="social">
                  <Input
                    type="text"
                    placeholder="Nhập đường dẫn facebook, instagram,..."
                    value={social}
                    onChange={(e) => {
                      setSocial(e.target.value);
                    }}
                  />
                </FormGroup>
              </Form>
            </div>
            <div className="picture">
              <p className="album-title">Album ảnh</p>
              <div className="player-albums">
                <div className="row">
                  <div className="col-md-2 setting-albums">
                    <input
                      name="album"
                      type="file"
                      accept="image/png, image/jpeg, image/jpg"
                      multiple
                      onChange={handleImage}
                    />
                    <p>
                      <span className="btn-upload">
                        <i className="fas fa-images"></i>
                        Thêm ảnh
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="item-image-upload">
                    {selectedFile ? (
                      <div className="row">
                        {selectedFile.map((imageURI) => (
                          <div className="col-md-3">
                            <img
                              src={imageURI}
                              width="250px"
                              height="250px"
                              alt="Photo uploaded"
                              style={{ marginTop: "10px" }}
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="describe">
              <p className="describe-title">Giới thiệu chi tiết bản thân</p>
              <Form>
                <FormGroup className="describe-form">
                  <Input
                    type="textarea"
                    placeholder="Giới thiệu chi tiết"
                    onChange={(e) => {
                      setDescribe(e.target.value);
                    }}
                  />
                </FormGroup>
              </Form>
            </div>
            <div className="highlight">
              <p className="highlight-title">Link highlight</p>
              <Form>
                <FormGroup>
                  <Input
                    type="url"
                    placeholder="Nhập đường dẫn highlight"
                    value={highlight}
                    onChange={(e) => {
                      setHighlight(e.target.value);
                    }}
                    className="border-input"
                  />
                </FormGroup>
              </Form>
            </div>
            <div className="device">
              <p className="device-title">Mô tả</p>
              <FormGroup>
                <select
                  type="select"
                  name="select"
                  id="SelectDevice"
                  className="border-input"
                  onChange={(e) => setDevice(e.target.value)}
                >
                  <option value="Microphone">Microphone</option>
                  <option value="Video">Video</option>
                  <option value="All">Microphone + Video</option>
                  <option value="None">None</option>
                </select>
              </FormGroup>
            </div>
            <div className="btn-setting-profile row">
              <div className="col-md-6">
                <button className="btn-reset">Reset</button>
                <button className="btn-save">Lưu thay đổi</button>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tabId="2">
          <div className="container">
            <div className="price">
              <p className="price-title">Chi phí mỗi giờ thuê</p>
              <Form>
                <FormGroup className="price-form">
                  <Input
                    type="text"
                    placeholder="Giá trị lớn hơn 10.000 đ/h"
                    defaultValue="10.000"
                    onChange={(e) => setPrice(e.target.value)}
                    className="border-input"
                  />
                </FormGroup>
              </Form>
            </div>
            <div className="max-hours">
              <p className="max-hours-title">Mỗi lượt có thể thuê tối đa</p>
              <Form>
                <FormGroup className="max-hours-form">
                  <select
                    type="select"
                    name="select"
                    id="SelectHours"
                    className="border-input"
                    onChange={(e) => setMaxHours(e.target.value)}
                  >
                    <option>1 giờ</option>
                    <option>2 giờ</option>
                    <option>3 giờ</option>
                    <option>4 giờ</option>
                    <option>5 giờ</option>
                    <option>6 giờ</option>
                    <option>7 giờ</option>
                    <option>8 giờ</option>
                    <option>9 giờ</option>
                    <option>10 giờ</option>
                    <option>11 giờ</option>
                    <option>12 giờ</option>
                    <option>24 giờ</option>
                  </select>
                </FormGroup>
              </Form>
            </div>
            <div className="request-hours">
              <p className="request-hours-title">Khung giờ nhận yêu cầu</p>
              <div className="row">
                <div className="col-md-6 row request-left">
                  {HOURSARRAYSANG.map((item) => {
                    return (
                      <>
                        <div className="col-md-2">
                          <Input
                            type="checkbox"
                            onChange={(e) => {
                              if (e.target.checked) {
                                console.log(item + 1);
                              }
                            }}
                          />
                          {item + 1}
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="col-md-6 row request-right">
                  {HOURSARRAYTOI.map((item) => {
                    return (
                      <>
                        <div className="col-md-2">
                          <Input
                            type="checkbox"
                            onChange={(e) => {
                              if (e.target.checked) {
                                console.log(item + 1);
                              }
                            }}
                          />
                          {item + 1}
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="setting-right-button">
              <div className="btn-setting-profile row">
                <div className="col-md-6">
                  <button className="btn-reset">Reset</button>
                  <button className="btn-save">Lưu thay đổi</button>
                </div>
              </div>
            </div>
          </div>
        </TabPane>
      </TabContent>
    </div>
  );
};
{
  /* <div className="col-md-2">
                    <Input type="checkbox" checked="checked" />
                    1PM
                  </div> */
}

export default SettingStreamer;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CountdownTime from "../../Components/CountdownTime";
import Anh from "../../img/Ha.jpg";
import Anh1 from "../../img/Ha1.jpg";
import Anh2 from "../../img/Ha2.jpg";
import Anh3 from "../../img/Ha3.jpg";
import Anh4 from "../../img/Ha4.jpg";
import "../../Styles/DetailStreamer.css";
import DonateStreamer from "./DonateStreamer";
import getPlayersById from "../../actions/player";

export default function DetailStreamer() {
  const { id } = useParams();
  const { data, isLoading, error } = useSelector((state) => state.player);
  const {price, setPrice} = useState(0);
  const newDay = new Date(
    +new Date() - Math.floor(Math.random() * 10000000000)
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlayersById(id));
    console.log(data);
  }, [id]);
  // console.log(streamer);
  if(data){
    console.log(data.playerID);
  }

  const [donateOpen, setDonateOpen] = useState(false);
  const [rent, setRent] = useState(false);

  const handleRent = () => {
    setRent(true);
  };

  const handleDonate = () => {
    setDonateOpen(!donateOpen);
    console.log(donateOpen);
  };

  // Đây là detail của nhân vật streamer: {newDay.getDate().toString()} / {newDay.getMonth().toString()*1 + 1} / {newDay.getFullYear().toString()}
  return (
    <div
      className="container"
      style={{ marginTop: "10px", marginBottom: "10px" }}
    >
      <div className="row">
        <div className="player-profile-left col-md-3">
          <div className="avt avt-lg">
            <img src={data.avatar} alt="Anh streamer" className="avt-img" />
          </div>
          <div className="rent-time-wrap">
            <p className="ready">Đang sẵn sàng</p>
          </div>
          <div className="member-since">
            <span>Ngày tham gia: </span>
            <span>{data.createdAt}</span>
            <div className="icon-wrap facebook"><a href="https://facebook.com/camapduahau" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a></div>

          </div>
        </div>
        <div className="player-profile-main col-md-6 col-md-push-3">
          <div className="row">
            <div className="col-md-12 center-item">
              <span className="hidden-over-name name-player-profile">
                {data.displayName}
              </span>
              <button className="btn-player">
                <i className="fa fa-heart"></i>
                &nbsp;
                <span className="plus">Theo dõi</span>
              </button>
            </div>
          </div>
          <div className="nav-player-profile row">
            <div className="row col-md-3 col-xs-6">
              <div className="item-nav-name">
                <span>Số người theo dõi</span>
              </div>
              <div className="item-nav-value">
                69 <span>Người</span>
              </div>
            </div>
            <div className="row col-md-3 col-xs-6">
              <div className="item-nav-name">
                <span>Đã được thuê</span>
              </div>
              <div className="item-nav-value">
                770 <span>Giờ</span>
              </div>
            </div>
            <div className="row col-md-3 col-xs-6">
              <div className="item-nav-name">
                <span>Tỉ lệ hoàn thành</span>
              </div>
              <div className="item-nav-value">
                99.4<span>%</span>
              </div>
            </div>
            <div className="row col-md-3 col-xs-6">
              <div className="item-nav-name">
                <span>Tình trạng thiết bị</span>
              </div>
              <div className="item-nav-value">
                <i className="fas fa-microphone"></i>&nbsp;
                <i className="fas fa-video"></i>
              </div>
            </div>
          </div>
          <div className="horizontal"></div>
          <div className="title-player-profile row">
            <div className="col-md-12">
              <span>{data.shortDescribe}</span>
            </div>
          </div>
          <div className="content-player-profile">
            <div className="album-of-player">
              <div style={{ display: "inherit", width: "100%" }}>
                <div className="img-player">
                  <img src={Anh} />
                </div>
                <div className="img-player">
                  <img src={Anh1} />
                </div>
                <div className="img-player">
                  <img src={Anh2} />
                </div>
                <div className="img-player">
                  <img src={Anh3} />
                </div>
                <div className="img-player">
                  <img src={Anh4} />
                </div>
              </div>
            </div>
            <p>{data.detailDescribe}</p>
            <div class="video-player-profile">
              <div className="col-md-12" style={{ padding: "0" }}>
                <iframe
                  width="100%"
                  height="350"
                  src={`https://www.youtube.com/embed/oci_a9RQ6gE`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="horizontal"></div>
          <div className="title-player-profile row">
            <div className="col-md-12">
              <span>Đánh giá</span>
            </div>
          </div>
          <div className="review-duo-player row">
            <div className="col-md-12">
              <div className="full-size">
                <div className="review-img-small">
                  <div className="avt avt-md">
                    <img src={Anh} className="avt-img" />
                  </div>
                </div>
                <div className="wrapper-content-rating">
                  <div className="review-content">
                    <a href="#">
                      <p className="name-player-review hidden-over-name color-vip-6">
                        Tú
                      </p>
                    </a>
                    <p className="time-player-review">
                      <span>14:29:14, 3/6/2021</span>
                    </p>
                    <p className="content-player-review">
                      Đáng iu. Cho bạn 10đ
                    </p>
                  </div>
                  <div className="review-rating">
                    <div className="rateting-style">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      &nbsp;
                    </div>
                  </div>
                </div>
              </div>
              <div className="full-size">
                <div className="review-img-small">
                  <div className="avt avt-md">
                    <img src={Anh1} className="avt-img" />
                  </div>
                </div>
                <div className="wrapper-content-rating">
                  <div className="review-content">
                    <a href="#">
                      <p className="name-player-review hidden-over-name color-vip-6">
                        Tú
                      </p>
                    </a>
                    <p className="time-player-review">
                      <span>14:29:14, 3/6/2021</span>
                    </p>
                    <p className="content-player-review">
                      Thả tim cho bạn ♥ ♥ ♥
                    </p>
                  </div>
                  <div className="review-rating">
                    <div className="rateting-style">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      &nbsp;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="player-profile-right col-md-3 col-md-pull-6">
          <div className="right-player-profile">
            <p className="price-player-profile">{data?.playerID?.price} đ/h</p>
            <div className="rateting-style">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              &nbsp;
              <span>
                119 <span>Đánh giá</span>
              </span>
            </div>
            <div className="text-center">
              {rent ? (
                <CountdownTime num={5} />
              ) : (
                <>
                  <button className="btn-my-style red" onClick={handleRent}>
                    Thuê
                  </button>
                </>
              )}
              <button className="btn-my-style white" onClick={handleDonate}>
                Donate
              </button>
              <button className="btn-my-style white">Chat</button>
            </div>
          </div>
        </div>
      </div>
      {donateOpen && <DonateStreamer open={donateOpen} />}
    </div>
  );
}

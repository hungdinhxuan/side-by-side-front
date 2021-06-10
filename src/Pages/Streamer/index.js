import React, { useState, useEffect } from "react";

import Pagination from "@material-ui/lab/Pagination";
import Typography from "@material-ui/core/Typography";

import { useDispatch, useSelector } from "react-redux";
import { getStreamerByPage } from "../../actions/streamer";

import Anhmau from "../../img/header_bg.jpg";
import Loading from "../../Components/Loading";

import StreamerCard from "../../Components/StreamerCard";
import BackToTop from "../../Hooks/BackToTop";
import "../../Styles/DetailStreamer.css";

import {socket} from "../../Services/socket";
import {getCookie} from "../../Services/handleCookie";


export default function Streamer(props) {
  const dispatch = useDispatch();
  let { dulieu, isLoading, error } = useSelector((state) => state.streamer);
  const [page, setPage] = useState(1);
  const [openSetting, setOpenSetting] = useState(false);
  const [players, setPlayers] = useState([])


  const handleSetting = () => {
    setOpenSetting(!openSetting);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    // Gửi lên server lấy dữ liệu players
    socket.emit('getListPlayers')
    // Gửi lên server cookie
    socket.emit('validate', getCookie("token"))
    socket.on('showPlayers', (data) => {
      console.log(data.response)
      setPlayers(data.response)
    })
    
  }, [])

  useEffect(() => {
    dispatch(getStreamerByPage(page));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  if (isLoading) {
    return (
      <div style={{ background: "pink", padding: "100px" }}>
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div className="streamer">
      <div className="container row" style={{ backgroundImage: { Anhmau } }}>
        {players &&
          players.map((item) => <StreamerCard streamer={item} key={item._id} />)}
      </div>
      {/* <div style={{width: "22%", margin: "10px auto"}}>
      <Pagination coun
      t={10} color="primary" size="large" />
      </div> */}
      <div style={{ width: "22%", margin: "10px auto" }}>
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

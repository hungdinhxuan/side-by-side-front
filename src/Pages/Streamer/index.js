import React, { useState, useEffect, useContext, useRef } from "react";

import Pagination from "@material-ui/lab/Pagination";
import Typography from "@material-ui/core/Typography";

import { useDispatch, useSelector } from "react-redux";
import { getStreamerByPage } from "../../actions/streamer";

import Anhmau from "../../img/header_bg.jpg";
import Loading from "../../Components/Loading";

import StreamerCard from "../../Components/StreamerCard";
import BackToTop from "../../Hooks/BackToTop";
import "../../Styles/DetailStreamer.css";
// import { socket } from "../../Services/socket";

import { getCookie } from "../../Services/handleCookie";
import { socketContext } from "../../Components/socket";

export default function Streamer(props) {
  const dispatch = useDispatch();
  let { dulieu, isLoading, error } = useSelector((state) => state.streamer);
  const [page, setPage] = useState(1);
  const [openSetting, setOpenSetting] = useState(false);
  const [players, setPlayers] = useState([]);

  const handleSetting = () => {
    setOpenSetting(!openSetting);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  // useEffect(() => {
  //   socket.emit("getListPlayers");
  //   socket.on("showPlayers",(data)=> {
  //     setPlayers(data.response);
  //   });
  //   console.log(players);
  // }, []);

  // Use socket
  const testPlayers = useRef();

  const socket = useContext(socketContext);

  useEffect(() => {
    socket.emit("GET_USERS");
    socket.on("GET_USERS", (data) => {
      // setPlayers(item => [...item,data.response]);
      console.log(data.response);
      setPlayers(data.response);
    });
    return () => {
      socket.removeEventListener();
    }
  }, [socket]);

  useEffect(() => {
    socket.emit("GET_USERS");
    const time1 = setTimeout(() => {
      socket.on("GET_USERS", (data) => {
        console.log(data.response);
        // setPlayers(item => [...item,data.response]);
        setPlayers(data.response);
      });
    }, 10000);

    return () => {
      // socket.removeEventListener();
      clearTimeout(time1);
    };
  }, [players]);

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
          players.map((item) => (
            <StreamerCard streamer={item} key={item._id} />
          ))}
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

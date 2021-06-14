import React, { useState, useEffect, useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import "./messenger.css";
import Message from "../Message/Message";
import iconplane from '../../img/plane.png';

import { socketContext } from "../socket";
import CountdownTime from "../CountdownTime";
import { getCookie } from "../../Services/handleCookie";
import jwt_decode from "jwt-decode";
import { Redirect } from "react-router-dom";
export default function Messenger() {
  const [messages, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState(true);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  // const [sender, setSender] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [time,setTime] = useState(0);
  //   Sử dụng socket
  const socket = useContext(socketContext);
  const { id } = useParams();
  const {renterId} = jwt_decode(getCookie('token'))
  
  
  // Khi tham gia room
  useEffect(() => {
    if(!(renterId in id.split('--with--'))){
      return <Redirect to= "/" />;
    }  
    socket.emit("JOIN_ROOM", id);
    socket.on("ON_MESSEGES", (data) => {
      setArrivalMessage({ data, flag: false });
      console.log(data);
    });
    socket.emit("EMIT_AVATAR");
    socket.on("ON_AVATAR", (avatar) => {
      setAvatar(avatar);
    });

    // Lần đầu khi render ra  giao diện
    socket.emit("RENTING");
    socket.on("RENTING", (data) => {
      console.log(data);
      setTime(data[data.length - 1]?.time);
    });
  }, []);

  
  console.log(time);
  
  useEffect(() => {
    arrivalMessage && setMessages((pre) => [...pre, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  const handleEnterTextarea = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    socket.emit("EMIT_MESSEGES", { avatar, text: newMessage });
    setMessages((pre) => [
      ...pre,
      { data: { avatar, text: newMessage }, flag: true },
    ]);
    setNewMessage("");
    // setSender(true);
  };

  // Khi  scroll thanh messages
  // useEffect(() => {
  //   scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [arrivalMessage]);


  // Đếm ngược thời gian
  const convertHours = (t) => {
    return new Date(t * 1000)
      .toUTCString()
      .replace(/.*(\d{2}):(\d{2}):(\d{2}).*/, "$1h $2m $3s");
  };

  let intervalRef = useRef();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const decreaseNum = () => {
    if (time > 0) {
      setTime((prev) => prev - 1);
    }
  };
  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000);

    return () => clearInterval(intervalRef.current);
  }, [time, decreaseNum]);

  const scrollRef = useRef();

  return (
    <div className="messenger">
      <div className="chatBox">
        <div className="chatBoxWrapper">
          {currentChat ? (
            <>
              <div className="chatBoxTop">
                {messages.map((m) => (
                  <div>
                    <Message message={m.data} own={m.flag} />
                  </div>
                ))}
              </div>
              <div className="chatBoxBottom">
                <textarea
                  className="chatMessageInput"
                  placeholder="write something..."
                  value={newMessage}
                  onKeyDown={handleEnterTextarea}
                  onChange={(e) => {
                    setNewMessage(e.target.value);
                  }}
                ></textarea>
                <button className="chatSubmitButton" onClick={handleSubmit}>
                  <img src={iconplane} alt="icon" style={{width: "100%", height: "100%"}}/>
                </button>
                <div className="hours-renting">
                  <strong>{convertHours(time)}</strong>
                </div>
              </div>
            </>
          ) : (
            <span className="noConversationText">
              Open a conversation to start a chat.
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

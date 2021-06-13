import React, { useState, useEffect, useContext, useRef } from "react";
import "./messenger.css";
import Message from "../Message/Message";

import { socketContext } from "../socket";

export default function Messenger() {
  const [messages, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState(true);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  // const [sender, setSender] = useState(false);
  const [avatar, setAvatar] = useState("");
  //   Sử dụng socket
  const socket = useContext(socketContext);

  useEffect(() => {
    
    socket.emit("JOIN_ROOM", "1--with--2");
    socket.on("ON_MESSEGES", (data) => {
      setArrivalMessage({data,flag: false});
      console.log(data);
    });
  }, [socket]);

  useEffect(() =>{
    socket.emit('EMIT_AVATAR')
    socket.on('ON_AVATAR', (avatar) =>{
      setAvatar(avatar);
    })
  }, [socket]);
  useEffect(
    () => {
      arrivalMessage && setMessages((pre) => [...pre, arrivalMessage]);
    },
    [arrivalMessage,currentChat],
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("EMIT_MESSEGES",{avatar, text: newMessage});
    setMessages((pre) => [...pre, {data: {avatar, text: newMessage}, flag: true}]);
    setNewMessage("");
    // setSender(true);
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const scrollRef = useRef();

  return (
    <div className="messenger">
      <div className="chatBox">
        <div className="chatBoxWrapper">
          {currentChat ? (
            <>
              <div className="chatBoxTop"> 
                {messages.map((m) => (
                  <div ref={scrollRef}>
                    <Message message={m.data} own={m.flag} />
                  </div>
                ))}
              </div>
              <div className="chatBoxBottom">
                <textarea
                  className="chatMessageInput"
                  placeholder="write something..."
                  value={newMessage}
                  onChange={(e) => {
                    setNewMessage(e.target.value);
                  }}
                ></textarea>
                <button className="chatSubmitButton" onClick={handleSubmit}>
                  Send
                </button>
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

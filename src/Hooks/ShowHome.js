import React, { useState, useEffect } from "react";
import "../Styles/Home.css";

export default function ShowHome() {
  const [show, setShow] = useState(false);
  //   const [showtext, setShowText] = useState("show-more");

  const handleShowmore = () => {
    setShow((show) => !show);
    // setShowText("show-less");
  };
  


  return (
    <div id="show-home">
      <div className={show ? "show-more mt-4" : "show-less d-none"}>
        <div className="show-more-header">
          <div className="line-middle"></div>
          <h1>Đây là Show more</h1>
          <div className="line-middle"></div>
        </div>
        <p>Hello mấy cưng</p>
      </div>
      <div className="show-more-game">
        <div className="line-middle"></div>
        <button onClick={handleShowmore}>
          {show ? ("Show-less" && <i class="fa fa-arrow-up"></i>): ("Show-more" && <i class="fa fa-arrow-down"></i>)} 
        </button>
        <div className="line-middle"></div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "../Styles/Home.css";
import Anh from "../img/image 1.png";

export default function ShowHome() {
  const [show, setShow] = useState(false);
  //   const [showtext, setShowText] = useState("show-more");

  const handleShowmore = () => {
    setShow((show) => !show);
    // setShowText("show-less");
  };

  return (
    <div id="show-home">
      <div className="show-more-header">
        {/* <div className="line-middle"></div> */}
        <h3>Game Recommended</h3>
        {/* <div className="line-middle"></div> */}
      </div>
      <div className="show-more-list">
          <div className="show-more-game-items">
            <img src={Anh}></img>
            <p>50k+ Views</p>
            <span className="text-game-items" style={{ display: "block" }}>
              League of Legends
            </span>
            <a
              href="https://youtube.com"
              target="_blank"
              className="game-items"
            >
              MOBA
            </a>
          </div>
          <div className="show-more-game-items">
            <img src={Anh}></img>
            <p>50k+ Views</p>
            <span className="text-game-items" style={{ display: "block" }}>
              League of Legends
            </span>
            <a
              href="https://youtube.com"
              target="_blank"
              className="game-items"
            >
              MOBA
            </a>
          </div>
          <div className="show-more-game-items">
            <img src={Anh}></img>
            <p>50k+ Views</p>
            <span className="text-game-items" style={{ display: "block" }}>
              League of Legends
            </span>
            <a
              href="https://youtube.com"
              target="_blank"
              className="game-items"
            >
              MOBA
            </a>
          </div>
          <div className="show-more-game-items">
            <img src={Anh}></img>
            <p>50k+ Views</p>
            <span className="text-game-items" style={{ display: "block" }}>
              League of Legends
            </span>
            <a
              href="https://youtube.com"
              target="_blank"
              className="game-items"
            >
              MOBA
            </a>
          </div>
          <div className="show-more-game-items">
            <img src={Anh}></img>
            <p>50k+ Views</p>
            <span className="text-game-items" style={{ display: "block" }}>
              League of Legends
            </span>
            <a
              href="https://youtube.com"
              target="_blank"
              className="game-items"
            >
              MOBA
            </a>
          </div>
          <div className="show-more-game-items">
            <img src={Anh}></img>
            <p>50k+ Views</p>
            <span className="text-game-items" style={{ display: "block" }}>
              League of Legends
            </span>
            <a
              href="https://youtube.com"
              target="_blank"
              className="game-items"
            >
              MOBA
            </a>
          </div>
          <div className="show-more-game-items">
            <img src={Anh}></img>
            <p>50k+ Views</p>
            <span className="text-game-items" style={{ display: "block" }}>
              League of Legends
            </span>
            <a
              href="https://youtube.com"
              target="_blank"
              className="game-items"
            >
              MOBA
            </a>
          </div>
          <div className="show-more-game-items">
            <img src={Anh}></img>
            <p>50k+ Views</p>
            <span className="text-game-items" style={{ display: "block" }}>
              League of Legends
            </span>
            <a
              href="https://youtube.com"
              target="_blank"
              className="game-items"
            >
              MOBA
            </a>
          </div>
        </div>
      
      <div className={show ? "show-more mt-4" : "show-less d-none"}>
        <div className="show-more-list">
          <div className="show-more-game-items">
            <img src={Anh}></img>
            <p>50k+ Views</p>
            <span className="text-game-items" style={{ display: "block" }}>
              League of Legends
            </span>
            <a
              href="https://youtube.com"
              target="_blank"
              className="game-items"
            >
              MOBA
            </a>
          </div>
          <div className="show-more-game-items">
            <img src={Anh}></img>
            <p>50k+ Views</p>
            <span className="text-game-items" style={{ display: "block" }}>
              League of Legends
            </span>
            <a
              href="https://youtube.com"
              target="_blank"
              className="game-items"
            >
              MOBA
            </a>
          </div>
          <div className="show-more-game-items">
            <img src={Anh}></img>
            <p>50k+ Views</p>
            <span className="text-game-items" style={{ display: "block" }}>
              League of Legends
            </span>
            <a
              href="https://youtube.com"
              target="_blank"
              className="game-items"
            >
              MOBA
            </a>
          </div>
          <div className="show-more-game-items">
            <img src={Anh}></img>
            <p>50k+ Views</p>
            <span className="text-game-items" style={{ display: "block" }}>
              League of Legends
            </span>
            <a
              href="https://youtube.com"
              target="_blank"
              className="game-items"
            >
              MOBA
            </a>
          </div>
          <div className="show-more-game-items">
            <img src={Anh}></img>
            <p>50k+ Views</p>
            <span className="text-game-items" style={{ display: "block" }}>
              League of Legends
            </span>
            <a
              href="https://youtube.com"
              target="_blank"
              className="game-items"
            >
              MOBA
            </a>
          </div>
          <div className="show-more-game-items">
            <img src={Anh}></img>
            <p>50k+ Views</p>
            <span className="text-game-items" style={{ display: "block" }}>
              League of Legends
            </span>
            <a
              href="https://youtube.com"
              target="_blank"
              className="game-items"
            >
              MOBA
            </a>
          </div>
          <div className="show-more-game-items">
            <img src={Anh}></img>
            <p>50k+ Views</p>
            <span className="text-game-items" style={{ display: "block" }}>
              League of Legends
            </span>
            <a
              href="https://youtube.com"
              target="_blank"
              className="game-items"
            >
              MOBA
            </a>
          </div>
          <div className="show-more-game-items">
            <img src={Anh}></img>
            <p>50k+ Views</p>
            <span className="text-game-items" style={{ display: "block" }}>
              League of Legends
            </span>
            <a
              href="https://youtube.com"
              target="_blank"
              className="game-items"
            >
              MOBA
            </a>
          </div>
        </div>
      </div>
      <div className="show-more-game">
        <div className="line-middle"></div>
        <button onClick={handleShowmore}>
          {show ? (
            <div className="text-show-more">
              Show Less <i class="fa fa-arrow-up"></i>
            </div>
          ) : (
            <div className="text-show-more">
              Show more <i class="fa fa-arrow-down"></i>
            </div>
          )}
        </button >
        <div className="line-middle"></div>
      </div>
    </div>
  );
}

import React from "react";
import Update from "../../img/update.png";

export default function Newsfeed() {
  return (
    <div className="row" style={{ height: "80vh", margin: "0" }}>
      <div
        className="col-md-6 col-sm-12"
        style={{ height: "100%", textAlign: "end" }}
      >
        <img src={Update} alt="Ảnh update" style={{ height: "100%" }} />
      </div>
      <div
        className="col-md-6 col-sm-12 row"
        style={{ fontSize: "50px", fontWeight: "600", alignItems: "center" }}
      >
        Vẫn đang đi nhiều chuyện nên sẽ update sau...
      </div>
    </div>
  );
}

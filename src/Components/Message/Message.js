import "./message.css";
import  moment from "moment";
import AnhTest from "../../img/Ha.jpg"

export default function Message({ message, own }) {
    return (
      <div className={own ? "message own" : "message"}>
        <div className="messageTop">
          <img
            className="messageImg"
            src={message.avatar}
            alt=""
          />
          <p className="messageText">{message.text}</p>
        </div>
        <div className="messageBottom">{moment(new Date()).format("DD MMM YYYY")}</div>
      </div>
    );
  }
import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import { Link, Redirect, Route, useParams } from "react-router-dom";
import "../Styles/StreamerCard.css";

const StreamerCard = (props) => {
  const { streamer } = props;
  let { id } = useParams();
  return (
    <div className="col-3" key={streamer._id}>
      <CardColumns>
        <Card style={{ width: "270px", height: "380px" }}>
          <CardImg
            top
            width="100%"
            height="50%"
            src={streamer.avatar}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">
              {streamer.firstName + " " + streamer.lastName}
            </CardTitle>
            <div className="price-right">
              {streamer.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              đồng /h
            </div>
            <div className="desc-card">
              <CardText>Hello mấy cưng</CardText>
            </div>
            <div className="game-card">
              <CardText>Thể loại game Liên minh, Liên Quân  {streamer.status === 'active' ? <span class="dot-online"></span> : <span class="dot-offline"></span>}</CardText>
            </div>
            <div className="btn-rent">
              <Link to={`/detail/${streamer._id}`}>Thuê ngay</Link>
            </div>
          </CardBody>
        </Card>
      </CardColumns>
    </div>
  );
};

export default StreamerCard;

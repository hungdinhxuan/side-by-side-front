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
import {Link, Redirect, Route, useParams} from 'react-router-dom';

const StreamerCard = (props) => {
  const {streamer} = props;
  let {id} = useParams();
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
            <CardTitle tag="h5">{streamer.firstName + " " + streamer.lastName}</CardTitle>
            <CardSubtitle
              tag="h6"
              className="mb-2 text-muted"
              style={{ h6: "red" }}
            >
              {streamer.price}đ/1h
            </CardSubtitle>
            <CardText>{streamer.renterId.nation}</CardText>
            
            <Link to={`/detail/${streamer._id}`}>Thuê ngay</Link>
          </CardBody> 
        </Card>
      </CardColumns>
    </div>
  );
};

export default StreamerCard;

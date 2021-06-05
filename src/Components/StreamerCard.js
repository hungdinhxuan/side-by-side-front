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

const StreamerCard = ({ streamer }) => {
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
            
            <Button>Thuê ngay</Button>
          </CardBody>
        </Card>
      </CardColumns>
    </div>
  );
};

export default StreamerCard;

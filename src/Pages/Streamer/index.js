import axiosClient from "../../Services/axiosClient";
import React, { useState, useEffect } from "react";
import { serverHost } from "../../config";
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
const Streamer = () => {
  const [playerState, setPlayersState] = useState([]);
  useEffect(() => {
    const getPlayers = async () => {
      try {
        const res = await axiosClient.get(`${serverHost}/player`);
        setPlayersState(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getPlayers();
    console.log(playerState)
  }, []);

  return (
    <CardColumns>
      {playerState &&
        playerState.map(player => {
            return (
          <Card>
            <CardImg
              top
              width="100%"
              src={player.avatar}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">{player.renterId}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted" style={{h6: 'red'}}>
                {player.price}đ/1h
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Thuê ngay</Button>
            </CardBody>
          </Card>
            )
        })}
    </CardColumns>
  );
};

export default Streamer;

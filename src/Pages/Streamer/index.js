import React, { useState, useEffect } from "react";

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

import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';

import { useDispatch, useSelector } from "react-redux";
import { getStreamerByPage } from "../../actions/streamer";
import { useParams } from "react-router-dom";
import Anhmau from '../../img/header_bg.jpg';

export default function Streamer() {
  const dispatch = useDispatch();
  const { dulieu, isLoading, error } = useSelector((state) => state.streamer);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getStreamerByPage(page));
  }, []);

  if (isLoading) {
    console.log(dulieu);
  }

  if (error) {
    console.log(error);
  }
  const handleChange = (event, value) => {
    setPage(value);
  }
  

  return (
    <div className="streamer">
      <div className="container row" style={{backgroundImage: {Anhmau}}}>
        {dulieu &&
          dulieu.map((item) => 
            (
              <div className="col-3">
                <CardColumns>
                  <Card style={{width: "270px", height: "380px"}}>
                    <CardImg
                      top
                      width="100%"
                      height="50%"
                      src={item.avatar}
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle tag="h5">{item._id}</CardTitle>
                      <CardSubtitle
                        tag="h6"
                        className="mb-2 text-muted"
                        style={{ h6: "red" }}
                      >
                        {item.price}đ/1h
                      </CardSubtitle>
                      <CardText>hùng gà</CardText>
                      <Button>Thuê ngay</Button>
                    </CardBody>
                  </Card>
                </CardColumns>
              </div>
            )
          ) }
      </div>
      {/* <div style={{width: "22%", margin: "10px auto"}}>
      <Pagination coun
      t={10} color="primary" size="large" />
      </div> */}
      <div style={{width: "22%", margin: "10px auto"}}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} size="large" color="primary" onChange={handleChange}/>
      </div>
    </div>
  );
}

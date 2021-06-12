import React from "react";
import { Result, Button } from "antd";
import {Link} from "react-router-dom";
import "antd/dist/antd.css";
const Page404 = () => {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary"><Link to="/">Back home</Link></Button>}
        style={{color: "white"}}
      />
      
    </div>
  );
};

export default Page404;

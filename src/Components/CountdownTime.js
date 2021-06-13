import React, { useRef, useEffect, useState } from "react";

export default function CountdownTime(props) {
  const { num } = props;
  console.log(num);
  const [hours, setHours] = useState(num);
  const [pause, setPause] = useState(false);
  let intervalRef = useRef();
  
  console.log(hours);
  // Set mins
  const convertHours = (t) => {
    return new Date(t * 1000)
      .toUTCString()
      .replace(/.*(\d{2}):(\d{2}):(\d{2}).*/, "$1h $2m $3s");
  };
  useEffect(() => {
    setHours(num);
    console.log(hours);
  }, []);

  const decreaseNum = () => {
    if (hours > 0) {
      setHours((prev) => prev - 1);
    }
  };

  useEffect(() => {
    setPause(false);
    intervalRef.current = setInterval(decreaseNum, 1000);

    return () => clearInterval(intervalRef.current);
  }, [hours, decreaseNum]);
  // if (payment === 0) {
  //   window.location.reload();
  // }
  //   const handleClick = () => {
  //     if (!pause) {
  //       clearInterval(intervalRef.current);
  //     } else {
  //       intervalRef.current = setInterval(decreaseNum, 1000);
  //     }
  //     setPause((prev) => !prev);
  //   };

  return (
    <div style={{ color: "black" }}>
      <div>{convertHours(hours)}</div>
    </div>
  );
}

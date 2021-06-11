import React, { useRef, useEffect, useState } from "react";

export default function CountdownTime({ num }) {
  const [payment, setNum] = useState(num);
  const [pause, setPause] = useState(false);
  let intervalRef = useRef();

  // Set mins
  const convertHours = (t) => {
    return new Date((t % 86400) * 1000)
      .toUTCString()
      .replace(/.*(\d{2}):(\d{2}):(\d{2}).*/, "$2m $3s");
  };

  const decreaseNum = () => {
    if (payment > 0) {
      setNum((prev) => prev - 1);
    }
  };

  useEffect(() => {
    setPause(false);
    intervalRef.current = setInterval(decreaseNum, 1000);

    return () => clearInterval(intervalRef.current);
  }, [payment, decreaseNum]);
  if (payment === 0) {
    window.location.reload();
  }
//   const handleClick = () => {
//     if (!pause) {
//       clearInterval(intervalRef.current);
//     } else {
//       intervalRef.current = setInterval(decreaseNum, 1000);
//     }
//     setPause((prev) => !prev);
//   };

  return (
    <div style={{ color: "white" }}>
      <div>{convertHours(payment)}</div>
    </div>
  );
}

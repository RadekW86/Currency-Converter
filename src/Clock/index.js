import "./style.css";
import React, { useState } from "react";
import { useEffect } from "react";


const Clock = () => {
  const [dateNow, setDateNow] = useState(new Date());
  
  useEffect(() => {
    const intervalId = setInterval(() => {
    setDateNow(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="clock">
        Today is{" "}
        {dateNow.toLocaleDateString("en-EN", {
          weekday: "long",
        })}
        ,{" "}
        {dateNow.toLocaleDateString("en-EN", {
          month: "long",
          day: "numeric",
        })}
        ,{" "}
        {dateNow.toLocaleTimeString("en-EN", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        })}
      </div>
    </>
  );
};

export default Clock;

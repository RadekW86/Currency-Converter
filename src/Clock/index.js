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

  const formatWeekday = (date) =>
    date.toLocaleDateString("en-EN", {
      weekday: "long",
    });

  const formatDayMonth = (date) =>
    date.toLocaleDateString("en-EN", {
      month: "long",
      day: "numeric",
    });

  const formatTime = (time) =>
    time.toLocaleTimeString("en-EN", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

  return (
    <>
      <div className="clock">
        Today is {formatWeekday(dateNow)}, {formatDayMonth(dateNow)},{" "}
        {formatTime(dateNow)}
      </div>
    </>
  );
};

export default Clock;

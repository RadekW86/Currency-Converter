import { StyledClock } from "./styled.js";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
  const dateNow = useCurrentDate();

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
      <StyledClock>
        Today is {formatWeekday(dateNow)}, {formatDayMonth(dateNow)},{" "}
        {formatTime(dateNow)}
      </StyledClock>
    </>
  );
};

export default Clock;

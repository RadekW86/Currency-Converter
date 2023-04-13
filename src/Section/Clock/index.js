import { StyledClock } from "./styled.js";
import { useCurrentDate } from "./useCurrentDate";
import { formatWeekday } from "./helper.js";
import { formatDayMonth } from "./helper.js";
import { formatTime } from "./helper.js";

const Clock = () => {
  const currentDate = useCurrentDate();

  return (
    <>
      <StyledClock>
        Today is {formatWeekday(currentDate)}, {formatDayMonth(currentDate)},{" "}
        {formatTime(currentDate)}
      </StyledClock>
    </>
  );
};

export default Clock;

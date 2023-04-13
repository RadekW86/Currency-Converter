export const formatWeekday = (date) =>
  date.toLocaleDateString("en-EN", {
    weekday: "long",
  });

export const formatDayMonth = (date) =>
  date.toLocaleDateString("en-EN", {
    month: "long",
    day: "numeric",
  });

export const formatTime = (time) =>
  time.toLocaleTimeString("en-EN", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

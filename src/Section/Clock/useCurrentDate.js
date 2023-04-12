import { useState, useEffect } from "react";

export const useCurrentDate = () => {
  const [dateNow, setDateNow] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateNow(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return dateNow;
};

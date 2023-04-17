import { StyledPopup } from "./styled";
import { useState, useEffect } from "react";

export const useDots = () => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    if (dots === "......") {
      setDots(".");
    }
    setTimeout(() => {
      setDots(dots + ".");
    }, 200);
  }, [dots]);

  return { dots };
};

export const LoadingAlert = () => {
  const { dots } = useDots();

  return (
    <StyledPopup>
      <p>Hold on! Rates are being updated</p>
      <p>{dots}</p>
    </StyledPopup>
  );
};

export const ErrorAlert = () => {
  const { dots } = useDots();

  return (
    <StyledPopup color={"red"}>
      <p>{dots}</p>
      <p>Failed to update exchange rates :(</p>
      <p>It may be a server issue...</p>
      <p>but chceck your internet connection first!</p>
      <p>{dots}</p>
    </StyledPopup>
  );
};

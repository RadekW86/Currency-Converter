import { useState, useEffect } from "react";

export const useImportedCurrencies = () => {
  const [ratesObject, setRatesObject] = useState();
  const apiURL =
    "https://api.exchangerate.host/latest" +
    "?base=PLN&symbols=USD,EUR,GBP,CHF";

  useEffect(() => {
    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((rates) => {
        setRatesObject(JSON.stringify(rates));
      })
      .catch(() => console.error("Something bad happened!"));
  }, []);

  return {ratesObject};
};

import { useState, useEffect } from "react";

export const useImportedCurrencies = () => {
  const [status, setStatus] = useState("waiting");
  const [ratesObject, setRatesObject] = useState();
  const apiURL =
    "https://api.exchangerate.host/latest" +
    "?base=PLN&symbols=USD,EUR,GBP,CHF";

  useEffect(() => {
    const wait = (delay) => {
      const promise = new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, delay);
      });
      return promise;
    };

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
        wait(1500).then(() => setStatus("ok"));
      })
      .catch(() => setStatus("notOk"));
  }, []);

  return { ratesObject, status };
};

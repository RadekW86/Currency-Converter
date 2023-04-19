import { useState, useEffect } from "react";

export const useImportedCurrencies = () => {
  const [status, setStatus] = useState("waiting");
  const [ratesObjectStringed, setRatesObjectStringed] = useState("{}");
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

    (async () => {
      try {
        const response = await fetch(apiURL);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const rates = await response.json();
        setRatesObjectStringed(JSON.stringify(rates));
        wait(1500).then(() => setStatus("ok"));
      } catch {
        setStatus("notOk");
      }
    })();
  }, []);

  return { ratesObjectStringed, status};
};

import { useState, useEffect } from "react";

export const useImportedCurrencies = () => {
  const [status, setStatus] = useState("loading");
  const [ratesObject, setRatesObject] = useState("{}");
  const apiURL =
    "https://api.exchangerate.host/latest?base=PLN&symbols=USD,EUR,GBP,CHF";

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
        setRatesObject(rates);
        wait(1500).then(() => setStatus("success"));
      } catch {
        setStatus("error");
      }
    })();
  }, []);

  return { ratesObject, status};
};

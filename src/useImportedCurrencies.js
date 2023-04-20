import { useState, useEffect } from "react";
import axios from "axios";

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
        const response = await axios.get(apiURL);
        setRatesObject(response.data);
        wait(1500).then(() => setStatus("success"));
        console.log(ratesObject);
      } catch {
        setStatus("error");
      }
    })();
  }, []);

  return { ratesObject, status };
};

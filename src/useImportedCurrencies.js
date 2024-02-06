import { useState, useEffect } from "react";
import axios from "axios";

export const useImportedCurrencies = () => {
  const [status, setStatus] = useState("loading");
  const [ratesObject, setRatesObject] = useState({ rates: {} });
  const apiURL =
    "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_dVdgG1qEK2BWM3YNF5N3wiwC7FrbbcXb6fzytPMe&currencies=USD%2CEUR%2CGBP%2CCHF&base_currency=PLN";

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
        wait(1500).then(() => {
          ratesObject.error ? setStatus("error") : setStatus("success");
        });
      } catch {
        setStatus("error");
      }
    })();
  }, []);

  return { ratesObject, status };
};

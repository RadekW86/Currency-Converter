import React, { useState } from "react";
import { useImportedCurrencies } from "../useImportedCurrencies";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledInfo,
} from "./styled.js";

const Form = () => {
  const { ratesObjectStringed } = useImportedCurrencies();
  const [inputAmount, setImputAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [displayResult, setDisplayResult] = useState("Your money is worth ...");
  let result;
  let currencies = [];

  const ratesObjectParsed = JSON.parse(ratesObjectStringed);
  const { date: ratesDate, rates: importedRates } = ratesObjectParsed;

  for (const currencyType in importedRates) {
    currencies = [
      ...currencies,
      {
        id: currencies.length === 0
        ? 1
        : currencies[currencies.length - 1].id + 1,
        symbol: currencyType,
        rate: importedRates[currencyType],
      },
    ];
  }
  
  const computeResult = (inputAmount, currency) => {
    const rate = currencies.find(({ symbol }) => symbol === currency).rate;
    result = inputAmount * rate;
  };

  const printResult = (result) => {
    setDisplayResult(
      `Your ${inputAmount} PLN is worth ${result.toFixed(2)} ${currency}`
    );
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    computeResult(inputAmount, currency);
    printResult(result);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <StyledLabel>
        <div>Amount in PLN:</div>{" "}
        <StyledInput
          type="number"
          min="1"
          max="1000000"
          step="0.01"
          name="inputAmount"
          placeholder="--- put amount ---"
          required
          value={inputAmount}
          onChange={(event) => setImputAmount(event.target.value)}
        />
      </StyledLabel>
      <StyledLabel>
        <div>Currency:</div>
        <StyledInput
          as="select"
          name="Currency"
          required
          placeholder="--- choose currency ---"
          value={currency}
          onChange={(event) => setCurrency(event.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency.id}>{currency.symbol}</option>
          ))}
        </StyledInput>
      </StyledLabel>
      <StyledButton>CALC.</StyledButton>
      <div>{displayResult}</div>
      <StyledInfo>
        All rates are provided by https://exchangerate.host/
        <br />
        Exchange rates as of {ratesDate}
      </StyledInfo>
    </StyledForm>
  );
};

export default Form;

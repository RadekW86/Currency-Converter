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
  const { ratesObject } = useImportedCurrencies();
  const [inputAmount, setImputAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [displayResult, setDisplayResult] = useState("Your money is worth ...");
  let result;

  const { date: ratesDate, rates: importedRates } = ratesObject;

  const computeResult = (inputAmount, currency) => {
    const rate = importedRates[currency];
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
          {Object.keys(importedRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </StyledInput>
      </StyledLabel>
      <StyledButton>CALC.</StyledButton>
      <div>{displayResult}</div>
      <StyledInfo>
        All rates are provided by exchangerate.host
        <br />
        Exchange rates as of {ratesDate}
      </StyledInfo>
    </StyledForm>
  );
};

export default Form;

import React, { useState } from "react";
import currencies from "../currenciesList";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from "./styled.js";

const Form = () => {
  const [inputAmount, setImputAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].symbol);
  const [displayResult, setDisplayResult] = useState("Your money is worth ...");
  let result = 0;

  const computeResult = (inputAmount, currency) => {
    const rate = currencies.find(({ symbol }) => symbol === currency).rate;
    result = inputAmount / rate;
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
    </StyledForm>
  );
};

export default Form;

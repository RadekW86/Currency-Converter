import React, { useState } from "react";
import currencies from "../../currenciesList";
import "./style.css";

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
    setDisplayResult(`Your ${inputAmount} PLN is worth ${result.toFixed(2)} ${currency}`)
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    computeResult(inputAmount, currency);
    printResult(result);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <label className="form__label">
        <div>Amount in PLN:</div>{" "}
        <input
          className="form__input"
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
      </label>
      <label className="form__label">
        <div>Currency:</div>
        <select
          className="form__input"
          name="Currency"
          required
          placeholder="--- choose currency ---"
          value={currency}
          onChange={(event) => setCurrency(event.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency.id}>{currency.symbol}</option>
          ))}
        </select>
      </label>
      <button className="form__button">CALC.</button>
      <div>{displayResult}</div>
    </form>
  );
};

export default Form;

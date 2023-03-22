import "./style.css";

const Form = () => (
  <form className="form">
    <label className="form__label">
      <div>Amount in PLN:</div>{" "}
      <input
        className="form__input"
        type="number"
        min="1"
        max="1000"
        step="0.01"
        name="inputAmount"
        placeholder="--- put amount ---"
        required
      />
    </label>
    <label className="form__label">
      <div>Currency:</div>
      <select
        className="form__input"
        name="Currency"
        required
        placeholder="--- choose currency ---"
      >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="CHF">CHF</option>
      </select>
    </label>
    <button className="form__button">CALC.</button>
    <div>
      Your <span>money is worth: ...</span>
    </div>
  </form>
);

export default Form;

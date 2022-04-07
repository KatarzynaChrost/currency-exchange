import React, { useState } from "react";
import {
  Wrapper,
  Form,
  InputWrapper,
  SelectCurrency,
  SubmitButton,
} from "./Input.styles";
import { currencies } from "../../../assets/data/currencies";

const Input = ({ updateValue }) => {
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amountOfCurrency, setAmountOfCurrency] = useState(5);

  return (
    <Wrapper>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <InputWrapper>
          <label>Amount</label>
          <input
            type="number"
            step="0.01"
            value={amountOfCurrency}
            onChange={(e) => {
              setAmountOfCurrency(e.currentTarget.value);
            }}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="fromCurrency">From</label>
          <SelectCurrency
            value={fromCurrency}
            onChange={(e) => {
              setFromCurrency(e.currentTarget.value);
            }}
          >
            {currencies.map((currency) => {
              return (
                <option
                  value={currency.abbreviation}
                  key={currency.abbreviation}
                >
                  {currency.abbreviation} - {currency.name}
                </option>
              );
            })}
          </SelectCurrency>
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="toCurrency">To</label>
          <SelectCurrency
            value={toCurrency}
            onChange={(e) => {
              setToCurrency(e.currentTarget.value);
            }}
          >
            {currencies.map((currency) => {
              return (
                <option
                  value={currency.abbreviation}
                  key={currency.abbreviation}
                >
                  {currency.abbreviation} - {currency.name}
                </option>
              );
            })}
          </SelectCurrency>
        </InputWrapper>
        <SubmitButton
          type="submit"
          value="Convert"
          onClick={() =>
            updateValue(fromCurrency, toCurrency, amountOfCurrency)
          }
        />
      </Form>
    </Wrapper>
  );
};

export default Input;

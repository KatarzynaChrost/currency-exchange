import React, { useEffect, useState } from "react";
import { Wrapper, ExchangeRate, ResultWrapper } from "./Result.styles";
import { currencies } from "../../../assets/data/currencies";

const Result = ({
  calculationExchangeData: { fromCurrency, toCurrency, amountOfCurrency },
}) => {
  const [result, setResult] = useState([0, 0]);
  const [exchangeRatesList, setExchangeRatesList] = useState(new Map());

  useEffect(() => {
    const currenciesList = currencies
      .map(({ abbreviation }) => abbreviation)
      .join(",");
    const exchangeRatesList = new Map();
    Promise.all(
      currencies.map((currency) =>
        fetch(
          `https://api.exchangerate.host/latest?base=${currency.abbreviation}&symbols=${currenciesList}`
        )
          .then((response) => response.json())
          .then((data) =>
            exchangeRatesList.set(currency.abbreviation, data.rates)
          )
      )
    ).then(() => setExchangeRatesList(exchangeRatesList));
  }, []);

  const rates = [
    exchangeRatesList.get(fromCurrency)?.[toCurrency],
    exchangeRatesList.get(toCurrency)?.[fromCurrency],
  ];

  const showMoney = (result) => {
    const text = result.toString();
    const dotPosition = text.indexOf(".");
    const fullMoney = text.slice(0, dotPosition + 3);
    const restMoney = text.slice(dotPosition + 3);
    return [fullMoney, restMoney];
  };

  const [fullMoney, restMoney] = showMoney(result);

  useEffect(() => {
    setResult(parseFloat((amountOfCurrency * rates[0]).toFixed(5)));
  }, [rates]);

  return (
    <Wrapper>
      <p>
        {amountOfCurrency} {fromCurrency} =
      </p>
      <ResultWrapper>
        <p>
          <span>{fullMoney}</span>
          {restMoney} {toCurrency}
        </p>
      </ResultWrapper>
      <ExchangeRate>
        <h3>Current exchange rates:</h3>
        <p>
          1 {fromCurrency} = {rates[0]} {toCurrency}
        </p>
        <p>
          1 {toCurrency} = {rates[1]} {fromCurrency}
        </p>
      </ExchangeRate>
    </Wrapper>
  );
};

export default Result;

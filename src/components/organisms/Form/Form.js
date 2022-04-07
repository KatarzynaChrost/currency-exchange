import React, { useState } from "react";
import { Wrapper, Header } from "./Form.styles";
import Result from "../../molecules/Result/Result";
import Input from "../../molecules/Input/Input";

const Form = () => {
  const [calculationExchangeData, setCalculationExchangeData] = useState({
    fromCurrency: "EUR",
    toCurrency: "USD",
    amountOfCurrency: 5,
  });

  const updateValue = (fromCurrency, toCurrency, amountOfCurrency) => {
    setCalculationExchangeData({ fromCurrency, toCurrency, amountOfCurrency });
  };

  return (
    <Wrapper>
      <Header>
        <h1>€urrency Exchange</h1>
      </Header>
      <Input updateValue={updateValue} />
      <Result calculationExchangeData={calculationExchangeData} />
    </Wrapper>
  );
};

export default Form;

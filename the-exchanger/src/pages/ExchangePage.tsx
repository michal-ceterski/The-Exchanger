import React, { useState, useEffect } from "react";
import CurrencyInput from "../components/CurrencyInput";
import ExchangeRate from "../components/ExchangeRate";
import { getExchangeRate } from "../services/exchangeService";

const ExchangePage: React.FC = () => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      const rate = await getExchangeRate(fromCurrency, toCurrency);
      setExchangeRate(rate);
    };
    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  return (
    <div>
      <h1>Currency Exchange</h1>
      <CurrencyInput label="Amount" value={amount} onChange={setAmount} />
      <ExchangeRate
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        rate={exchangeRate}
      />
      <div>
        <p>
          {amount} {fromCurrency} is equal to{" "}
          {(amount * exchangeRate).toFixed(2)} {toCurrency}
        </p>
      </div>
    </div>
  );
};

export default ExchangePage;

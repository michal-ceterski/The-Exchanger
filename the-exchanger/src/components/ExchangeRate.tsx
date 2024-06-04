import React from "react";

interface ExchangeRateProps {
  fromCurrency: string;
  toCurrency: string;
  rate: number;
}

const ExchangeRate: React.FC<ExchangeRateProps> = ({
  fromCurrency,
  toCurrency,
  rate,
}) => {
  return (
    <div>
      <p>
        1 {fromCurrency} = {rate} {toCurrency}
      </p>
    </div>
  );
};

export default ExchangeRate;

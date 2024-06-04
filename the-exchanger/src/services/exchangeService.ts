import axios from "axios";

const API_URL = "https://api.nbp.pl/";

export const getExchangeRate = async (
  baseCurrency: string,
  targetCurrency: string
) => {
  const response = await axios.get(`${API_URL}${baseCurrency}`);
  return response.data.rates[targetCurrency];
};

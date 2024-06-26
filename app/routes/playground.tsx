import { Input } from "@/components/ui/input";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function useCurrencyRate(code) {
  const response = useSWR(
    "https://api.nbp.pl/api/exchangerates/tables/a/?format=json",
    fetcher
  );
  if (response.isLoading || response.error) return response;
  return response.data[0].rates.find((rate) => rate.code === code);
}

export default function PlaygroundPage() {
  const rate = useCurrencyRate("USD");
  console.log(rate);
  return <Input />;
}

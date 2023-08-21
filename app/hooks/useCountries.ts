import countries from 'world-countries';
import { City, ICity } from 'country-state-city';


const stateInIndonesia = [
  {
    name: "Jakarta",
    countryCode: "ID",
    region: "JK"
  },
  {
    name: "Bogor",
    countryCode: "ID",
    region: "JB"
  },
  {
    name: "Depok",
    countryCode: "ID",
    region: "JB"
  },
  {
    name: "Tangerang",
    countryCode: "ID",
    region: "BT"
  },
  {
    name: "Bekasi",
    countryCode: "ID",
    region: "JB"
  }
]

const formattedCountries = stateInIndonesia.map((country) => ({
  value: country.countryCode,
  label: country.name,
  region: country.region
}));

const useCountries = () => {
  const getAll = () => formattedCountries;

  const getByValue = (value: string) => {
    return formattedCountries?.find((item) => item.value === value);
  }

  return {
    getAll,
    getByValue
  }
};

export default useCountries;

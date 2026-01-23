import { useMemo, useState } from "react";
import "./App.css";
import { Countries } from "./components/Countries/Countries";
import { Header } from "./components/Header/Header";
import { SearchAndFilters } from "./components/SearchAndFilters/SearchAndFilters";
import { FavoriteColorForm } from "./components/FavoriteColorForm/FavoriteColorForm";

const countries = [
  {
    name: "Afghanistan",
    capital: "Kabul",
    flags: "https://flagcdn.com/af.svg",
    population: "27,657,145",
    region: "Asia",
  },
  {
    name: "Afbania",
    capital: "Tirana",
    flags: "https://flagcdn.com/al.svg",
    population: " 27,657,145",
    region: "Europe",
  },
  {
    name: "Argentina",
    capital: "Buenos Aires",
    flags: "https://flagcdn.com/ar.svg",
    population: "45,376,763",
    region: "South America",
  },
  {
    name: "Bangladesh",
    capital: "Dhaka",
    flags: "https://flagcdn.com/bd.svg",
    population: "164,689,383",
    region: "Asia",
  },
  {
    name: "Belgium",
    capital: "Brussels",
    flags: "https://flagcdn.com/be.svg",
    population: "11,555,997",
    region: "Europe",
  },
  {
    name: "France",
    capital: "Paris",
    flags: "https://flagcdn.com/fr.svg",
    population: "67,391,582",
    region: "Europe",
  },
  {
    name: "Italy",
    capital: "Rome",
    flags: "https://flagcdn.com/it.svg",
    population: "59,554,023",
    region: "Europe",
  },
  {
    name: "Nigeria",
    capital: "Abuja",
    flags: "https://flagcdn.com/ng.svg",
    population: "206,139,587",
    region: "Africa",
  },
];

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("default");
  const sortedCountries = useMemo(() => {
    return countries.filter((country) => {
      const firstParam = country.name.includes(searchValue);
      const secondParam =
        sortValue === "default" ||
        sortValue === "All" ||
        country.region === sortValue;
      return firstParam && secondParam;
    });
  }, [searchValue, sortValue]);
  return (
    <>
      <FavoriteColorForm />
    </>
  );
}

export default App;

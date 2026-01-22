import "./Country.css";
export type Country = {
  name: string;
  capital: string;
  population: string;
  flags: string;
  region: string;
};
interface Props {
  country: Country;
}

export function Country({ country }: Props) {
  return (
    <div className="country">
      <img src={country.flags} alt="country" className="flag-img" />
      <h3>{country.name}</h3>
      <h4>Population:{country.population}</h4>
      <h4>Region:{country.region}</h4>
      <h4>Capital:{country.capital}</h4>
    </div>
  );
}

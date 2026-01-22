import { Country } from "../Country/Country";
import "../Countries/countries.css";

interface Props {
  countries: Country[];
}

export function Countries({ countries }: Props) {
  return (
    <div className="container">
      <ul className="countries">
        {countries.length ? (
          countries.map((country, index) => (
            <li>
              <Country country={country} key={index} />
            </li>
          ))
        ) : (
          <h2>По вашему запросу ничего не найдено</h2>
        )}
      </ul>
    </div>
  );
}

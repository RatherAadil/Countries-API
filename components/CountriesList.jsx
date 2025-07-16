import React from "react";
import CountryCard from "./CountryCard";
import CountriesData from "../CountriesData";

function CountriesList() {
  const countries = CountriesData.map((country, i) => {
    return (
      <CountryCard
        name={country.name.common}
        population={country.population}
        flag={country.flags.svg}
        region={country.region}
        capital={country.capital}
        key={i}
      />
    );
  });
  return <div className="countries-container">{countries}</div>;
}

export default CountriesList;

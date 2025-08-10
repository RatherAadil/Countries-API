import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";
// import CountriesData from "../CountriesData";

function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([]);

  //UseEffect is used for running a piece of code for only once and for monitoring state like when we want to run some code when a state changes we use useEffect
  useEffect(() => {
    const API =
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,subregion,tld,currencies,languages,borders";
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);
  return (
    <>
      {!countriesData.length ? (
        <CountriesListShimmer />
      ) : (
        <div className="countries-container">
          {countriesData
            .filter((country) =>
              country.name.common.toLowerCase().includes(query)
            )
            .map((country) => {
              return (
                <CountryCard
                  key={country.name.common}
                  name={country.name.common}
                  flag={country.flags.svg}
                  population={country.population}
                  region={country.region}
                  capital={country.capital?.[0]}
                  data={country}
                />
              );
            })}
        </div>
      )}
    </>
  );
}

export default CountriesList;

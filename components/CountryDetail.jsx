import React, { useEffect, useState } from "react";
import "./countryDetail.css";
import { Link, useParams } from "react-router";
function CountryDetail() {
  const params = useParams();
  const countryName = params.country;
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountryData({
          flag: data.flags.svg,
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital.join(" "),
          tld: data.tld,
          currencies: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(", "),
          languages: Object.values(data.languages)
            .map((language) => language)
            .join(", "),
          borders: [],
        });
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [countryName]);
  if (notFound) {
    return <div>Country Not Found</div>;
  }
  return countryData === null ? (
    "Loading..."
  ) : (
    <main>
      <div className="country-details-container">
        <span
          className="back-btn"
          onClick={() => {
            history.back();
          }}
        >
          <i className="fa-solid fa-arrow-left-long"></i>&nbsp;Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt="flag" />
          <div className="details-text-container">
            <h2></h2>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                <span className="native-name">{countryData.nativeName}</span>
              </p>
              <p>
                <b>Population: </b>
                <span className="population">{countryData.population}</span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region">{countryData.region}</span>
              </p>
              <p>
                <b>Sub-Region: </b>
                <span className="sub-region">{countryData.subregion}</span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="Capital">{countryData.capital}</span>
              </p>
              <p>
                <b>Top Level Domain: </b>
                <span className="tld">{countryData.tld}</span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="Currencies">{countryData.currencies}</span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="languages">{countryData.languages}</span>
              </p>
            </div>
            {countryData.borders.length !== 0 && (
              <div className="border-countries">
                <b>Border countries:</b>&nbsp;
                {countryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default CountryDetail;

import React from "react";
import "./CountriesListShimmer.css";
function CountriesListShimmer() {
  return (
    <div className="countries-container">
      {Array.from({ length: 12 }).map((el, i) => {
        return <div key={i} className="country-card shimmer-card"></div>;
      })}
    </div>
  );
}

export default CountriesListShimmer;

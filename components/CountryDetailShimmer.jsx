import React from "react";
import "./CountryDetailShimmer.css";
import "./CountryDetail.css";
function CountryDetailShimmer() {
  return (
    <div className="country-details-container">
      <div className="country-details shimmer-datails">
        <div className="shimmer-img"></div>
        <div className="details-text-container dtc-shimmer">
          <h2 className="country-name-shim"></h2>
          <div className="details-text shimmer-details-text">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetailShimmer;

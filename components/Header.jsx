import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <Link to={"/"}>
          <h2 className="title">Where in the world?</h2>
        </Link>
        <p className="dark-mode">
          <i className="fa-regular fa-moon"></i>
          &nbsp;&nbsp;Theme
        </p>
      </div>
    </header>
  );
}

export default Header;

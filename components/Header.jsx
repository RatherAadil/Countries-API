import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../contexts/ThemeContext";

function Header() {
  const [isDark, setIsDark] = useContext(ThemeContext);
  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <Link to={"/"}>
          <h2 className="title">Where in the world?</h2>
        </Link>
        <p
          className="dark-mode"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`}></i>
          &nbsp;&nbsp;{isDark ? "Light" : "Dark"} Mode
        </p>
      </div>
    </header>
  );
}

export default Header;

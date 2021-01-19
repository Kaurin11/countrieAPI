import React from "react";
import ThemeChanger from "../../components/themeChange/themeChange";

const Header = () => {
  return (
    <header>
      <div className="header">
        <h1 className="header__title">Where in the world?</h1>
        <ul className="header__icon">
          <li>
            <ThemeChanger />{" "}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

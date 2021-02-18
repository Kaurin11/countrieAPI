import React from "react";
import ThemeChanger from "../../components/themeChange/themeChange";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header__title"><p>Where in the world?</p></div>
        <ul className="header__icon">
          <ThemeChanger />{" "}
        </ul>
      </div>
    </header>
  );
};

export default Header;

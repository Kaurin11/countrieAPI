import React, { useState, useEffect } from "react";

const ThemeChanger = () => {
  const [themeState, setThemeState] = useState(false);

  const handleChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      localStorage.setItem("Theme", "dark");
      document.body.classList.add("dark-mode");
    } else {
      localStorage.setItem("Theme", "light");
      document.body.classList.remove("dark-mode");
    }
  };
  useEffect(() => {
    const getTheme = localStorage.getItem("Theme");
    if (getTheme === "dark") return document.body.classList.add("dark-mode");
  });
  return (
    <div>
      <div onClick={handleChange}>
        {themeState ? (
            <div className="header__box-icon">
                  <ion-icon size="small" name="sunny-outline"></ion-icon>
                <p>Light mode</p> </div>
            
        ) : (
            <div className="header__box-icon"> 
                  <ion-icon size="small" name="moon-outline"></ion-icon>
               <p>Night mode </p>  </div>
        )}
      </div>
    </div>
  );
};

export default ThemeChanger;

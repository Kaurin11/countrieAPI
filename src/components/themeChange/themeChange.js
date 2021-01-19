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
      <div className="header__mode" onClick={handleChange}>
        {themeState ? (
          <ion-icon size="large" name="sunny-outline"></ion-icon>
        ) : (
          <ion-icon size="large" name="moon-outline">
            {" "}
          </ion-icon>
        )}
      </div>
    </div>
  );
};

export default ThemeChanger;

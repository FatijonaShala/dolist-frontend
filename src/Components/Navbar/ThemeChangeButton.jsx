import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import React, { useState, useEffect } from "react";
import { ThemeContext, themes } from "../../context/ThemeContext";

function ThemeChangeButton() {
  const [theme, setTheme] = useState(themes.dark);
  //themes.light
  //localStorage.getItem(themes.dark) === "true"

  // useEffect(() => {
  //   localStorage.setItem(themes.dark, theme);
  // }, [theme]);

  return (
    <div>
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <div
            onClick={() => {
              setTheme(!theme);

              changeTheme(theme ? themes.dark : themes.light);
            }}
          >
            {theme ? <Moon /> : <Sun />}
          </div>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}

export default ThemeChangeButton;

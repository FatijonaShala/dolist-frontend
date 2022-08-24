import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { ThemeContext, themes } from "../../context/ThemeContext";

function ThemeChangeButton() {
  const { theme } = useContext(ThemeContext);
  console.log("theme:", theme);
  //const [theme, setTheme] = useState(themes.dark);
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
              changeTheme(theme === themes.dark ? themes.light : themes.dark);
            }}
          >
            {theme === themes.dark ? <Sun /> : <Moon />}
          </div>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}

export default ThemeChangeButton;

import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import React from "react";
import { ThemeContext, themes } from "../../context/ThemeContext";

function ThemeChangeButton() {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <div>
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <div
            onClick={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          >
            {darkMode ? <Sun /> : <Moon />}
          </div>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}

export default ThemeChangeButton;

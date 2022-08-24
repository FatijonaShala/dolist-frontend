import React, { createContext, useState, useEffect } from "react";
//import { ThemeContext, themes } from "../context/ThemeContext";

export const themes = {
  theme: "theme",
  dark: "dark-mode",
  light: "",
};

export const ThemeContext = createContext({
  theme: themes.dark,
  changeTheme: () => {},
});

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(
    localStorage.getItem(themes.theme) || themes.light
  );

  console.log("theme: ", theme);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.dark:
        document.body.classList.add("dark-mode");
        localStorage.setItem(themes.theme, themes.dark);

        break;
      case themes.light:
      default:
        document.body.classList.remove("dark-mode");
        localStorage.setItem(themes.theme, themes.light);

        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {" "}
      {props.children}{" "}
    </ThemeContext.Provider>
  );
}

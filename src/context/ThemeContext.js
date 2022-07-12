import React, { createContext, useState } from "react";

export const themes = {
  dark: "dark-mode",
  light: "",
};

export const ThemeContext = createContext({
  theme: themes.dark,
  changeTheme: () => {},
});

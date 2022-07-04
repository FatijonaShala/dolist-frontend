import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "../../App";

function ThemeChangeButton(props) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onClick = () => {
    if (darkMode) theme.dispatch({ type: "LIGHTMODE" });
    else theme.dispatch({ type: "DARKMODE" });
  };

  return <div onClick={onClick}>{darkMode ? <Sun /> : <Moon />}</div>;
}

export default ThemeChangeButton;

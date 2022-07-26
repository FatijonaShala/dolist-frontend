import React from "react";
import ReactDOM from "react-dom/client";
//"react-dom";

import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeContextWrapper from "../src/context/ThemeContext";
import SettingsContextProvider from "../src/context/SettingsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // ReactDOM.render(
  <React.StrictMode>
    <ThemeContextWrapper>
      <SettingsContextProvider>
        <App />
      </SettingsContextProvider>{" "}
    </ThemeContextWrapper>{" "}
  </React.StrictMode>
  // document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, { useContext } from "react";
import "./Styles/App.scss";
import "bootstrap/dist/css/bootstrap.css";
import Views from "./Constants/views";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <Views />
    </div>
  );
}
export default App;

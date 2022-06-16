import React from "react";
import "./Styles/App.scss";
import "bootstrap/dist/css/bootstrap.css";
// import Views from "./Constants/views";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./Constants/routes";

function App() {
  const listRoutes = routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      element={route.Component}
      private={route.private}
    />
  ));

  return (
    <div className="App">
      {/* <Views /> */}
      <Router>
        <Routes> {listRoutes}</Routes>
      </Router>
    </div>
  );
}
export default App;

import React from 'react';
import './Styles/App.scss';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './Constants/routes';


function App() {
  const listRoutes = routes.map((route, index) => < Route key={index}
  path={route.path}
  element={route.Component}
  private={route.private}
/>)

  return (
    <div className="App" >
    <Router >
      <Navbar />
      <Header />
      <Routes > {listRoutes}
      </Routes>
      <Footer />
    </Router>
  </div>

  );
}
export default App;
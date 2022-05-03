import React from 'react';
import './Styles/App.scss';
import "bootstrap/dist/css/bootstrap.css";
import Login from './Pages/Login';
import Navbar from './Pages/Navbar';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Home from './Pages/Home/';
import CreateList from './Pages/CreateList';
import MyCollections from './Pages/MyCollections';
import Analytics from './Pages/Analytics';
import Profile from './Pages/Profile/';
import About from './Pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  const routes = [
    { path: "/", Component: < Home />, private: false },
    { path: "/login", Component: < Login />, private: false },
    { path: "/newList", Component: < CreateList />, private: false },
    { path: "/myCollections", Component: < MyCollections />, private: false },
    { path: "/analytics", Component: < Analytics />, private: false },
    { path: "/profile", Component: < Profile />, private: false },
    { path: "/about", Component: < About />, private: false }
  ];

  const listRoutes = routes.map((route, index) => < Route key={index}
    path={route.path}
    element={route.Component}
    private={route.private}
  />)

  return (
    <div className="App" >
      <Router>
        <Navbar />
        <Header />
        <Routes > {listRoutes} {
          /* <Route path="/login" element={<Login/>}/>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/newList" element={<CreateList/>}/>
                  <Route path="/myLists" element={<MyCollections/>}/>
                  <Route path="/analytics" element={<Analytics/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/about" element={<About/>}/> */
        }
        </Routes>
        <Footer />
      </Router>
    </div>

  );
}

    export default App;
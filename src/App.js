import React from 'react';
import './Styles/App.scss';
import "bootstrap/dist/css/bootstrap.css";
import Login from './Pages/Login/Login';
import Navbar from './Pages/Navbar/Navbar';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import CreateList from './Pages/CreateList/CreateList';
import MyCollections from './Pages/My Collections/MyCollections';
import Analytics from './Pages/Analytics/Analytics';
import Profile from './Pages/Profile/Profile';
import About from './Pages/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
          /*

          }         
    const routes = [
               { path: "/", Component: <Home />, private: false},
               { path: "/login", Component: <Login />, private: false},
               { path: "/newList", Component: <CreateList />, private: false},
               { path: "/myCollections", Component: <MyCollections />, private: false},
               { path: "/analytics", Component: <Analytics />, private: false},
               { path: "/profile", Component: <Profile />, private: false},
               { path: "/about", Component: <About />, private: false}
                  ];
      
                  const listRoutes = routes.map((routes) =>
                  <li>{routes}</li>
                  );
                */

  return ( 
    <div className = "App" >
     
    <Router>
      <Navbar/>
      <Header/>
      <Routes>
     {/* <ul>{listRoutes}</ul>*/}
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/newList" element={<CreateList/>}/>
        <Route path="/myLists" element={<MyCollections/>}/>
        <Route path="/analytics" element={<Analytics/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </Router>


      </div>
    
  );
}

export default App;


import React from 'react';
import './App.scss';
import "bootstrap/dist/css/bootstrap.css";
import Login from './Pages/Login';
import Navbar from './Pages/Navbar';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import CreateList from './Pages/CreateList';
import MyCollections from './Pages/MyCollections';
import Analytics from './Pages/Analytics';
import Profile from './Pages/Profile';
import About from './Pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return ( 
    <div className = "App" >

    <Router>
      <Navbar/>
      <Header/>
      <Routes>
      <Route path="/Login" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/NewList" element={<CreateList/>}/>
        <Route path="/MyLists" element={<MyCollections/>}/>
        <Route path="/Analytics" element={<Analytics/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
      <Footer/>
    </Router>


      </div>
    
  );
}

export default App;


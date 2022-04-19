import React from 'react';
import './App.scss';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './Pages/Navbar';
import Login from './Pages/Login';



function App() {
    return ( 
      <div className = "App" >
        <Navbar/>

        <Login/>



        </div>
    );
}

export default App;


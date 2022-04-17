import React from 'react';
import './App.scss';
import "bootstrap/dist/css/bootstrap.css";
import {Button, Alert, Row, Col} from 'react-bootstrap';
import Menu from './Components/Menu';
import RightSide from './Components/RightSide';
import Login from './Components/Login';



function App() {
    return ( 
      <div className = "App">
        <Menu/>
        <Row className="landing">
          <Col><Login/></Col>         
          <Col><RightSide/></Col>
        </Row>
      </div>
    );
}

export default App;

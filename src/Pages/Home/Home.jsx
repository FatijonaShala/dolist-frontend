import { Button, a } from 'bootstrap';
import React from 'react';
import Homestyle from './home.module.scss';
import Header from '../../Components/Header';
import LayoutWrapper from '../../hoc/Layout';

function Home() {
    return ( 
      
      <div >
        <Header/>
        Home 
        </div>


    )
}

export default LayoutWrapper(Home);
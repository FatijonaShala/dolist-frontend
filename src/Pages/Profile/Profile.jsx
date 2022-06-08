import React from 'react';
import style from './profile.module.scss';
import { Container, Row } from 'react-bootstrap';

import LayoutWrapper from '../../hoc/Layout';



function Profile() {
  return ( 
    <div>
  
      <Container className="bootstrap snippets bootdey">
        <Row>
          Profile
        </Row>
    </Container>




    </div >


  )
}

export default LayoutWrapper(Profile);


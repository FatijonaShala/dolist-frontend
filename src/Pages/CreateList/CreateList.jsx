import React from 'react';
import styles from './createList.module.scss';
import LayoutWrapper from '../../hoc/Layout';
import { Button, Container } from 'react-bootstrap';

function CreateList() {
    return ( 
      <div > 
      <Container>
      
          <div>
           
           <h5>
             Welcome User
           </h5>


          </div>
        
      </Container>

      </div>
     
    )
}

export default LayoutWrapper(CreateList);
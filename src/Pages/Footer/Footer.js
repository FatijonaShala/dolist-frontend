import React from 'react';
import style from './Footer.module.scss';
import { Container, Row, } from 'react-bootstrap';

function Footer() {
    return ( 

      
      <footer class="footer py-5">
        <Container>
          <Row>

            <div class="col-lg-12 col-12">
              <p class= {` ${style.copyright_text} text-center`}>Copyright &copy; Dolist . All rights reserved</p>
              <p class={` ${style.copyright_text} text-center`}>Designed by <a rel="nofollow" href="https://fatijonashala.wordpress.com">Fatijona Shala</a></p>
            </div>
          </Row>
        </Container>
      </footer>
      
           

    
    )
}

export default Footer
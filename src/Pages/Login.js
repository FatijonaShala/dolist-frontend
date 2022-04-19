import React from 'react';
import { Form } from 'react-bootstrap';
import styles from '../styles/Login.module.scss';
import { Image } from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap';

function Login() {
    return ( 
      <Container >
        <div >
          <Row className="landing" >
            <Col >
              <Form style={{ width: "80%", marginLeft: "10%", marginTop: "23%" }} >
                <h3 > Sign in </h3>
                <Form.Group>
                  <Form.Control type="username" placeholder="Username" />
                </Form.Group>
                <br />
                <Form.Group >
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <br />
                <button className={styles.button} > Sign in </button>
              </Form>
            </Col>
            <Col>
              <Image src="../img/bg.png" width="85%" thumbnail style={{ border: "none" }} />
            </Col>
          </Row>
        </div>
      </Container>

    )
}
export default Login;
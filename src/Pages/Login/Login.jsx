import React, {useState} from 'react';
import styles from './login.module.scss';
import { Image } from "react-bootstrap";
import {Form, Container, Row, Col, Button } from 'react-bootstrap';

import LayoutWrapper from '../../hoc/Layout';


function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }


    return ( 
      <Container >
        <Row>
          <Col>
            <div>
              <Image src="../img/bg.png" className="w-5 ml-5 mt-1 pt-1" thumbnail style={{ border: "none" }} />
            </div>
          </Col>
          <Col>
            <div>
              <br/>
              <Form className={` text-center w-1 ml-1 mt-5 pt-5 ${styles.contact_form}`} onSubmit={handleSubmit} >
                <h3 className="mb-4" > Sign in </h3>
                <Form.Group>
                  <Form.Control type="username" placeholder="Username" className={` ml-5 ${styles.form_control}`} value={username}
                    onChange={(u) => setUsername(u.target.value)} />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="password" placeholder="Password" className={` ml-5 ${styles.form_control}`} value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="d-flex justify-content-center mb-1">
                  <Form.Check label="Remember me" />
                </Form.Group>
               <div>
                  <Button type='submit' className={`btn ${styles.form_control} && ${styles.submit_btn}`} >Login</Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

    )
}
export default LayoutWrapper(Login);
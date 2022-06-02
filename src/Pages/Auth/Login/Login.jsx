import React, {useState} from 'react';
import styles from '../Form.module.scss';
import { Image } from "react-bootstrap";
import {Form, Container, Row, Col, Button } from 'react-bootstrap';
import validate from '../validation';
import LayoutWrapper from '../../../hoc/Layout';
import useForm from '../useForm';


function Login({ submitForm}) {

  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);


  return (
    <Container >
      <Row>
        <Col>
          <div>
            <Image src="../img/about1.png" className="w-5 ml-5 mt-1 pt-1" thumbnail style={{ border: "none" }} />
          </div>
        </Col>
        <Col>
          <div>
            <br />
            <Form className={` text-center w-1 ml-1 mt-5 pt-5 ${styles.contact_form}`}
              onSubmit={handleSubmit} noValidate >
              <h3 className="mb-4" > Sign in </h3>
              <Form.Group>
                <Form.Control type="username" placeholder="Username" className={` ml-5 ${styles.form_control}`}
                  value={values.username}
                  onChange={handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" placeholder="Password" className={` ml-5 ${styles.form_control}`}
                  value={values.password}
                  onChange={handleChange} />
              </Form.Group>
              <Form.Group className="d-flex justify-content-center mb-1">
                <Form.Check label="Remember me" />
              </Form.Group>
              <div>
                <Button type='submit' className={`btn ${styles.form_control} && ${styles.submit_btn}`} >Login</Button>
              </div>
              <div>
                <Form.Group>
                  <span className="mr-2">Don't have an account? <a href="/register">Sign up now</a></span>
                </Form.Group>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>

    )
}
export default LayoutWrapper(Login);
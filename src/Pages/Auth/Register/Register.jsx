import React, {useState} from 'react';
import styles from '../Form.module.scss';
import {Form, Container, Row, Col, Button, Image } from 'react-bootstrap';
import validate from '../validation';
import LayoutWrapper from '../../../hoc/Layout';
import useForm from '../useForm';

function Register({ submitForm}) {
    
   

    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);
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
              <br/>
              <Form className={` form text-center w-1 ml-1 mt-5 pt-5 ${styles.contact_form}`} onSubmit={handleSubmit} noValidate>
                <h3 className="mb-4" > Sign in </h3>
                <Row>
                <Form.Group className="col-12">
                  <Form.Control type="email" placeholder="Email" name="email" className={` ml-5 ${styles.form_control}`} value={values.email}
                    onChange={handleChange} />
                    {errors.email && <p className="error">{errors.email}</p>}
                </Form.Group>
                <Form.Group className="col-12">
                  <Form.Control type="username" placeholder="Username" name="username" className={` ml-5 ${styles.form_control}`} value={values.username}
                   onChange={handleChange}/>
                   {errors.username && <p className="error">{errors.username}</p>}
                </Form.Group>
                <Form.Group className="col-lg-6 col-12">
                  <Form.Control type="password" placeholder="Password" name="password" className={` ml-5 ${styles.form_control}`} value={values.password}
                    onChange={handleChange} /> 
                    {errors.password && <p className="error">{errors.password}</p>}
                </Form.Group>
                <Form.Group className="col-lg-6 col-12">
                <Form.Control type="password" placeholder="Confirm Password" name="password2" className={` ml-5 ${styles.form_control}`} value={values.password2}
                   onChange={handleChange} />
                   {errors.password2 && <p className="error">{errors.password2}</p>}
                </Form.Group>
                <Form.Group className="d-flex justify-content-center mb-1">
                  <Form.Check label="I agree with the Terms and Conditions and Privacy Policy" />
                </Form.Group>
            
               <div>
                  <Button type='submit' className={`btn ${styles.form_control} && ${styles.submit_btn}`}>Login</Button>
                </div>
                <div>
                <Form.Group>
                <span  className="mr-2">Have an account? <a href="/login">Sign in now</a></span>
                </Form.Group>
                </div>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

    )
  };

export default LayoutWrapper(Register);
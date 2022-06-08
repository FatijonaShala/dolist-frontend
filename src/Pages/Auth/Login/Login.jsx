import React, {useState, useEffect} from 'react';
import styles from '../Form.module.scss';
import {Form, Container, Row, Col, Button, Image } from 'react-bootstrap';
import LayoutWrapper from '../../../hoc/Layout';
import validation from "./validation";


function Login({ submitForm }) {
  const [values, setValues] = useState({
    email: "",
    username: "",
    password: "",
    password2: ""
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleChange = (e) =>{
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  };


  const handleFormSubmit = (e) =>{
    e.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
  };

  useEffect(() => {
    if(Object.keys(errors).length === 0 && dataIsCorrect){
      submitForm(true);
    }
  })
  

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
            <Form className={` text-center w-1 ml-1 mt-5 pt-5 ${styles.contact_form}`}>
              <h3 className="mb-4" > Sign in </h3>
              <Form.Group>
                <Form.Control type="username" placeholder="Username"  className={` ml-5 ${styles.form_control}`}
                name="username"
                 value={values.username}
                 onChange={handleChange}
                />
                {errors.username && <p>{errors.username}</p>}
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" placeholder="Password" className={` ml-5 ${styles.form_control}`}
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
                
              </Form.Group>
              <Form.Group className="d-flex justify-content-center mb-1">
                <Form.Check label="Remember me" />
              </Form.Group>
              <div>
                <Button type='submit' className={`btn ${styles.form_control} && ${styles.submit_btn}`} onClick={handleFormSubmit} >Login</Button>
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
import React, { useState } from 'react';
import styles from '../Form.module.scss';
import { Form, Container, Row, Col, Button, Image } from 'react-bootstrap';
import LayoutWrapper from '../../../hoc/Layout';
import validate from "./validation";
import { useNavigate} from 'react-router-dom';


function Register() {

  const [values, setValues] = useState({
    email: "",
    username: "",
    password: "",
    password2: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  


  const handleChange = (e) =>{
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  };


  const handleSubmit = (e) =>{
    e.preventDefault();
    setIsSubmitting(true);
    

    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log(values);
      navigate("/newList")
    }
   else {

    setErrors(validate(values));
   }
  
  };


  

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
            <Form className={` form text-center w-1 ml-1 mt-5 pt-5 ${styles.contact_form}`} onSubmit={handleSubmit}>
              <h3 className="mb-4" > Sign in </h3>
              <Row>
                <Form.Group className="col-12">
                  <Form.Control type="email" placeholder="Email" className={` ml-5 ${styles.form_control}`}
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p>{errors.email}</p>}
                  
                </Form.Group>


                <Form.Group className="col-12">
                  <Form.Control type="username" placeholder="Username" className={` ml-5 ${styles.form_control}`}
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                 />
                 {errors.username && <p>{errors.username}</p>}
                </Form.Group>


                <Form.Group className="col-lg-6 col-12">
                  <Form.Control type="password" placeholder="Password" className={` ml-5 ${styles.form_control}`}
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && <p>{errors.password}</p>}
                

                </Form.Group>



                <Form.Group className="col-lg-6 col-12">
                  <Form.Control type="password" placeholder="Confirm your Password" className={` ml-5 ${styles.form_control}`}
                  name="password2"
                  value={values.password2}
                  onChange={handleChange}
                   />
                   {errors.password2 && <p>{errors.password2}</p>}
                  

                </Form.Group>

                
                <div>
                  <Button type='submit' className={`btn ${styles.form_control} && ${styles.submit_btn}`} >Login</Button>
                </div>
            

                <div>
                  <Form.Group>
                    <span className="mr-2">Have an account? <a href="/login">Sign in now</a></span>
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
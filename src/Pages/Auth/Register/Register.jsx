import React, { useState } from "react";
import styles from "../Form.module.scss";
import { Form, Container, Row, Col, Button, Image } from "react-bootstrap";
import LayoutWrapper from "../../../hoc/Layout";
import validate from "./validation";
import { useNavigate } from "react-router-dom";

function Register() {
  const [values, setValues] = useState({
    email: "",
    username: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setErrors(validate(values));

    const validation = validate(values);

    if (Object.keys(validation).length === 0) {
      console.log(values);
      navigate("/newList");
    }
  };

  return (
    <Container className="resume py-5 d-lg-flex justify-content-center align-items-center">
      <Row>
        <Col className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
          <div>
            <img
              src="../img/about1.png"
              className="about-logo png"
              thumbnail="true"
              style={{ border: "none" }}
            />
          </div>
        </Col>
        <Col className="col-lg-6 col-12">
          <div className="contact-form text-center py-5 ">
            <h3 className="mb-4"> Sign up</h3>
            <Form className={` ${styles.contact_form}`} onSubmit={handleSubmit}>
              <Row>
                <Form.Group className="col-12">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className={` ml-5 ${styles.form_control}`}
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p>{errors.email}</p>}
                </Form.Group>

                <Form.Group className="col-12">
                  <Form.Control
                    type="username"
                    placeholder="Username"
                    className={` ml-5 ${styles.form_control}`}
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                  />
                  {errors.username && <p>{errors.username}</p>}
                </Form.Group>

                <Form.Group className="col-lg-6 col-12">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className={` ml-5 ${styles.form_control}`}
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && <p>{errors.password}</p>}
                </Form.Group>

                <Form.Group className="col-lg-6 col-12">
                  <Form.Control
                    type="password"
                    placeholder="Confirm your Password"
                    className={` ml-5 ${styles.form_control}`}
                    name="password2"
                    value={values.password2}
                    onChange={handleChange}
                  />
                  {errors.password2 && <p>{errors.password2}</p>}
                </Form.Group>

                <div>
                  <Button
                    type="submit"
                    className={`btn ${styles.form_control} && ${styles.submit_btn}`}
                  >
                    Register
                  </Button>
                </div>

                <div>
                  <Form.Group>
                    <span className="mr-2">
                      Have an account? <a href="/login">Sign in now</a>
                    </span>
                  </Form.Group>
                </div>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LayoutWrapper(Register);

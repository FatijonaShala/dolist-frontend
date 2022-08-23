import React, { useState } from "react";
import styles from "../Form.module.scss";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import LayoutWrapper from "../../../hoc/Layout";
import validate from "./validation";
import { useNavigate } from "react-router-dom";

function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.persist();
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
    <Container className=" py-5 d-lg-flex justify-content-center align-items-center">
      <Row>
        <Col className="col-lg-6 col-12 d-flex justify-content-center align-items-center ">
          <img
            src="../img/about1.png"
            className=" about-logo png"
            alt="DoListlogo"
            style={{ border: "none" }}
          />
        </Col>
        <Col className="col-lg-6 col-12">
          <div className=" contact-form text-center py-5">
            <h3 className="  mb-4"> Sign in </h3>
            <span className="mr-2">to continue to DoList</span>
            <Form
              className={`   ${styles.contact_form} `}
              onSubmit={handleSubmit}
            >
              <Row>
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
                <Form.Group className="col-12">
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

                <div>
                  <Button
                    type="submit"
                    className={`btn ${styles.form_control} && ${styles.submit_btn}`}
                  >
                    Login
                  </Button>
                </div>
                <div>
                  <Form.Group>
                    <span className="mr-2">
                      Don't have an account? <a href="/register">Sign up now</a>
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
export default LayoutWrapper(Login);

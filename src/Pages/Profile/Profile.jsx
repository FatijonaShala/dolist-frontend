import React, { useState } from "react";
import style from "./profile.module.scss";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import LayoutWrapper from "../../hoc/Layout";

function Profile() {
  const [username, setUsername] = useState("Username");
  const [email, setEmail] = useState("Your@email.com");
  const [password, setPassword] = useState("Update Password");

  return (
    <Container className="resume rounded  mt-5 mb-5">
      <Row>
        <Col className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
            />
            <span className="mr-2 font-weight-bold">{username}</span>

            <span className="mr-2 ">{email}</span>
            <span> </span>
          </div>
        </Col>
        <Col className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="text-right mb-4">Profile Settings</h3>
            </div>
            {/* <div className="contact-form"> */}
            <Form className={style.contact_form}>
              <Row className="mt-2">
                <Col className="col-md-6">
                  <label className="labels">Username</label>
                  <Form.Control
                    className={` ml-5 ${style.form_control}`}
                    type="username"
                    placeholder="username"
                  />
                </Col>
                <Col className="col-md-6">
                  <label className="labels">Email</label>
                  <Form.Control
                    className={` ml-5 ${style.form_control}`}
                    type="email"
                    placeholder="email"
                  />
                </Col>
                {/* </Row> */}
                {/* <Row className=" mt-2"> */}
                <Col className="col-md-6">
                  <label className="labels">Password</label>
                  <Form.Control
                    className={` ml-5 ${style.form_control}`}
                    type="password"
                    placeholder="password"
                  />
                </Col>

                <Col className="col-md-6">
                  <label className="labels">Confirm Password</label>
                  <Form.Control
                    className={` ml-5 ${style.form_control}`}
                    type="password"
                    placeholder="confirm password"
                  />
                </Col>

                <div className="mt-1 d-flex justify-content align-items-center ml-lg-auto col-lg-6 ">
                  <Form.Control
                    type="submit"
                    className={`btn ${style.form_control} && ${style.submit_btn}`}
                    value="Update"
                  />
                </div>
              </Row>
            </Form>
          </div>
          {/* </div> */}
        </Col>
      </Row>
    </Container>
  );
}

export default LayoutWrapper(Profile);

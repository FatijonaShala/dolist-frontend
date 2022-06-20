import React, { useState } from "react";
import style from "./profile.module.scss";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import LayoutWrapper from "../../hoc/Layout";

function Profile() {
  const [username, setUsername] = useState("Username");
  const [email, setEmail] = useState("Your@email.com");
  const [password, setPassword] = useState("Update Password");

  return (
    <Container className="rounded bg-white mt-5 mb-5">
      <Row>
        <Col className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
            />
            <span className="mr-2 font-weight-bold">{username}</span>

            <span className="mr-2 text-black-70">{email}</span>
            <span> </span>
          </div>
        </Col>
        <Col className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="text-right mb-4">Profile Settings</h3>
            </div>
            <Form className={style.contact_form}>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Username</label>
                  <Form.Control
                    className={` ml-5 ${style.form_control}`}
                    type="username"
                    placeholder="username"
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Email</label>
                  <Form.Control
                    className={` ml-5 ${style.form_control}`}
                    type="email"
                    placeholder="email"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Password</label>
                  <Form.Control
                    className={` ml-5 ${style.form_control}`}
                    type="password"
                    placeholder="password"
                  />
                </div>

                <div className="col-md-12">
                  <label className="labels">Confirm Password</label>
                  <Form.Control
                    className={` ml-5 ${style.form_control}`}
                    type="password"
                    placeholder="confirm password"
                  />
                </div>
              </div>
              {/* </Form> */}

              <div className="mt-5 text-center">
                <Button
                  type="submit"
                  className={`btn ${style.form_control} && ${style.submit_btn}`}
                >
                  Update
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LayoutWrapper(Profile);

import React, { useState } from "react";
import style from "./profile.module.scss";
import { Form, Button, Container, Row } from "react-bootstrap";
import LayoutWrapper from "../../hoc/Layout";

function Profile() {
  const [username, setUsername] = useState("Username");
  const [email, setEmail] = useState("Your@email.com");
  const [password, setPassword] = useState("Update Password");

  return (
    <Container className=" rounded bg-white mt-5 mb-5">
      <Row>
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
            />
            <span className="font-weight-bold">{username}</span>
            <span className="text-black-50">{email}</span>
            <span> </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <Form>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Username</label>
                  <Form.Control type="text" placeholder="username" value="" />
                </div>
                <div className="col-md-6">
                  <label className="labels">Email</label>
                  <Form.Control type="email" value="" placeholder="email" />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Password</label>
                  <Form.Control
                    type="password"
                    value=""
                    placeholder="password"
                  />
                </div>

                <div className="col-md-12">
                  <br />
                  <label className="labels">Confirm Password</label>
                  <Form.Control
                    type="password"
                    value=""
                    placeholder="confirm password"
                  />
                </div>
              </div>
            </Form>

            <div className="mt-5 text-center">
              <Button
                type="submit"
                className={`btn ${style.form_control} && ${style.submit_btn}`}
              >
                Save profile
              </Button>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default LayoutWrapper(Profile);

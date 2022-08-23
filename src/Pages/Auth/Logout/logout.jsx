import React from "react";
import styles from "../Form.module.scss";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import LayoutWrapper from "../../../hoc/Layout";
import Login from "../Login";

function logout() {
  return (
    <div>
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
          <Col className="col-lg-6 col-12 d-flex justify-content-center align-items-center ">
            <div className=" contact-form text-center ">
              <h3 className="  mb-4"> Sad to see you go </h3>

              <span className="mr-2">
                to continue to DoList <a href="/login">sign in now</a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LayoutWrapper(logout);

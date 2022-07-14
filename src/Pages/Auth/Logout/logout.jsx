import React from "react";
import styles from "../Form.module.scss";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import LayoutWrapper from "../../../hoc/Layout";
import Login from "../Login";

function logout() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div>
              <img
                src="../img/about1.png"
                className="w-5 ml-5 mt-1 pt-1 about-image png"
                thumbnail
                style={{ border: "none" }}
              />
            </div>
          </Col>
          <Col>
            <div className="text-center w-1 ml-5 mt-5 pt-5">
              <h1 className="mb-1"> Sign in </h1>
              <span className="mr-2">
                Don't have an account? <a href="/register">Sign up now</a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LayoutWrapper(logout);

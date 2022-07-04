import React from "react";
import styles from "../Form.module.scss";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import LayoutWrapper from "../../../hoc/Layout";

function logout() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div>
              <Image
                src="../img/about1.png"
                className="w-5 ml-5 mt-1 pt-1 about-image png"
                thumbnail
                style={{ border: "none" }}
              />
            </div>
          </Col>
          <Col>
            <div>
              <br />
            </div>
          </Col>
        </Row>
      </Container>{" "}
      <div>logout</div>
    </div>
  );
}

export default LayoutWrapper(logout);

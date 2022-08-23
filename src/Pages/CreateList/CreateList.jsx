import React, { useState } from "react";
import LayoutWrapper from "../../hoc/Layout";

import TodoList from "./TodoList";
import Timer from "./Timer";
import { Col, Container, Row } from "react-bootstrap";

function CreateList() {
  return (
    <>
      <Container className="resume py-5">
        <Row className="mb-1">
          <Col className="col-lg-6 col-12">
            <TodoList />
          </Col>

          <Col className="col-lg-6 col-12 ">
            <Timer />
          </Col>
          {/* </Row>
        <Row> */}

          <Col className="col-lg-6 col-12 d-lg-flex justify-content-center align-items-center">
            <div className="about-image png">
              <img src="../img/about1.png" className="img-fluid" alt="svg" />
            </div>
          </Col>
          <Col className="col-lg-6 col-12 d-lg-flex justify-content-center align-items-center text-center">
            <div className="">
              <p>Work with DoList. </p>
              <h3>“Opportunities don't happen, you create them.”</h3>

              <p>Create your to do lists and organize your time.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LayoutWrapper(CreateList);

import React, { useState } from "react";
import LayoutWrapper from "../../hoc/Layout";

import TodoList from "./TodoList";
import Timer from "./Timer";
import { Col, Container, Row } from "react-bootstrap";

function CreateList() {
  return (
    <>
      <Container className="resume py-1">
        <Row>
          <Col>
            <TodoList />
          </Col>

          <Col>
            <Timer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LayoutWrapper(CreateList);

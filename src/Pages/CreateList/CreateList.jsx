import React from "react";
import LayoutWrapper from "../../hoc/Layout";
import { Container } from "react-bootstrap";

function CreateList() {
  return (
    <>
      {" "}
      <Container className="resume py-5"></Container>
    </>
  );
}

export default LayoutWrapper(CreateList);

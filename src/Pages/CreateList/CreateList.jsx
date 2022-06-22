import React, { useState } from "react";
import styles from "./createList.module.scss";
import LayoutWrapper from "../../hoc/Layout";
import { Button, Container, Form, Row } from "react-bootstrap";

function CreateList() {
  return (
    <div>
      <Form autoComplete="of">
        <input
          type="text"
          name="todos"
          id="todos"
          required
          placeholder="To-do"
        />
        <Button type="submit">Add Todo</Button>
      </Form>

      <ul>
        <li>
          <label htmlFor="">
            <input type="checkbox" id="id" />
            Cooking
          </label>
          <Button>Edit</Button>
        </li>
        <li>
          <label htmlFor="">
            <input type="checkbox" id="id" />
            Reading
          </label>
          <Button>Edit</Button>
        </li>
      </ul>

      <Row>
        <label htmlFor="all">
          <input type="checkbox" name="all" id="all" />
          All
        </label>
        <p>
          {" "}
          You have 0 to do
          <Button>Delete</Button>
        </p>
      </Row>
    </div>
  );
}

export default LayoutWrapper(CreateList);

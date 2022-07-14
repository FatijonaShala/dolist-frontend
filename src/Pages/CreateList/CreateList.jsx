import React, { useState } from "react";
import LayoutWrapper from "../../hoc/Layout";
import Form from "./Form";
import Todo from "./Todo";
import { Container } from "react-bootstrap";

function CreateList() {
  const [tasks, setTasks] = useState([]);

  const [formInput, setFormInput] = useState("");

  const handleChange = (e) => {
    setFormInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formInput !== "") {
      const date = new Date().toLocaleDateString();
      const newTask = {
        date: date,
        task: formInput,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setFormInput("");
    }
  };

  const handleComplete = (index) => {
    const newTasks = [...tasks];
    if (newTasks[index].completed === false) {
      newTasks[index].completed = true;
    } else {
      newTasks[index].completed = false;
    }
    setTasks(newTasks);
  };

  const handleRemove = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleRemoveAll = () => {
    setTasks([]);
  };

  return (
    <>
      {" "}
      <Container className="resume py-5">
        <Form
          formInput={formInput}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <Todo
          tasks={tasks}
          handleComplete={handleComplete}
          handleRemove={handleRemove}
          handleRemoveAll={handleRemoveAll}
        />
      </Container>
    </>
  );
}

export default LayoutWrapper(CreateList);

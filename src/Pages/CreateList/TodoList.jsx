import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Plus from "@iconscout/react-unicons/icons/uil-plus";
import Trash from "@iconscout/react-unicons/icons/uil-trash";
import Pen from "@iconscout/react-unicons/icons/uil-pen";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  React.useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleRemoveAll = () => {
    setTodos([]);
  };

  return (
    <>
      <Container className="resume py-5 text-center">
        <div className="todopart">
          <h5 className="mb-2"> My To - Do List </h5>
          <div className="card-body">
            <form
              className="formInput"
              onSubmit={handleSubmit}
              handleChange={handleChange}
            >
              <label htmlFor="taskInput"> </label>{" "}
              <input type="text" onChange={handleChange} value={todo} />
              <button className="btn-add" type="submit" alt="Add task">
                <i className="fa-5x">
                  <Plus />
                </i>{" "}
              </button>{" "}
            </form>{" "}
            <ul className="nav nav-pills todo-nav">
              <li role="presentation" className="nav-item all-task active">
                <a href="#" className="todolink nav-link">
                  All{" "}
                </a>{" "}
              </li>{" "}
              <li role="presentation" className="nav-item active-task">
                <a href="#" className="todolink nav-link">
                  Active{" "}
                </a>{" "}
              </li>{" "}
              <li role="presentation" className="nav-item completed-task">
                <a href="#" className="todolink nav-link">
                  Completed{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>
          <ul className="todo formInput">
            {" "}
            {todos.map((todo) => (
              <li key={todo.id}>
                <div className="checkAndTask">
                  <label className="checkContainer">
                    <input
                      type="checkbox"
                      id="completed"
                      checked={todo.completed}
                      onChange={() => toggleComplete(todo.id)}
                    />{" "}
                    <span className="checkmark"> </span>{" "}
                  </label>
                  <label htmlFor="taskInput">
                    {" "}
                    {todo.id === todoEditing ? (
                      <input
                        type="text"
                        onChange={(e) => setEditingText(e.target.value)}
                      />
                    ) : (
                      <span className="task-text"> {todo.text} </span>
                    )}{" "}
                  </label>{" "}
                </div>
                <div className="btn-group">
                  {" "}
                  {todo.id === todoEditing ? (
                    <button
                      className="btn btn-sm btn-outline-secondary btn-add"
                      onClick={() => submitEdits(todo.id)}
                    >
                      <i>
                        <Pen />
                      </i>{" "}
                    </button>
                  ) : (
                    <button
                      className="btn btn-sm btn-outline-secondary btn-add"
                      onClick={() => setTodoEditing(todo.id)}
                    >
                      <i>
                        <Pen />
                      </i>{" "}
                    </button>
                  )}
                  <button
                    className="btn btn-sm btn-outline-secondary btn-add"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <i>
                      <Trash />
                    </i>{" "}
                  </button>{" "}
                </div>{" "}
              </li>
            ))}{" "}
            <div>
              {" "}
              {todos.length > 1 && (
                <p>
                  <button
                    className="deleteAll btn-add"
                    onClick={() => handleRemoveAll()}
                  >
                    <i>
                      <Trash />
                    </i>
                    Delete All{" "}
                  </button>{" "}
                </p>
              )}{" "}
            </div>{" "}
          </ul>{" "}
        </div>{" "}
      </Container>{" "}
    </>
  );
}

export default TodoList;

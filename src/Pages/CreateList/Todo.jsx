import React from "react";
import Trash from "@iconscout/react-unicons/icons/uil-trash";
import Pen from "@iconscout/react-unicons/icons/uil-pen";

const Todo = (props) => {
  const { tasks, handleComplete, handleRemove, handleRemoveAll, handleChange } =
    props;

  return (
    <ul className="todo">
      {tasks.map((task, index) => (
        <li key={index}>
          <div className="checkAndTask">
            <label className="checkContainer">
              <input type="checkbox" onClick={() => handleComplete(index)} />
              <span className="checkmark"></span>
            </label>
            <span className="task-text">{task.task}</span>
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary btn-add"
              onClick={() => handleChange(index)}
            >
              <i>
                {" "}
                <Pen />
                {/* className="fa-solid fa-trash-can" */}
              </i>
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary btn-add"
              onClick={() => handleRemove(index)}
            >
              <i>
                <Trash />
              </i>
            </button>
          </div>
        </li>
      ))}
      {tasks.length > 1 && (
        <p>
          <button className="deleteAll" onClick={() => handleRemoveAll()}>
            <i>
              <Trash />
            </i>
            Delete All
          </button>
        </p>
      )}
    </ul>
  );
};

export default Todo;

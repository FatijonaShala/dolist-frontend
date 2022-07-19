import React from "react";
import Plus from "@iconscout/react-unicons/icons/uil-plus";

const Form = (props) => {
  const { formInput, handleChange, handleSubmit } = props;

  return (
    <div className="card-body">
      <form className="formInput" onSubmit={handleSubmit}>
        <label htmlFor="taskInput"></label>
        <input required type="text" value={formInput} onChange={handleChange} />
        <button className="btn-add" type="submit" alt="Add task">
          <i className="fa-5x">
            <Plus />
          </i>
        </button>
      </form>
      <ul className="nav nav-pills todo-nav">
        <li role="presentation" className="nav-item all-task active">
          <a href="#" className="todolink nav-link">
            All
          </a>
        </li>
        <li role="presentation" className="nav-item active-task">
          <a href="#" className="todolink nav-link">
            Active
          </a>
        </li>
        <li role="presentation" className="nav-item completed-task">
          <a href="#" className="todolink nav-link">
            Completed
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Form;

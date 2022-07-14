import React from "react";
import Plus from "@iconscout/react-unicons/icons/uil-plus";

const Form = (props) => {
  const { formInput, handleChange, handleSubmit } = props;

  return (
    <form className="formInput" onSubmit={handleSubmit}>
      <label htmlFor="taskInput"></label>
      <input required type="text" value={formInput} onChange={handleChange} />
      <button className="btn-add" type="submit" alt="Add task">
        <i className="fa-5x">
          <Plus />
        </i>
      </button>
    </form>
  );
};

export default Form;

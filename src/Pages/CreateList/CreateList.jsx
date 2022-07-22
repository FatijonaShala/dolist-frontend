import React, { useState } from "react";
import LayoutWrapper from "../../hoc/Layout";

import TodoList from "./TodoList";

function CreateList() {
  return (
    <>
      <TodoList />
    </>
  );
}

export default LayoutWrapper(CreateList);

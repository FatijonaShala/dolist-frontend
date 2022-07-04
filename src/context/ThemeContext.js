import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();

//Adding the Context and Reducer
// HOC (Higher Order Component) that’ll be used to wrap any component with the Context provider.
// In this HOC, we need to use the useReducer hook to create a state and the dispatch function to update that state and pass it to the provider component’s value prop.
// We need to write a reducer function to switch between dark mode and light mode.

const initialState = { darkMode: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };

    case "DARKMODE":
      return { darkMode: "true" };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  //Now, we need to pass this themeReducer function and the initialState to the useReducer hook.
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    //Now, let’s write the HOC and export it from this file.
    //We should pass the state and the dispatch function to the value prop of the Provider.
    <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

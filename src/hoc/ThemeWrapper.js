// import React, { createContext, useState, useEffect } from "react";
// import { ThemeContext, themes } from "../context/ThemeContext";

// export default function ThemeContextWrapper(props) {
//   const themes = {
//     dark: "dark-mode",
//     light: "",
//   };

//   const ThemeContext = createContext({
//     theme: themes.dark,
//     changeTheme: () => {},
//   });

//   const [theme, setTheme] = useState(themes.light);
//   //const darkMode = useState(themes.dark);

//   function changeTheme(theme) {
//     setTheme(theme);
//   }

//   useEffect(() => {
//     switch (theme) {
//       case themes.dark:
//         document.body.classList.add("dark-mode");
//         break;
//       case themes.light:
//       default:
//         document.body.classList.remove("dark-mode");
//         break;
//     }
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme: themes, changeTheme: changeTheme }}>
//       {props.children}
//     </ThemeContext.Provider>
//   );
// }

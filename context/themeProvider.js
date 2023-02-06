import { useReducer } from "react";
import ThemeContext from "./themeContext";

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      if (state.darkMode) {
        return { darkMode: false };
      }
      return { darkMode: true };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const initialState = {
    darkMode: "false",
  };
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

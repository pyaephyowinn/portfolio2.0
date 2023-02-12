import { useReducer, useEffect } from "react";
import ThemeContext from "./themeContext";
import { setTheme } from "../utils/storage";

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      setTheme(!state.darkMode);
      if (state.darkMode) {
        return { darkMode: false };
      }
      return { darkMode: true };
    case "SET":
      return {
        darkMode: action.darkMode,
      };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const initialState = {
    darkMode: false,
  };

  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

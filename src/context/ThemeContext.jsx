import { createContext, useContext, useState } from "react";
import { oliveTheme, themes } from "../Colors/Colors";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(oliveTheme);

  return (
    <ThemeContext.Provider value={{ colors: currentTheme, setTheme: setCurrentTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useColors = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) return oliveTheme;
  return ctx.colors;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  return useContext(ThemeContext);
};

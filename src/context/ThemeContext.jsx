import { createContext, useContext, useState } from "react";
import { brownTheme, themes } from "../Colors/Colors";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(brownTheme);

  return (
    <ThemeContext.Provider value={{ colors: currentTheme, setTheme: setCurrentTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useColors = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) return brownTheme;
  return ctx.colors;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  return useContext(ThemeContext);
};

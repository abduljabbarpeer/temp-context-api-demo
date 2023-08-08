import { useState, createContext } from "react";

// Step 1 : Create Context
export const ThemeContext = createContext();

// Step 2.A : Provide
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // "light", "dark"

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

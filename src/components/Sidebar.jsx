import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { Button } from "./Button";

// consume theme
// useContext;
// from which box --> ThemeContext

function Sidebar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ gridColumn: "span 2" }}>
      <div
        style={{
          height: "600px",
          background: theme === "dark" ? "black" : "inherit",
          border: theme === "dark" ? "1px solid whitesmoke" : "1px solid black",
          color: theme === "dark" ? "whitesmoke" : "black",
        }}
      >
        <h4>Current Theme : {theme} </h4>
        <Button btnText="TOGGLE THEME" onClick={toggleTheme} />
      </div>
    </div>
  );
}

export { Sidebar };

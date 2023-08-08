import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

function Main() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ gridColumn: "span 3" }}>
      <div
        style={{
          height: "600px",
          background: theme === "dark" ? "black" : "white",
          color: theme === "dark" ? "whitesmoke" : "black",
          border: theme === "dark" ? "1px solid white" : "1px solid black",
        }}
      >
        MAIN
      </div>
    </div>
  );
}

export { Main };

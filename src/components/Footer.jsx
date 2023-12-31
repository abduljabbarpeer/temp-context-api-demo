import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        marginTop: "20px",
        height: "50px",
        background: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "whitesmoke" : "black",
        border: theme === "dark" ? "1px solid white" : "1px solid black",
      }}
    >
      FOOTER
    </div>
  );
}

export { Footer };

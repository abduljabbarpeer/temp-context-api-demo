import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

function Button({ btnText, onClick }) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "whitesmoke" : "black",
        border: theme === "dark" ? "1px solid white" : "1px solid black",
      }}
    >
      {btnText}
    </button>
  );
}

export { Button };

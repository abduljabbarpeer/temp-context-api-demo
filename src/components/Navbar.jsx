import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { ThemeContext } from "../context/ThemeContextProvider";
import { Button } from "./Button";

// Step 3 : Consume
function Navbar() {
  const { isAuth, login, logout } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        border: "1px solid black",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: "20px",
        backgroundColor: theme === "dark" ? "black" : "transparent",
        color: theme === "dark" ? "whitesmoke" : "black",
      }}
    >
      <h3> Is User Authenticated : {isAuth ? "Yes" : "No"} </h3>
      <div>
        <Button btnText="LOGIN" onClick={login} />
        <Button btnText="LOGOUT" onClick={logout} />
      </div>
    </div>
  );
}

export { Navbar };

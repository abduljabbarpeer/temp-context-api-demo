import { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";

// Step 3 : Consume
function Navbar() {
  const { isAuth, login, logout } = useContext(AppContext);

  return (
    <div
      style={{
        border: "1px solid black",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: "20px",
      }}
    >
      <h3> Is User Authenticated : {isAuth ? "Yes" : "No"} </h3>
      <div>
        <button onClick={login}>LOGIN</button>
        <button onClick={logout}>LOGOUT</button>
      </div>
    </div>
  );
}

export { Navbar };

import { createContext, useState } from "react";

// Step 1 : Create Context
export const AppContext = createContext();

// Step 2.A : Provide
export const AppContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const login = () => {
    setIsAuth(true);
  };

  const logout = () => {
    setIsAuth(false);
  };

  return (
    <AppContext.Provider
      value={{
        isAuth: isAuth,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

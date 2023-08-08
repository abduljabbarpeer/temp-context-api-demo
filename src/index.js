import { createRoot } from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContextProvider";
import { ThemeContextProvider } from "./context/ThemeContextProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Step 2.B : Provide
root.render(
  <ThemeContextProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </ThemeContextProvider>
);

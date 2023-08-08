import { createRoot } from "react-dom/client";
import App from "./App";
import { AppContextProvider } from "./context/AppContextProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Step 2.B : Provide
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);

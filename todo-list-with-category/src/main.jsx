import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import ListContextProvider from "./context/ListContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ListContextProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </ListContextProvider>
  </StrictMode>
);

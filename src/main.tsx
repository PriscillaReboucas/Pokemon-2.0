import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PokeProvider } from "./PokeContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PokeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PokeProvider>
  </React.StrictMode>
);

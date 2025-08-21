import { BrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/primiferia_experiencia">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

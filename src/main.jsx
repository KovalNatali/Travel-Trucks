// import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

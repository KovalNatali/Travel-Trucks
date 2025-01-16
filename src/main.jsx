// import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

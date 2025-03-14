import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Outlet />
  </BrowserRouter>,
  document.getElementById("root")
);

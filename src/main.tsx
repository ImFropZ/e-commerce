import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PreloadImage from "./config/PreloadImage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PreloadImage />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

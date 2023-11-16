import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SiteContextProvider } from "./context/SiteContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SiteContextProvider>
    <App />
  </SiteContextProvider>
);

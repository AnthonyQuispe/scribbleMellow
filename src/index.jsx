import React from "react";
import ReactDom from "react-dom/client";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

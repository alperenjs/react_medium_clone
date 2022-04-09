import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "routes";
import Topbar from "components/Topbar";

const App = () => {
  return (
    <Router>
      <Topbar />
      <AppRoutes />
    </Router>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

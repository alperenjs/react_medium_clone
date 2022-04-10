import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "routes";
import Topbar from "components/Topbar";
import { CurrentUserProvider } from "contexts/currentUser";
import CurrentUserChecker from "components/CurrentUserCHecker";

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <Topbar />
          <AppRoutes />
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

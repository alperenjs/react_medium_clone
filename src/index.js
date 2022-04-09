import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from 'routes';



const App = () => {
  return (
    <div className="App">
      <h3>Welcome here is our app</h3>
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

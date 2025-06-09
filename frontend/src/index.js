import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactGA from "react-ga4";

// Initialize Google Analytics
if (process.env.REACT_APP_GA4_MEASUREMENT_ID) {
  ReactGA.initialize(process.env.REACT_APP_GA4_MEASUREMENT_ID);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
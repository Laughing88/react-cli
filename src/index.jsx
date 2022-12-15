import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import Home from "./home/home.jsx";

ReactDOM.render(
  <React.StrictMode>
    <Home name = "jerry" age = {18} sex = "女"/>.
  </React.StrictMode>,
  document.getElementById("root")
);

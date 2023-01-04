import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import Home from "./home/home.jsx";
import Request from "./request/request";

ReactDOM.render(
  <React.StrictMode>
    <Home name = "jerry" age = {18} sex = "女"/>.
    {/*  <Request/>*/}
  </React.StrictMode>,
  document.getElementById("root")
);

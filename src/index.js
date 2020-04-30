import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import serviceWorker from "./serviceWorker";
import "tachyons";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker();

export default "index.js";

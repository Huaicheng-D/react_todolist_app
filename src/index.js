import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// The first code that the browser will run when loaded into the browser

// Use the index.html as the single html page to launch the app.
// <App /> a custom element.
// React will render the content inside the custom element.

ReactDOM.render(<App />, document.getElementById("root"));

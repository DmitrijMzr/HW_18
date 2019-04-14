import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import todoItems from "./components/store";

ReactDOM.render(<App initItems={todoItems}/>, document.getElementById('root'));
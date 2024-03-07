import React from "react";
// import "./assets/base.css";
// import "./assets/styles.css";
import { render } from "react-dom";
import App from "./App.jsx";

const root = document.createElement("div");
root.setAttribute("id", "root");
document.body.appendChild(root);

render(<App />, root);

// import { createRoot } from 'react-dom/client';
// import App from "./App.jsx";

// const container = document.getElementById('root');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App />);

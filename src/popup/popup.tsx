import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return <h1>Hello React Webpack Extension</h1>;
};

const container = document.createElement("div");
document.body.appendChild(container);
createRoot(container).render(<App />);

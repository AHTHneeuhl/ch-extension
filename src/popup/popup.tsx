import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";

const App = () => {
  return (
    <h1 className="text-5xl text-green-700 font-medium">
      Hello React Webpack Extension
    </h1>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);
createRoot(container).render(<App />);

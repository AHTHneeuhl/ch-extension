import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";

const App = () => {
  return (
    <div>
      <h1 className="text-5xl text-green-700 font-medium">Options Page</h1>
      <img src="healthy-food.jpg" alt="healthy-food" />
    </div>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);
createRoot(container).render(<App />);

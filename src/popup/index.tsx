import React from "react";
import { createRoot } from "react-dom/client";
import Popup from "./popup";

function init() {
  const appContainer = document.createElement("div");
  document.body.appendChild(appContainer);
  if (!appContainer) {
    throw new Error("Can not find AppContainer");
  }
  createRoot(appContainer).render(<Popup />);
}

init();

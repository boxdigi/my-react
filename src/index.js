import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="all">
      <h1>React AJAX Search Engine</h1>
      <h3>React, week 3 homework </h3>
      <div className="app">
        <Search />
      </div>
      <p><a href="/">open-source code</a> by Hanna Veselova</p>
    </div>
  </StrictMode>
)

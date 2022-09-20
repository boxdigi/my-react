import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";

import "./index.css";
import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="all">
      <h1>React AJAX Search Engine</h1>
      <h3>week 4, homework </h3>
      <div className="app">
        <Search />
      </div>
      <p><a href="/">Open-source code</a> by Hanna Veselova</p>
    </div>
  </StrictMode>
);

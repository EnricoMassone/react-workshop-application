import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1>Adopt Me</h1>
        <SearchParams />
      </div>
    </React.StrictMode>
  );
};

const root = document.getElementById("root");
render(<App />, root);

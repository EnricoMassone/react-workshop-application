import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Link, Router } from "@reach/router";
import Details from "./Details";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt Me</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

const root = document.getElementById("root");
render(<App />, root);

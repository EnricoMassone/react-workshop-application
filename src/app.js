import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Link, Router } from "@reach/router";
import Details from "./Details";
import NotFound from "./NotFound";
import ErrorBoundary from "./ErrorBoundary";

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
          <NotFound default />
        </Router>
      </div>
    </React.StrictMode>
  );
};

const WrappedApp = props => (
  <ErrorBoundary>
    <App {...props} />
  </ErrorBoundary>
);

const root = document.getElementById("root");
render(<WrappedApp />, root);

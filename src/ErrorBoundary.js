import React from "react";
import { Redirect, Link } from "@reach/router";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    shouldRedirect: false
  };

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, info) {
    console.error("An error has occurred inside your application", error, info);
  }

  componentDidUpdate() {
    const { hasError } = this.state;
    if (hasError) {
      setTimeout(() => this.setState({ shouldRedirect: true }), 5000);
    }
  }

  render() {
    const { hasError, shouldRedirect } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" noThrow />;
    }

    if (hasError) {
      return (
        <div className="error-banner">
          Ooops...an error has occurred! Click <Link to="/">here</Link> to go
          back to the home page or wait for five seconds.
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

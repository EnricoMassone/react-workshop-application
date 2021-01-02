import React from "react";
import { Redirect, Link } from "@reach/router";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    shouldRedirect: false
  };

  timeoutId = null;

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, info) {
    console.error("An error has been caught by error boundary", error, info);
  }

  componentDidUpdate() {
    const { hasError } = this.state;
    if (hasError) {
      this.timeoutId = setTimeout(
        () => this.setState({ shouldRedirect: true }),
        5000
      );
    }
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
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
          Ooops...an error has occurred in your application <br />
          Click <Link to="/">here</Link> to go back to the home page or wait for
          five seconds.
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

import React, { Component } from 'react';
import { render } from "react-dom";

// import { Redirect } from 'react-router-dom';
// import Nav from '../../components/nav.components';
// import Footer from '../../components/footer.components';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any child components and re-renders with an error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>{"Oh Junk!! Something went wrong"}</h2>
          <p className="red">
            {this.state.error && this.state.error.toString()}
          </p>
          <div>{"Component Stack Error Details: "}</div>
          <p className="red">{this.state.errorInfo.componentStack}</p>
        </div>
      );
    }
    // Renders CHildren 
    return this.props.children;
  }
}

export default ErrorBoundary;
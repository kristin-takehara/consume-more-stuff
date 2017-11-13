import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';

// import Nav from '../../components/nav.components';
// import Footer from '../../components/footer.components';

class ErrorBoundary extends Component {
  constructor(props){
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true});
    // logError(error,info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='err-msg'>
          <h4>something went wrong!</h4>
        </div>
      );
    }
    else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
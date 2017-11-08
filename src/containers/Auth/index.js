import React, { Component } from 'react';
import { connect } from 'react-redux';

class loginRegister extends Component {

  verifyUser() {

  }
}

// maps store state to local props
const mapStateToProps = {
  items : itemsList
};

// maps store dispatch to local props
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (loginCreds) => {
      dispatch(loginUser(loginCreds));
    },

    registerUser: (registerCreds) => {
      dispatch(registerUser(registerCreds));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(loginRegister);
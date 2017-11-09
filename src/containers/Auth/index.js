import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser, loginUser, logoutUser } from '../../actions/auth.actions';
import { loadUsers } from '../../actions/users.actions';

class loginRegister extends Component {
  
  constructor() {
    super();

    this.state = {
      username : '',
      password : ''
    };
  }

  verifyUsername(newUsername) {
    return users.some(user => {
      return user.username === newUsername;
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    
    let registerCreds = {
      username : this.state.username,
      password : this.state.password
    };

    this.props(registerUser(registerCreds));

    this.setState({
      username : '',
      password : ''
    });
  }

  handleChange(evt) {
    const target = evt.target;
    const name = evt.name;
    const value = evt.value;
    this.setState({
      [name] : value
    });
  }

  componentDidMount() {
    this.props.loadUsers();
    // this.state.users
  }

  render() {

  }
}

// maps store state to local props
const mapStateToProps = {
  users : state.userList
};

// maps store dispatch to local props
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (loginCreds) => {
      dispatch(loginUser(loginCreds));
    },

    registerUser: (registerCreds) => {
      dispatch(registerUser(registerCreds));
    },

    loadUsers: () => {
      dispatch(loadUsers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(loginRegister);
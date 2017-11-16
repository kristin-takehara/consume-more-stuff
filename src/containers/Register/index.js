import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { registerUser } from '../../actions/auth.actions';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      username : '',
      password : '',
      email: '',
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let registerCreds = {
      username : this.state.username,
      password : this.state.password,
      email : this.state.email
    };

    this.props.registerUser(registerCreds);
    this.setState(
    {
      username : '',
      password : '',
      email : ''
    });
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  render() {
    if(localStorage.getItem('registered')) {
      return <Redirect to="/login"/>
    }

    return(
      <div id="register-container">
        <h2>Register</h2>
        <div className="register-form">
          <form
            className="inner-form-container"
            onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-header">
            EMAIL
            <br/>
          </div>
          <div>
          <input
            defaultValue={this.state.email}
            onChange={this.handleEmailChange}
            placeholder="email"
            type="text" />
          </div>
          <br/>
          <div className="form-header">
            USERNAME<br/>(3-20 characters. No spaces or special characters)
          </div>
          <div>
            <input
              defaultValue={this.state.username}
              onChange={this.handleUsernameChange}
              placeholder="username"
              type="text" />
          </div>
          <br/>
          <div className="form-header">
            PASSWORD<br/>(minimum length - 5 characters)
          </div>
          <div>
          <input
            defaultValue={this.state.password}
            onChange={this.handlePasswordChange}
            placeholder="password"
            type="password" />
          </div>
          <br/>
          <input
            className="register-btn"
            type="submit"
            value="Register" />

          </form>
        </div>
      </div>
    );
  }
}

// maps store state to local props
const mapStateToProps = (state) => {
  return {
    singleUser : state.singleUser
  };
};

// maps store dispatch to local props
const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (registerCreds) => {
      dispatch(registerUser(registerCreds));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
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
      error: ''
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleBlurValidation = this.handleBlurValidation.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let registerCreds = {
      username : this.state.username,
      password : this.state.password,
      email : this.state.email,
      error: this.state.error
    };

    this.props.registerUser(registerCreds);
    
    this.setState(
    {
      username : '',
      password : '',
      email : '',
      error : ''
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

  handleBlurValidation(evt) {

    console.log(evt.target.name);
    if (evt.target.name === "username" && this.state.username.length < 3 || this.state.username.length > 20){
      let error = "Username must be 20 characters or less And at least 3 charaters";

      this.setState({
        error: error
      })
    }

    if(evt.target.name === "password" && evt.target.name.length < 5){
      let error = "no empty spaces in password";
      this.setState({
        error:error
      })
    }
  }

  render() {
    if(localStorage.getItem('registered')) {
      return <Redirect to="/login"/>
    }

    return(
      <div id="register-container">
        <h2>Register</h2>
        <h4>{this.state.error}</h4>
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
            name="email"
            defaultValue={this.state.email}
            onChange={this.handleEmailChange}
            onBlur={this.handleBlurValidation}
            placeholder="email"
            type="text" />
          </div>
          <br/>
          <div className="form-header">
            USERNAME<br/>(3-20 characters. No spaces or special characters)
          </div>
          <div>
            <input
              name="username"
              defaultValue={this.state.username}
              onChange={this.handleUsernameChange}
              onBlur={this.handleBlurValidation}
              placeholder="username"
              type="text" />
          </div>
          <br/>
          <div className="form-header">
            PASSWORD<br/>(minimum length - 5 characters)
          </div>
          <div>
          <input
            name="password"
            defaultValue={this.state.password}
            onChange={this.handlePasswordChange}
            onBlur={this.handleBlurValidation}
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
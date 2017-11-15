import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../actions/auth.actions';
import Nav from '../../components/nav.components';
import Footer from '../../components/footer.components';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username : '',
      password : '',
      redirect : false // set initial state to false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);

  }

  handleSubmit(evt) {
    evt.preventDefault();

    let loginCreds = {
      username : this.state.username,
      password : this.state.password
    };

    this.props.loginUser(loginCreds);

    this.setState(
    {
      username : '',
      password : '',
    });

  }

  handleUsernameInput(evt) {
    this.setState(
    {
      username : evt.target.value
    });
  }

  handlePasswordInput(evt) {
    this.setState(
    {
      password : evt.target.value
    });
  }

  render(){
    if(localStorage.loggedIn) {
      return <Redirect to="/"/>
    }

    return(
      <div id="login-container">
        <Nav />
    
        <h2>Login</h2>
    
        <div>
          <center>
            .: welcome back :.
          </center>
        </div>

        <div className="login-form">
          <form onSubmit={this.handleSubmit.bind(this)}>
            username

            <div>
            <input
              type="text"
              placeholder="username"
              defaultValue={this.state.username}
              onChange={this.handleUsernameInput} />
            </div>

            password
            <div>
            <input
              type="password"
              placeholder="password"
              defaultValue={this.state.password}
              onChange={this.handlePasswordInput} />
            </div>

            <button
              className="login-btn"
              type="submit"
              onClick={this.handleSubmit}>
              Login
            </button>
          </form>
        </div>

        <Footer/>
      </div>
    );
  }
}

// maps store state to local props
const mapStateToProps = (state) => {
  return {
    users : state.userList
  };
};

//maps store dispatch to local props
const mapDispatchToProps = (dispatch) => {
  return{
    loginUser: (loginCreds) => {
      dispatch(loginUser(loginCreds));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
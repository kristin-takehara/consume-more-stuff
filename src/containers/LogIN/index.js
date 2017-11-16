import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../actions/auth.actions';
import { formErrors } from  '../../components/formErrors.components';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username : '',
      password : '',
      redirect : false, // set initial state to false
      error : ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleBlurValidation = this.handleBlurValidation.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if(this.state.username === '' || this.state.password === ''){
      let credsError = "You need both username and password to login";
      this.setState({
        error: credsError
      });
    } else {
      let loginCreds = {
        username : this.state.username,
        password : this.state.password
      };

      this.props.loginUser(loginCreds);

      this.setState({
        username : '',
        password : '',
      });
    }
  }

  handleUsernameInput(evt) {
    this.setState(
    {
      username : evt.target.value,
      error : ''
    });
  }

  handlePasswordInput(evt) {
    this.setState(
    {
      password : evt.target.value,
      error : ''
    });
  }

  handleBlurValidation(evt) {
    console.log(evt.target.name);
    if (evt.target.name === "username" && this.state.username.length === 0){
      let error = "No empty spaces in username";

      this.setState({
        error: error
      })
    }

    if(evt.target.name === "password"){
      let error = "no empty spaces in password";
      this.setState({
        error:error
      })
    }
  }
  
  componentDidMount() {
    localStorage.clear();
  }

  render() {
    console.log('hellllllllllo')
    console.log(this.state, " <---THE STATE");
    // loggedIn is a string so its basically checking if anything exists there
    if(localStorage.loggedIn) {
      return <Redirect to={`/users/${localStorage.userId}`}/>
    }

    return(
      <div id="login-container">
        <h2>Login</h2>

        <div>
          <center>
            .: welcome back :.
          </center>
        </div>
        {(this.state.error) && 
          <h3>{this.state.error}</h3>
        }
        <div className="login-form">
          <form className="inner-form-container" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-header">
            USERNAME
            </div>
         <div>
            <input 
              name="username"
              type="text"
              placeholder="username"
              defaultValue={this.state.username}
              onChange={this.handleUsernameInput}
              onBlur={this.handleBlurValidation} />
            </div>

            <div className="form-header">
            PASSWORD
            </div>
            <div>
            <input 
              name="password"
              type="password"
              placeholder="password"
              defaultValue={this.state.password}
              onChange={this.handlePasswordInput} 
              onBlur={this.handleBlurValidation}/>
            </div>
            <br/>
            <button
              className="login-btn"
              type="submit"
              onClick={this.handleSubmit}>
              Login
            </button>
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
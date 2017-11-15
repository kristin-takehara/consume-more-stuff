import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { registerUser } from '../../actions/auth.actions';
import Nav from '../../components/nav.components';
import Footer from '../../components/footer.components';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      username : '',
      password : '',
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let registerCreds = {
      username : this.state.username,
      password : this.state.password
    };

    this.props.registerUser(registerCreds);
    this.setState(
    {
      username : '',
      password : ''
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

  render() {
    if(localStorage.getItem('registered')) {
      return <Redirect to="/login"/>
    }
    
    return(
      <div id="register-container">
        <Nav />
        <h2>Register</h2>
        <div className="register-form">
          <form 
            className="inner-form-container" 
            onSubmit={this.handleSubmit.bind(this)}>

          <div>
            username
          </div>
          <div>
            <input 
              defaultValue={this.state.username} 
              onChange={this.handleUsernameChange}
              placeholder="username" 
              type="text" />
          </div>
          <div>
            password
          </div>
          <div>
          <input 
            defaultValue={this.state.password} 
            onChange={this.handlePasswordChange}
            placeholder="password" 
            type="password" />
          </div>
          
          <input 
            className="register-btn" 
            type="submit" 
            value="Register" />

          </form>
        </div>
        
        <Footer />
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
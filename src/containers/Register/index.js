import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { registerUser } from '../../actions/auth.actions';
import Nav from '../../components/nav.components';
import Footer from '../../components/footer.components';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username : '',
      password : '',
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

//-------------------------------------
//NEED TO COMPLETE CODE TO VERIFY IF USERNAME ALREADY EXISTS IN THE DATABASE

  // verifyUsername(newUsername) {
  //   return newUsername.some(user => {
  //     return user.username === newUsername;
  //   });
  // }
//-------------------------------------

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
    if(localStorage.loggegIn) {
      return <Redirect to="/login"/>
    }
    return(
      <div id="register-container">
        <Nav />
        <h2>Register</h2>
        <div>
          <center>
            as new User
          </center>
        </div>
        <div className="register-form">
          <form className="inner-form-container" onSubmit={this.handleSubmit.bind(this)}>

          username
          <div>
          <input type="text" placeholder="username" defaultValue={this.state.username} onChange={this.handleUsernameChange}/>
          </div>
          password
          <div>
          <input type="password" placeholder="password" defaultValue={this.state.password} onChange={this.handlePasswordChange}/>
          </div>
          <input className="register-btn" type="submit" value="Register"/>

          </form>
        </div>
        
        <Footer />
      </div>
    );
  }
}

// maps store dispatch to local props
const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (registerCreds) => {
      dispatch(registerUser(registerCreds));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Register);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { loginUser } from '../../actions/auth.actions';
import { loadUsers } from '../../actions/users.actions';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      username : '',
      password : '',
      redirect : false // set initial state to false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(evt) {
    //on success do this:
    evt.preventDefault();
    let loginCreds ={
      username : this.state.username,
      password : this.state.password
    }
    console.log("loginCreds", loginCreds);

    this.setState(
    {
      username : '',
      password : '',
      redirect : true
    });

  }.bind(this))

  render(){
    if (this.state.redirect) {
      return <Redirect to="/"/>
    }
    return(
      <div>
        <form onSubmit={this.handleSubmit}>

          <div>
          <input type="text" placeholder="username" defaultValue={this.state.username} />
          </div>

          <div>
          <input type="text" placeholder]"password" defaultValue={this.state.password} />
          </div>

          <button
            type="submit"
            className="login-button"
            onClick={this.handleSubmit}>Login
          </button>

        </form>
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
    },

    loadUsers: () => {
      dispatch(loadUsers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
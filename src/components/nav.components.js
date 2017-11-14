import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  if(localStorage.username){
    return (
      <div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to={`/users/${localStorage.userId}`}>{localStorage.username}</Link>
          <Link to="/logout">Logout</Link>
        </div>

        <div className="user-side-bar">
          <Link to="javascript:void(0)" className="close-btn" onClick="closeNav()">&times;</Link>
          <Link to="/">Home</Link>
          <Link to="/messages">Messages</Link>
          <Link to="/settings">Settings</Link>
        </div>
        <span onClick="openNav()">open</span>

      </div>
    )
  }else{
    return (
      <div className="unauth-nav-links">
        <Link to="/">Home</Link>
        <Link to="/register">Sign Up</Link>
        <Link to="/login">Login</Link>
      </div>
    )
  }
}

export default Nav;
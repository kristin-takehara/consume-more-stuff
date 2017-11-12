import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/logout">Logout</Link>
      <Link to={`/users/${localStorage.userId}`}>{localStorage.username}</Link>
    </div>
  );
}

export default Nav;
import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
  constructor() {
    super();

    this.state = {
      showNav : false
    }
  }
   toggleNav() {
    this.setState({
      showNav : !this.state.showNav
    })

   }


    render() {
    if(localStorage.username) {
      return (
        <div className="user-side-bar">
          <Link to="javascript:void(0)" className="close-btn" onClick={this.showNav}>&times;</Link>
          <Link to="/">Home</Link>
          <Link to="/messages">Messages</Link>
          <Link to="/settings">Settings</Link>

          <span style="font-size:30px;cursor:pointer" onClick={this.showNav}>&#9776;</span>

        </div>
      )
    }else{
      return null;
    }
  }
}

export default SideBar;

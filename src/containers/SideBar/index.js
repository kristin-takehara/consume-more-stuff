import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

class SideBar extends Component {
  constructor() {
    super();

    this.state = {
      showNav : false
    };
  }

  toggleNav(evt) {
    evt.preventDefault();
    this.setState({
      showNav : !this.state.showNav
    });
  }

  render() {
    return(
      <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }

}


export default SideBar;

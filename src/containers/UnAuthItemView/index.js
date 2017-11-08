import React, { Component } from 'react';
import ItemList from '../../components/itemlist.components';

class UnAuthItem extends Component {
  constructor(props){
    super(props);
    this.state = { items: ''};
  }

// if(!isLoggedin){}
  render(){
    return (
      <div className="items-main">
        <h5>To List Your Own Items, Make An Account Or Login!</h5>
        {/*make a button that goes to register / login*/}
        <div className="register-login"> 
          <button id="register"> Register an Account </button>
          <button id="login"> Click Here to Login </button>
       </div>
      </div>
    )
  }
}

export default UnAuthItem;
import React, { Component } from 'react';
import ItemList from '../../components/itemlist.components';

class UnAuthItem extends Component {
  constructor(props){
    super(props);

    this.state = { items: ''};
  }

  render(){
    return (
      <div className="items-main">
        <h3>Listing Items</h3>
          <h5>To List Your Own Items, Make An Account Or Login!</h5>
        {/*make a button that goes to register */}
        <div className="register"> 
        <button> Register an Account </button>
        <button> Click Here to Login </button>
        </div>
      </div>
    );
  }
}

export default UnAuthItem;
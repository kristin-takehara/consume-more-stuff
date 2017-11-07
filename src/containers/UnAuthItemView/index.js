import React, {Component} from 'react';


class UnAuthItem extends Component {
  constructor(props){
    super(props);

    this.state = { items: ''};
  }

  render(){
    return (
      <div className="items">
        smoke test
      </div>
    );
  }
}

export default UnAuthItem;
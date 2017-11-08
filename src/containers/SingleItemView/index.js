import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from '../../components/Item';


class SingleItemView extends Component {
  constructor(){
    super();

    this.state = this.props.items;

  }
console.log(this.props.items);

  render(){
    return(
      <div className="single-item-view">

      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    items: state.itemsList
  }
}

const ConnectedSingleItemView = connect(
  mapStateToProps
)(SingleItemView);

export default ConnectedSingleItemView;
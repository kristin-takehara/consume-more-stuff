import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadSingleItem } from '../../actions/items.actions';

import Item from '../../components/item.components';

class SingleItemView extends Component {

  componentDidMount(){
    let id = this.props.match.params.id;
    this.props.loadSingleItem(parseInt(id, 10));
}

  render(){

    return(
      <div className="single-item-view">
        <h3>RENDERiNG</h3>

        {<h3>
          <Item
            singleItem={ this.props.singleItem }  /></h3>
        }
      </div>
    )
  }
}

// sets store state on local props
const mapStateToProps = state => {

  return {
    singleItem : state.singleItem
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleItem: (id) => {
      dispatch(loadSingleItem(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleItemView);

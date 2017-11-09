import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadSingleItem } from '../../actions/items.actions';

class SingleItemView extends Component {
  constructor(props){
    super(props);
    this.state = {
      item: {}
    };
  }

  componentDidMount(){
    let id = this.props.match.params.id;
    this.props.loadSingleItem(parseInt(id, 0));
}

  render(){
    console.log(this.state, "STATE");
    return(
      <div className="single-item-view">

          <div>
          RENDERiNG
          { this.state.item[0] }
          </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    item: { TEST : state.singleItem }
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


          // <Item
          //   name={item.name}
          //   description={item.description}
          //   manufacturer={item.manufacturer}
          //   modelname={item.modelname}
          //   price={item.price}
          //   category_id={item.category_id}
          //   condition_id={item.condition_id}
          //   is_sold={item.is_sold}
          //   user_id={item.user_id} />

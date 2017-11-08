import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from '../../components/item.components';


class SingleItemView extends Component {
  constructor(props){
    super();

    this.state = {
      // id: this.props.id
    }
  }

  render(){
    console.log(this.props.items);
    console.log(this.props.id);
    return(
      <div className="single-item-view">
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    items: state.itemList
  }
}

export default connect(
  mapStateToProps
)(SingleItemView);

        // {
        //   items.map((props, idx) => {
        //     return(
        //       <Item
        //         id={props.id}
        //         name={props.name}
        //         description={props.description}
        //         manufacturer={props.manufacturer}
        //         modelname={props.modelname}
        //         price={props.price}
        //         category_id={props.category_id}
        //         condition_id={props.condition_id}
        //         is_sold={props.is_sold}
        //         user_id={props.user_id}
        //         />
        //     );
        //   })
        // }

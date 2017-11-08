import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemList from '../../components/itemlist.components';
import { loadSingleItem } from '../../actions/items.actions';

class SingleItemView extends Component {
  constructor(props){
    super();

    this.state = {
      item:[]
    }
  }

  componentDidMount(){
    let id = parseInt(this.props.match.params.id);
    console.log(id, "id");
    this.props.loadSingleItem(id)
    .then(item => {
      console.log(item, "item mount");
      this.setState({
        item: item
      })
    })
  }

  render(){
    console.log('match', this.props.match);
    console.log('state', this.state);
    console.log('props', this.props);
    return(
      <div className="single-item-view">{
      this.props.items.find(item => {
        console.log('Item', item);
        if (item.id === parseInt(this.props.match)) {
        return(
          <div>{ this.state.item.name }
          </div>
        )
        }
      })
    }
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  return {
    items: state.itemList
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

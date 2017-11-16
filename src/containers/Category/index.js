import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadCategories } from '../../actions/categories.actions';
import { loadItems } from '../../actions/items.actions';
import ItemList from '../../components/itemlist.components';
import CategoryItemsList from '../../components/category.components';

class Category extends Component {
  componentDidMount() {


      let id = this.props.match.params.id;

      this.props.loadCategories(parseInt(id));

      this.props.loadItems();

  }

  render() {
    console.log(this.props.match);
    if(this.props.match === this.props.items.id) {
      return(
        <div id="category-items-view-container">
          hello?
        <div className="category-header">
          { CategoryItemsList.categoryName }
          </div>
          {
            this.props.categories
            .map((category, idx) => {
              return(
              <ItemList
                items={this.props.items}
                categoryId={category.id}
                categoryName={this.props.params}
                key={idx} />
              )
            })
          }


        </div>
      )
    } else {
      return (
        <div>
        page not found
        </div>
      );
    }
  }

}

const mapStateToProps = state => {
  return {
    categories : state.categoryList,
    items : state.itemList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCategories: (id) => {
      dispatch(loadCategories(id));
    },
    loadItems: () => {
      dispatch(loadItems());
    }
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Category);
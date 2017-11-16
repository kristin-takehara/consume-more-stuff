import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadCategories } from '../../actions/categories.actions';
import { loadItems } from '../../actions/items.actions';
import ItemList from '../../components/itemlist.components';
import CategoryItemsList from '../../components/category.components';

class Category extends Component {
  componentDidMount() {
    if(this.props.match && this.props.match.params && this.props.match.params.id) {

      let id = this.props.match.params.id;

      this.props.loadCategories(parseInt(id));
    }
  }

  render() {
    if(this.props.match && this.props.match.params.id) {
      return(
        <div id="category-items-view-container">
          hello?
        <div className="category-header">
          { CategoryItemsList.categoryName }
          </div>

          <CategoryItemsList />

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
    categories : state.categories.id,
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
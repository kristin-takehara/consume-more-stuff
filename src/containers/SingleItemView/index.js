import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSingleItem, 
         makeItemEditable, 
         editItem, 
         setItemToSold,
         deleteItem 
       } from '../../actions/items.actions';
import { loadCategories } from '../../actions/categories.actions';
import { loadConditions } from '../../actions/conditions.actions';
import { loadStatuses } from '../../actions/statuses.actions';

import Nav from '../../components/nav.components';
import Item from '../../components/item.components';
import EditItem from '../../components/edit-item.components';
import Footer from '../../components/footer.components';

class SingleItemView extends Component {
  constructor() {
    super();
    this.state = {
      category_id: '',
      condition_id: '',
      description: '',
      dimensions: '',
      is_sold: '',
      manufacturer: '',
      modelname: '',
      name : '',
      notes : '',
      price: '',
      user_id: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  toggleEdit(item, edit) {
    this.props.makeItemEditable(item.id, edit);

    this.setState({
      category_id: item.category_id,
      condition_id: item.condition_id,
      description: item.description,
      dimensions: item.dimensions,
      is_sold: item.is_sold,
      manufacturer: item.manufacturer,
      model: item.modelname,
      name: item.name,
      notes: item.notes,
      price: item.price,
      user_id: item.user_id
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const itemId = this.props.singleItem.id;

    this.props.editItem({
      category_id: this.state.category_id,
      condition_id: this.state.condition_id,
      description: this.state.description,
      dimensions: this.state.dimensions,
      id : itemId,
      is_sold: this.state.is_sold,
      manufacturer: this.state.manufacturer,
      model: this.state.model,
      name : this.state.name,
      notes: this.state.notes,
      price: this.state.price,
      user_id: this.state.user_id
    });

    this.setState({
      category_id: '',
      condition_id: '',
      description: '',
      dimensions: '',
      is_sold: '',
      manufacturer: '',
      model: '',
      name : '',
      notes: '',
      price: '',
      user_id: ''
    });

    this.props.makeItemEditable(itemId);
  }

  handleChange(evt) {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name] : value
    });
  }

  handleSold(itemId) {    
    this.props.setItemToSold(itemId);
  }

  removeItem(itemId) {    
    this.props.deleteItem(itemId);
    this.props.makeItemEditable(itemId);
  }

  componentDidMount() {// if do show/hide in here for authentication can also include redirect link to login

   if(this.props.match && this.props.match.params && this.props.match.params.id){
     let id = this.props.match.params.id;
     this.props.loadSingleItem(parseInt(id, 10));

     this.props.loadCategories();
     this.props.loadConditions();
     this.props.loadStatuses();
   }
 }

 componentWillUnmount() {
   if(this.props.match && this.props.match.params && this.props.match.params.id){
     this.props.makeItemEditable(
       this.props.match.params.id,
       false
     );
   }
 }

  render() {
    if(localStorage.username) {
    return(
      <div id="single-item-view">
        <Nav />
        {
          !this.props.singleItem.isEditing &&
          <div>
            <Item
              singleItem={ this.props.singleItem }
              singleView={ true } />
            <button
              type="button"
              onClick={this.toggleEdit.bind(
                this, 
                this.props.singleItem, 
                true)} >
              EDIT
            </button>

            { this.props.singleItem.is_sold === 1
              ? <button
                onClick={this.handleSold.bind(
                  this,
                  this.props.singleItem.id)}
                type="button" >
                SOLD
              </button>
              : null              
            }

          </div>
        }
        {
          this.props.singleItem.isEditing &&
          <div>
            <EditItem
              singleItem={ this.props.singleItem }
              categories={ this.props.categories }
              conditions={ this.props.conditions }
              statuses={ this.props.statuses }
              handleChange={ this.handleChange }
              handleSold={ this.handleSold } />

            <button
              type="button"
              onClick={this.handleSubmit.bind(this)} >
              CONFIRM
            </button>

            <button
              type="button"
              onClick={this.toggleEdit.bind(
                this,
                this.props.singleItem, 
                false)} >
              UNDO
            </button>

            <button
              type="button"
              onClick={this.removeItem.bind(
                this,
                this.props.singleItem.id)} >
              DELETE
            </button>
          </div>
        }
      </div>
    );
  } else {
      return(
        <div>
          <Item singleItem={ this.props.singleItem }/>

          <Footer/>
        </div>
      )
    }
  }
}

// sets store state on local props
const mapStateToProps = state => {
  return {
    singleItem : state.singleItem,
    categories : state.categoryList,
    conditions : state.conditionList,
    statuses : state.statusList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleItem: (id) => {
      dispatch(loadSingleItem(id))
    },
    makeItemEditable: (id, edit) => {
      dispatch(makeItemEditable(id, edit))
    },
    editItem: (updatedItem) => {
      dispatch(editItem(updatedItem))
    },
    setItemToSold: (id) => {
      dispatch(setItemToSold(id))
    },
    deleteItem: (id) => {
      dispatch(deleteItem(id))
    },
    loadCategories: () => {
      dispatch(loadCategories());
    },
    loadConditions: () => {
      dispatch(loadConditions());
    },
    loadStatuses: () => {
      dispatch(loadStatuses());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleItemView);

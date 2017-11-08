import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadItems, addItem } from '../../actions/items.actions';
import { loadConditions } from '../../actions/conditions.actions';
import { loadUsers } from '../../actions/users.actions';
import { loadStatuses } from '../../actions/statuses.actions';
import { loadCategories } from '../../actions/categories.actions';

import Select from '../../components/select.components';

class NewItem extends Component {
  constructor(props) {
    super(props);

    this.state = {  // sets intial empty state object
      name: '',
      description: '',
      manufacturer: '',
      modelname: '',
      price: '',
      category_id: '',
      condition_id: '',
      is_sold: 2, // initial state defaults to NOT SOLD
      user_id: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
    this.handleManufacturerInput = this.handleManufacturerInput.bind(this);
    this.handleModelNameInput = this.handleModelNameInput.bind(this);
    this.handlePriceInput = this.handlePriceInput.bind(this);
    this.handleCategoryInput = this.handleCategoryInput.bind(this);
    this.handleConditionInput = this.handleConditionInput.bind(this);
    this.handleIsSoldInput = this.handleIsSoldInput.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    let newItem = {
      name: this.state.name,    // sets state when client inserts/changes the name
      description: this.state.description,
      manufacturer: this.state.manufacturer,
      modelname: this.state.modelname,
      price: this.state.price,
      category_id: this.state.category_id,
      condition_id: this.state.condition_id,
      is_sold: this.state.is_sold,
      user_id: this.state.user_id
    }
    this.props.addItem(newItem);
    console.log(newItem, "new item");
    this.setState({ // this will pass up to the newItem that will be submitted on SUBMIT
      name: '',
      description: '',
      manufacturer: '',
      modelname: '',
      price: '',
      category_id: '',  // these will be integers that DB will associate with category table
      condition_id: '',
      is_sold: 2, // defaults to NOT SOLD
      user_id: ''
    })
  }

  handleNameInput(evt) {
    this.setState({             // setting the state of the name to be the value input from below
      name: (evt.target.value)
    });
  }

  handleDescriptionInput(evt) {
    this.setState({
      description: (evt.target.value)
    })
  }

  handleManufacturerInput(evt) {
    this.setState({
      manufacturer: (evt.target.value)
    });
  }

  handleModelNameInput(evt) {
    this.setState({
      modelname: (evt.target.value)
    })
  }

  handlePriceInput(evt) {
    this.setState({
      price: (evt.target.value)
    })
  }
  handleCategoryInput(evt) {
    this.setState({
      category_id: parseInt(evt.target.value)
    })
  }
  handleConditionInput(evt) {
    this.setState({
      condition_id: parseInt(evt.target.value)
    })
  }
  handleIsSoldInput(evt) {
    this.setState({
      is_sold: parseInt(evt.target.value)
    })
  }
  handleUserInput(evt) {
    this.setState({
      user_id: parseInt(evt.target.value)
    })
  }

  render() {
    return (
      <div className="new-item-form">
        <form onSubmit={this.handleSubmit}>
          <Select
          list={this.props.categories}
          label="Category"
          type="category"
          handler={this.handleCreatorInput.bind(this)}/>

          <Select
          list={this.props.priorities}
          label="Priority Level:  "
          type="kind"
          handler={this.handlePriorityInput.bind(this)}/>

          <div className="input-form">
            <input value={this.state.name} type="text" placeholder="item name" onChange={this.handleTitleInput}/>
          </div>
          <input type="submit" value="submit card"/>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    items: state.itemList,
    users: state.userList,
    categories: state.categoryList,     // setting state
    conditions: state.conditionList,
    statuses: state.statusList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => {
      dispatch(addItem(item))
    },
    loadPriorities: (priorities) => {
      dispatch(loadPriorities(priorities));
    },
    loadConditions: (conditions) => {
      dispatch(loadConditions(conditions));
    },
    loadPriorities: (statuses) => {
      dispatch(loadStatuses(statuses));
    },
    loadUsers: (users) => {
      dispatch(loadUsers(users));
    }
  }
}

const ConnectedNewItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewItem)

export default ConnectedNewItem;


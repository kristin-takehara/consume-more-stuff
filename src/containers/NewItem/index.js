import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions/items.actions';
import Select from '../../components/select.components';

class NewItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userPhoto: '',
      name: '',
      description: '',
      manufacturer: '',
      modelname: '',
      price: '',
      category_id: 1,
      condition_id: 1,
      is_sold: 2,
      user_id: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
  }

  handleChangeImage(event){
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imageUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  handleSubmit(event){
    event.preventDefault();

    let formData = new FormData();

    formData.append('userPhoto', this.state.file);
    formData.append('name', this.state.name);
    formData.append('description', this.state.description);
    formData.append('manufacturer', this.state.manufacturer);
    formData.append('modelname', this.state.modelname);
    formData.append('price', this.state.price);
    formData.append('category_id', this.state.category_id);
    formData.append('condition_id', this.state.condition_id);
    formData.append('is_sold', this.state.is_sold);
    formData.append('user_id', this.state.user_id);

    this.props.addItem(formData);

    this.setState({
     // this will pass up to the newItem that will be submitted on SUBMIT
      userPhoto: '',
      name: '',
      description: '',
      manufacturer: '',
      modelname: '',
      price: '',
      category_id: 1,
      condition_id: 1,
      is_sold: 2,
      user_id: 1
    });
  }

  handleChange(evt) {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name] : value
    });
  }

  render() {
    if(localStorage.username !== undefined){
    return (
      <div id="new-item-form">
        <form onSubmit={this.handleSubmit}>
  
          <Select
          list={this.props.categories}
          name="category_id"
          label="Category: "
          type="category"
          handler={this.handleChange}
          defaultValue={this.state.category_id} />

          <Select
          list={this.props.conditions}
          name="condition_id"
          label="Condition: "
          type="condition"
          handler={this.handleChange}
          defaultValue={this.state.condition_id} />

          <Select
          list={this.props.users}
          name="user_id"
          label="Username:  "
          type="username"
          handler={this.handleChange}
          defaultValue={this.state.user_id} />

          <div className="name-form">
            <input 
              name="name" 
              value={this.state.item} 
              type="text" 
              placeholder="item name" 
              onChange={this.handleChange}/>
          </div>

          <div className="description-form">
            <textarea 
              name="description" 
              value={this.state.description} 
              type="text"
              placeholder="description" 
              onChange={this.handleChange} cols="30" rows="10" />
          </div>

          <div className="price-form">
            <input name="price" value={this.state.price} type="number" min="0" max="100000" placeholder="price" onChange={this.handleChange}/>
          </div>

          <div>
            <input 
              name="userPhoto"
              type="file" 
              accept="image/x-png,image/gif,image/jpeg" 
              onChange={this.handleChangeImage}  
            />
          </div>
          
          <input type="submit" value="submit card" />
        </form>
      </div>
     );
    }
    else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    file: state.file,
    items : state.itemList,
    users : state.userList,
    categories : state.categoryList,     // setting state
    conditions : state.conditionList,
    statuses : state.statusList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => {
      dispatch(addItem(item))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewItem)

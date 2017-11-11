import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSingleUser } from '../../actions/users.actions';
import { loadItems } from '../../actions/items.actions';



class User extends Component {
  constructor() {
    super();
  }

  componentDidMount() {// if do show/hide in here for authentication can also include redirect link to login

     if(this.props.match && this.props.match.params && this.props.match.params.id){
       let id = this.props.match.params.id;
       this.props.loadSingleUser(parseInt(id));
       this.props.loadItems();
     }
  }

  render() {
    if( localStorage.id === this.props.match.params.id ){
     return(
      <div id="single-user-view">

      </div>
      )
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleUser: (id) => {
      dispatch(loadSingleUser(id));
    },
    loadItems: () => {
      dispatch(loadItems());
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(User);
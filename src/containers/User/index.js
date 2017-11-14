import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSingleUser } from '../../actions/users.actions';
import { loadItems } from '../../actions/items.actions';

import UserItem from '../../components/user.components';
import Nav from '../../components/nav.components';

class User extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
  // if do show/hide in here for authentication can also include redirect link to login
    if(this.props.match && this.props.match.params && this.props.match.params.id){
      let id = this.props.match.params.id;
      this.props.loadSingleUser(parseInt(id, 10))
    }
  }

  render() {
    if( this.props.match && localStorage.userId === this.props.match.params.id ){
      return(

        <div className="user-view">
          <Nav />
          <UserItem singleUser={this.props.singleUser}/>
        </div>
      );
    } else {
      return (
        <div>
        it didn't work
        </div>
      );
    }
  }
}

// sets store state on local props
const mapStateToProps = state => {
  return {
    singleUser : state.singleUserList,
    items : state.itemList,
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
  mapStateToProps,
  mapDispatchToProps
)(User);
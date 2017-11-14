import { LOAD_SINGLE_USER } from '../actions/users.actions';

const initialState = { Items : [] };

const singleUserList = (state = initialState, action) => {
  switch (action.type){
    case LOAD_SINGLE_USER:
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
};

export default singleUserList;
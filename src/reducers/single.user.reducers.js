import { LOAD_SINGLE_USER } from '../actions/users.actions';
import { REGISTER_USER,
         LOGIN_USER,
         LOGOUT_USER
       } from '../actions/auth.actions';

const initialState = { Items : [] };

const singleUserList = (state = initialState, action) => {
  switch (action.type){
    case LOAD_SINGLE_USER:
      return Object.assign({}, state, action.user);

    case REGISTER_USER:
      return Object.assign({}, state, initialState);

    case LOGIN_USER:
      const userDetails = action.userDetails;

      localStorage.setItem('loggedin', true);
      localStorage.setItem('userId', userDetails.id);
      localStorage.setItem('username', userDetails.username);
      localStorage.setItem('role', userDetails.role);

      return Object.assign({}, state, action.userDetails);

    case LOGOUT_USER:
      localStorage.clear();

      return Object.assign({}, state, initialState);
     
    default:
      return state;
  }
};

export default singleUserList;
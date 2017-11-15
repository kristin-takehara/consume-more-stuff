import { LOAD_SINGLE_USER } from '../actions/users.actions';
import { REGISTER_USER,
         LOGIN_USER,
         LOGOUT_USER
       } from '../actions/auth.actions';

const initialState = { Items : [] };

const singleUser = (state = initialState, action) => {
  switch (action.type){
    case LOAD_SINGLE_USER:
      return Object.assign({}, state, action.user);

    case REGISTER_USER:
      return Object.assign({}, state, initialState);

    case LOGIN_USER:
      const userDetails = action.userDetails;
      
      if (action.userDetails.success) {
        localStorage.setItem('loggedIn', true);
        localStorage.setItem('userId', userDetails.id);
        localStorage.setItem('username', userDetails.username);
        localStorage.setItem('role', userDetails.role);

        return Object.assign({}, state, action.userDetails);

      } else {
        return Object.assign({}, state, initialState);
      }

    case LOGOUT_USER:
      localStorage.clear();

      return Object.assign({}, state, initialState);
     
    default:
      return state;
  }
};

export default singleUser;
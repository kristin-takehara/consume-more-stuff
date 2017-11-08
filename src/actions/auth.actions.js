import Axios from 'axios';

const register = '/api/register';
const login = '/api/login';
const logout = '/api/logout';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const registerUser = (registerCreds) => {
  return (dispatch) => {
    return Axios.post(register, registerCreds)
    .then((response) => {
      if (response.data.success) {
        dispatch({
          type: REGISTER_USER,
          success: response.data.success
        });
      }
    });
  };
};

export const loginUser = (userCreds) => {
  return (dispatch) => {
    return Axios.post(login, userCreds)
    .then((response) => {
      if (response.data.success) {
        dispatch({
          type: LOGIN_USER,
          userDetails: response.data
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    return Axios.get(logout)
    .then((response) => {
      if (response.data.success) {
        dispatch({
          type: LOGOUT_USER,
          success: response.data.success
        });
      }
    });
  };
};

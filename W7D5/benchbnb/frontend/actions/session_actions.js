import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export function login(user){
  return (dispatch) => {
    debugger
    return APIUtil.login(user)
      .then(user => dispatch(receiveCurrentUser(user)),
            err => dispatch(receiveErrors(err.responseJSON)));
  };
}

export function logout(){
  return (dispatch) => {
    return APIUtil.logout()
      .then(user => dipatch(receiveCurrentUser(null)),
            err => dispatch(receiveErrors(err.responseJSON)));
  };
}


export function signup(user){
  return (dispatch) => {
    return APIUtil.signup(user)
      .then(user => dispatch(receiveCurrentUser(user)),
            err => dispatch(receiveErrors(err.responseJSON)));
  };
}


export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors,
  };
};

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const _defaultState = {
  currentUser: null,
  errors: {}
};

const SessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, _defaultState, { currentUser: action.current_user });
    case RECEIVE_ERRORS:
      return Object.assign({}, _defaultState, { errors: action.errors });
    default:
      return state;
  }
};


export default SessionReducer;

import {
  GET_USER_PENDING, GET_USER_SUCCESS,
  CREATE_USER_PENDING, CREATE_USER_SUCCESS
 } from '../actions/users';

export default (state=[], action) => {
  switch(action.type){
    case GET_USER_PENDING:
      return state;
    case GET_USER_SUCCESS:
      return [...action.payload.data];
    case CREATE_USER_PENDING:
        return state;
    case CREATE_USER_SUCCESS:
        return [...action.payload.data];
    default:
      return state;
  }
}

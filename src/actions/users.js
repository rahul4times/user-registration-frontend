import axios from 'axios';

export const GET_USER_PENDING = 'GET_USER_PENDING';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const CREATE_USER_PENDING = 'CREATE_USER_PENDING';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';

export const getUsers = () => {
  return async(dispatch) => {
    dispatch({type: GET_USER_PENDING});
    let users = await axios.get('http://localhost:8000/');
    dispatch({
      type: GET_USER_SUCCESS,
      payload: users
    });
  }
}

export const createNewUser = (data) => {
  return async(dispatch) => {
    dispatch({type: CREATE_USER_PENDING});
    let newUser = await axios.post('http://localhost:8000/new', data);
    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: newUser
    });
  }
}

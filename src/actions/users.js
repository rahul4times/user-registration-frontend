import axios from 'axios';

export const GET_USER_PENDING = 'GET_USER_PENDING';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

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

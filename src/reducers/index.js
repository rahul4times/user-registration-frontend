import Users from './users';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
const rootReducers = combineReducers ({
  users: Users,
  form: formReducer
});

export default rootReducers;

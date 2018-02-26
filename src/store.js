import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducers from './reducers';


export default () => {
  return createStore(
    rootReducers, applyMiddleware(logger, thunkMiddleware)
  );
}

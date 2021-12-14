import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import apiReducer from '../Reducers/homeApi';
import apiUserReducer from '../Reducers/userApi';

const appReducers = combineReducers({
  apiReducer,
  apiUserReducer
});

const rootReducer = (state, action) => appReducers(state, action);

const logger = createLogger();

let middleware = [];
middleware = [...middleware, thunk, logger];

export default createStore(
  rootReducer,
  compose(applyMiddleware(...middleware))
);
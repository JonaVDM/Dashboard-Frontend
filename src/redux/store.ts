import { createStore, applyMiddleware, compose } from 'redux';
import root from './reducers';
import thunk from 'redux-thunk';

let win: any = window;

const composeEnhancer = win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* eslint-disable no-underscore-dangle */
const store = createStore(
  root,
  composeEnhancer(
    applyMiddleware(thunk)
  )
);
/* eslint-enable */

export default store;

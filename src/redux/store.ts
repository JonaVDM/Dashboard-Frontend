import { createStore } from 'redux';
import root from './reducers';

let win: any = window;

/* eslint-disable no-underscore-dangle */
const store = createStore(
  root,
  win.__REDUX_DEVTOOLS_EXTENSION__ && win.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;

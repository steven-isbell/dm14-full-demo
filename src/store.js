import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import userReducer from './ducks/userReducer';
import productReducer from './ducks/productReducer';
import cartReducer from './ducks/cartReducer';

const combinedReducers = combineReducers({
  user: userReducer,
  products: productReducer,
  cart: cartReducer
});

const store = createStore(
  combinedReducers,
  applyMiddleware(promiseMiddleware())
);

export default store;

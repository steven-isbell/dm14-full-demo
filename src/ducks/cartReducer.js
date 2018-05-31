import axios from 'axios';

const GET_CART = 'GET_CART';
const ADD_TO_CART = 'ADD_TO_CART';

export function getCart() {
  return {
    type: GET_CART,
    payload: axios.get('/api/cart')
  };
}

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    payload: axios.post('/api/cart', item)
  };
}

const initalState = {
  cart: [],
  totalQuantity: 0
};

export default function cartReducer(state = initalState, action) {
  switch (action.type) {
    case `${ADD_TO_CART}_FULFILLED`:
    case `${GET_CART}_FULFILLED`:
      const quantity = action.payload.data.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );
      return {
        ...state,
        cart: action.payload.data,
        totalQuantity: quantity
      };
    default:
      return state;
  }
}

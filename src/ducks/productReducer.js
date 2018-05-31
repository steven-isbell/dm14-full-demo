import axios from 'axios';

const GET_PRODUCTS = 'GET_PRODUCTS';

export function getProducts() {
  return {
    type: GET_PRODUCTS,
    payload: axios.get('/api/product')
  };
}

const initialState = {
  products: [],
  isLoading: false
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_PRODUCTS}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_PRODUCTS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        products: action.payload.data
      };
    default:
      return state;
  }
}

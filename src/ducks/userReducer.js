import axios from 'axios';
// CONSTANTS
const GET_USER = 'GET_USER';

// ACTION CREATORS
export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get('/api/me')
  };
}

// INITIAL STATE

const initialState = {
  user: {},
  isAuthed: false
};

// REDUCER

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data,
        isAuthed: true
      };
    case `${GET_USER}_REJECTED`:
      return {
        ...state,
        isAuthed: false
      };
    default:
      return state;
  }
}

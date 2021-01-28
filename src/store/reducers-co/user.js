import { UPDATE_USER, SIGN_OUT } from "../types/types";

const initialState = {
  user: null,
  loggedIn: false
};

const UserReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
        loggedIn: true
      }
    case SIGN_OUT:
      return {
        ...state,
        user: null,
        loggedIn: false
      }
    default:
      return state;
  }
}

export default UserReducer;
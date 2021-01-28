import {LOGIN_SUCCESS, LOGIN_FAILED } from "../types/types";

const initialState = {
  logInSuccess: false,
  logInFailed: false,
  logInPayload: null,
  logInError: null
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        logInSuccess: true,
        logInPayload: action.payload
      };
    case LOGIN_FAILED:
      return {
        ...state,
        logInFailed: true,
        logInError: action.payload
      };
    default:
      return state;
  }
};

export default AuthReducer;

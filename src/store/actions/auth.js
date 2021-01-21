import { Auth } from "aws-amplify";
import { LOGIN_SUCCESS, LOGIN_FAILED, SIGNUP_FAILED } from "../types/types";

export const Login = (email, password) => {
  return async dispatch => {
    try {
      const user = await Auth.signIn(email, password);
      const userSession = user.signInUserSession;
      // localStorage.setItem("token", userSession.idToken.jwtToken);
      dispatch({ type: LOGIN_SUCCESS, payload: userSession.idToken.jwtToken });
    } catch (err) {
      dispatch({ type: LOGIN_FAILED, payload: err });
    }
  };
};

export const SignUp = (email, password) => {
  return async dispatch => {
    try {
      const user = await Auth.signUp(email, password);
      const userSession = user.signInUserSession;
      console.log(user, 'hjjhvtfvcfcr')
      dispatch({ type: LOGIN_SUCCESS, payload: userSession.idToken.jwtToken });
    } catch (err) {
      dispatch({ type: SIGNUP_FAILED, payload: err });
    }
  };
};

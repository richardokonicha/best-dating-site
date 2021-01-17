import { Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";

import { LOGIN_SUCCESS, LOGIN_FAILED, SIGNUP_FAILED, SIGNUP_SUCCESS, LOG_OUT } from "../types/types";
Auth.configure(awsconfig);

export const Login = (email, password) => {
  return async dispatch => {
    try {
      const user = await Auth.signIn(email, password);
      const userSession = user.signInUserSession;
      //   localStorage.setItem("token", userSession.idToken.jwtToken);
      dispatch({ type: LOGIN_SUCCESS, payload: userSession.idToken.jwtToken });
    } catch (err) {
      dispatch({ type: LOGIN_FAILED, payload: err });
    }
  };
};

export const Logout = () => {
  return async dispatch => {
    Auth.signOut()
      .then(data => {
        dispatch({ type: LOG_OUT });
      })
      .catch(err => console.log(err));
  };
};

export const SignUp = (email, password) => {
  return async dispatch => {
    try {
      const user = await Auth.signUp(email, password);
      const userSession = user.signInUserSession;
      //   localStorage.setItem("token", userSession.idToken.jwtToken);
      console.log(user, 'hjjhvtfvcfcr')
      dispatch({ type: LOGIN_SUCCESS, payload: userSession.idToken.jwtToken });

      // dispatch({ type: SIGNUP_SUCCESS, payload: userSession.idToken.jwtToken });
    } catch (err) {
      dispatch({ type: SIGNUP_FAILED, payload: err });
    }
  };
};
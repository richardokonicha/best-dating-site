import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify'


export function signup(email, password) {
  return Auth.signUp(email, password);
}

export function signin(email, password) {
  return Auth.signIn(email, password);
}

export function signout() {
  return Auth.signOut();
}
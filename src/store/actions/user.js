// import { Auth } from "aws-amplify";
// import { UPDATE_USER, SIGN_OUT } from "../types/types";

// export const updateUser = () => {
//     return async dispatch => {
//       try {
//         const user = await Auth.currentAuthenticatedUser()
//         dispatch({ type: UPDATE_USER, payload: user });
//       } catch (error) {
//           console.log('error updating out: ', error);
//       }
//     };
//   };

// export const signOut = () => {
//   return async dispatch => {
//     try {
//       await Auth.signOut();
//       dispatch({ type: SIGN_OUT });
//     } catch (error) {
//         console.log('error signing out: ', error);
//     }
//   };
// };

export const formSubmitAction = (payload) => {
  return dispatch => {
    dispatch({ type: "UPDATE_USER"})
  }
}


export function updateUser(result){
  return {
      type: "UPDATE USER",
      payload: result,
      message: "Update Action Success!"
  }
}

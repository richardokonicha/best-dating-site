const INITIAL_STATE = {
  users: []
  // userId: null,
  // email: "",
  // roles: null,
  // name: "",
  // location: "",
  // about: ""
};

// const applySetUsers = (state, action) => ({
//   ...state,
//   users: action.users,
// });

const applySetUser = (state, action) => ({
  ...state,
  users: {
    ...state.users,
    [action.uid]: action.user,
  },
});

const applySetUsers = (state, action) => {
  return (
    {
      ...state,
      users: action.payload,
    }
  )
}

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'USERS_SET': {
      return applySetUsers(state, action);
    }
    case 'USER_SET': {
      return applySetUser(state, action);
    }
    case "UPDATE USER": {
      return applySetUsers(state, action);

    }
    default:
      return state;
  }
}

export default userReducer;

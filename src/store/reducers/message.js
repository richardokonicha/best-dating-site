const INITIAL_STATE = {
  messages: [],
  limit: 5,
  chat: null
};

const applySetMessages = (state, action) => {
  return (
    {
      ...state,
      messages: action.payload,
    }
  )
}


const applySetChat = (state, action) => {
  console.log("laljfkdjslfjal", action)
  return (
    {
      ...state,
      chat: action.payload,
    }
  )
}

const applySetMessagesLimit = (state, action) => ({
  ...state,
  limit: action.limit,
});

function messageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'MESSAGES_SET': {
      return applySetMessages(state, action);
    }
    case "CHAT_SET": {
      return applySetChat(state, action)
    }
    case 'MESSAGES_LIMIT_SET': {
      return applySetMessagesLimit(state, action);
    }
    default:
      return state;
  }
}

export default messageReducer;

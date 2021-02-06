const INITIAL_STATE = {
  messages: [],
  limit: 5,
  chat: [],
  reciever: {}
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
  return (
    {
      ...state,
      chat: action.payload,
    }
  )
}


const applySetReciever = (state, action) => {
  return (
    {
      ...state,
      reciever: action.payload,
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
    case "RECIEVER_SET": { 
      return applySetReciever(state, action)
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

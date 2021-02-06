


export function updateMessage(result){
    return {
        type: "MESSAGES_SET",
        payload: result,
        message: "Update Action Success!"
    }
  }


export function updateChat(result){
return {
    type: "CHAT_SET",
    payload: result,
    message: "Update Action Success!"
}
}

export function updateReciever(result){
    return {
        type: "RECIEVER_SET",
        payload: result,
        message: "Update Action Success!"
    }
    }
    

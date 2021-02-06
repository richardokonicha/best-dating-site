import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { compose } from "recompose"

import { withFirebase } from "../Firebase"
import MessageList from "./MessageList"

const Messages = (props) => {
  const { firebase, messages, onSetMessages } = props
  const [loading, setLoading] = useState(false)
  const [text, setText] = useState("")

  useEffect(() => {
    const unsubscribe = firebase
      .db.collection('messages')
      .onSnapshot(snapshot => {
        if (snapshot.size) {
          let myDataArray = []
          snapshot.forEach(doc =>
            myDataArray.push({ ...doc.data() })
          )
          onSetMessages(myDataArray)
          setLoading(false)
        } else {
          setLoading(false)
        }
      })
  return () => {
      unsubscribe()
    }
  }, [firebase, onSetMessages])

  const onChangeText = event => {
    setText(event.target.value)
  }

  const onCreateMessage = (event, authUser) => {
    event.preventDefault()
    props.firebase.messages().add({
      userId: authUser.uid,
      content: text,
      createdAt: firebase.serverValue.serverTimestamp(),
    })
    setText('')
    console.log("entered")
  }

  const onEditMessage = (message, text) => {
    const { uid, ...messageSnapshot } = message

    firebase.message(message.uid).set({
      ...messageSnapshot,
      text,
      editedAt: firebase.serverValue.TIMESTAMP,
    })
  }

  const onRemoveMessage = uid => {
    console.log(uid)
    console.log(messages)
    firebase.db.collection("messages").doc(uid).delete().then(function() {
      console.log("Document successfully deleted!", uid);
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });

  }

  const onNextPage = () => {
    props.onSetMessagesLimit(this.props.limit + 5)
  }

  return (
    <div>
      {!loading && messages && (
        <button type="button" onClick={onNextPage}>
          More
        </button>
      )}

      {loading && <div>Loading ...</div>}

      {messages && (
        <MessageList
          authUser={props.authUser}
          messages={messages}
          onEditMessage={onEditMessage}
          onRemoveMessage={onRemoveMessage}
        />
      )}

      {!messages && <div>There are no messages ...</div>}

      <form
        onSubmit={(event) => onCreateMessage(event, props.authUser)}
      >
        <input type="text" value={text} onChange={onChangeText} />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
  messages: Object.keys(state.messageState.messages || {}).map(
    key => ({
      ...state.messageState.messages[key],
      uid: key,
    }),
  ),
  limit: state.messageState.limit,
})

const mapDispatchToProps = dispatch => ({
  onSetMessages: messages =>
    dispatch({ type: 'MESSAGES_SET', messages }),
  onSetMessagesLimit: limit =>
    dispatch({ type: 'MESSAGES_LIMIT_SET', limit }),
})

export default compose(
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Messages)

import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { withFirebase } from "../../Firebase"
import { withAuthentication, withEmailVerification} from "../../Session"
import { compose} from "recompose"

const ConversationInput = (props) => {

    const [ error, setError ] = useState('')
    const [ content, setContent ] = useState('')
    const { authUser } = useSelector( state => state.sessionState)
    const { chat } = useSelector( state => state.messageState)
    console.log(chat)
    


    const handleSubmit = ( event ) => {
        event.preventDefault()
        props.firebase.messages().add({
            userId: authUser.uid,
            content: content,
            // recieverUid: reciever_uid,
            createdAt: props.firebase.serverValue.serverTimestamp(),
          })
        console.log( "cheers" )
        console.log(content)
        setContent("")
        console.log(content)

    }

    const onChangeText = (e) => {
        setContent(e.target.value)
    }
    return (
        <div className="row no-gutters">
            {/* <form onSubmit={handleSubmit}> */}
            <div className="col">
                <div>
                    <input onChange={onChangeText} type="text" className="form-control form-control-lg bg-light border-light" placeholder="Enter Message..." value={content}  />
                    {error ? (
                        <p className="text-danger">{error}</p>
                    ) : null}
                </div>
            </div>
            <div className="col-auto">
                <div className="chat-input-links ml-md-2">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                            <button type="button" className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect" data-toggle="tooltip" data-placement="top" title="Emoji">
                                <i className="ri-emotion-happy-line"></i>
                            </button>
                        </li>
                        <li className="list-inline-item">
                            <button type="button" className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect" data-toggle="tooltip" data-placement="top" title="Attached File">
                                <i className="ri-attachment-line"></i>
                            </button>
                        </li>
                        <li className="list-inline-item">
                            <button type="button" className="btn btn-primary font-size-16 btn-lg chat-send waves-effect waves-light"
                            onClick={handleSubmit}
                            >
                                <i className="ri-send-plane-2-fill"></i>
                            </button>
                        </li>
                    </ul>
                </div>

            </div>
            {/* </form> */}
        </div>
    )
}



export default compose(
    withAuthentication,
    withEmailVerification,
    withFirebase
)(ConversationInput)
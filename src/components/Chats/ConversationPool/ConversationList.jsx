import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"

const ConversationList = () => {
    // const [ chats, setChat ] = useState([])
    const [user, setUser] = useState({ uid: 5 })
    const messages  = useSelector(state => state.messageState)
    const { uid } = useSelector(state => state.sessionState.authUser)
    const chat = messages.messages

    return (
        <ul className="list-unstyled mb-0">
            {chat.map((chat, index) => {
                return (
                        <li key={index} className={uid === chat.uid ? "" : "right"}>
                            <div className="conversation-list">
                                <div className="user-chat-content">
                                    <div className="ctext-wrap">
                                        <div className="ctext-wrap-content">
                                            <p className="mb-0">
                                                {chat.content}
                                            </p>
                                            <p className="chat-time mb-0"><i className="ri-time-line align-middle"></i> <span className="align-middle">{chat.timestamp}</span></p>
                                        </div>
                                        <div className="dropdown align-self-start">
                                            <a className="dropdown-toggle" href="/chat" role="button" data-toggle="dropdown" aria-expanded="false">
                                                <i className="ri-more-2-fill"></i>
                                            </a>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="/chat">Copy <i className="ri-file-copy-line float-right text-muted"></i></a>
                                                <a className="dropdown-item" href="/chat">Save <i className="ri-save-line float-right text-muted"></i></a>
                                                <a className="dropdown-item" href="/chat">Forward <i className="ri-chat-forward-line float-right text-muted"></i></a>
                                                <a className="dropdown-item" href="/chat">Delete <i className="ri-delete-bin-line float-right text-muted"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="conversation-name">{chat.email}</div>
                                </div>
                            </div>
                            { false ? (
                            <li>
                                <div className="chat-day-title">
                                    <span className="title">Today</span>
                                </div>
                            </li>
                        ) : (null)
                        }
                        </li>
                       
                );
            })}
        </ul>

    )
}

export default ConversationList
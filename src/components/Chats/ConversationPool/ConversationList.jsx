import { useState } from "react";

const chats = [
    {
        uid: 5,
        content: "Good morning",
        timestamp: "4:30 pm",
        email: "John Doe"
    },
    {
        uid: 6,
        content: "Good morning, How are you? What about our next meeting ?",
        timestamp: "10:02 pm",
        email: "me"
    },
    {
        uid: 5,
        content: "Did a dog die",
        timestamp: "10:03 pm",
        email: "John Doe"
    },
    {
        uid: 6,
        content: "Yes it did lol",
        timestamp: "10:03 pm",
        email: "me"
    },
    {
        uid: 5,
        content: "Fuck, Ok lets meet by 4:00 pm",
        timestamp: "10:03 pm",
        email: "me"
    },
]

const ConversationList = () => {
    // const [ chats, setChat ] = useState([])
    const [user, setUser] = useState({ uid: 5 })


    return (
        <ul className="list-unstyled mb-0">
            {chats.map((chat, index) => {
                return (
                    <>
                        <li key={index} className={user.uid === chat.uid ? "" : "right"}>
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
                        </li>
                        { false ? (
                            <li>
                                <div className="chat-day-title">
                                    <span className="title">Today</span>
                                </div>
                            </li>
                        ) : (null)
                        }
                    </>
                );
            })}
        </ul>

    )
}

export default ConversationList
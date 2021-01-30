// import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { useState } from "react"
import SideMenu from './SideMenu';
import UsersTab from './UsersTab';
import MessageTab from './MessageTab';

const initialState = {
    user: 'auth().currentUser',
    chats: [],
    users: [],
    content: "",
    readError: null,
    writeError: null,
    loadingChats: false,
    error: ""
}


const Chat = () => {

    const [chatState, setChatState] = useState(initialState)
    const { user, chats, users, content, readError, writeError, loadingChats, error } = chatState

    return (


        <div className="layout-wrapper d-lg-flex">

        <SideMenu/>
        <UsersTab/>
        <MessageTab/>

        </div>

    )
}

export default Chat
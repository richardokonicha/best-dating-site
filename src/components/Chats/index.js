// import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { useState } from "react"
import SideMenu from './SideMenu';
import Panes from './Panes';
import ConversationPool from './ConversationPool/ConversationPool';
import { withAuthorization, withEmailVerification } from '../Session';
import { compose } from 'recompose';
import { Switch, Route, BrowserRouter as Router , Redirect} from "react-router-dom";


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

const userData = [
    { name: 'Richard Okonicha', profileImg: 'R'},
    { name: 'Mark Messer', profileImg: 'M'},
    { name: 'General', profileImg: 'G'}
]

const Chat = () => {

    const [chatState, setChatState] = useState(initialState)
    const { user, chats, users, content, readError, writeError, loadingChats, error } = chatState

    return (
        // <Router>


        <div className="layout-wrapper d-lg-flex">
        <SideMenu />
        <Panes userData={userData}/>
        <ConversationPool/>
        </div>
        // </Router>

    )
}


const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(Chat);


// export default Chat
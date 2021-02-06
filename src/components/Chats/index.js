// import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Navigator from './Navigator';
import Panes from './Panes';
import ConversationPool from './ConversationPool';
import { withAuthorization, withEmailVerification } from '../Session';
import { compose } from 'recompose';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {updateUser} from '../../store/actions/user';
import { updateMessage } from '../../store/actions/message'
import { withFirebase } from '../Firebase';

const panelList = [
    {
      name: "Patrick Hendricks",
      lastMessage: "Hey! there I'm available",
      unread: true,
      lastSeen: '05 min',
      label: 'P',
      typing: true,
      online: true
  
    },
    {
      name: "John Doe",
      lastMessage: "Hello sir the job is done.",
      unread: false,
      last: "02 hours",
      label: "J",
      typing: false,
      online: false
  
  
    },
    {
      name: "Alfred Inyang",
      lastMessage: "We have a review by 8:00pm",
      unread: true,
      last: "now",
      label: "A",
      typing: true,
      online: true
    }
  ]
  

const Chat = (props) => {

    const { firebase, messages, onSetUsers, onSetMessages } = props
    const [loading, setLoading] = useState(false)
    const [text, setText] = useState("")
    const authUser = useSelector(state => state.sessionState.authUser)

    const dispatch = useDispatch()



    // dispatch({ type: 'update Users' })
        
    useEffect(() => {
        const unsubscribe = firebase
        .db.collection('users')
        .onSnapshot(snapshot => {
            if (snapshot.size) {
            let myDataArray = []
            snapshot.forEach(doc =>
                myDataArray.push({ ...doc.data() })
            )
            let update = dispatch(updateUser(myDataArray))
            // console.log(update)
            setLoading(false)
            } else {
            // let update = dispatch(updateUser(panelList))
            // console.log(update)
            setLoading(false)
            }
        })
    return () => {
        unsubscribe()
        }
    }, [firebase, dispatch])

        
    useEffect(() => {
        const unsubscribe = firebase
        .db.collection('messages')
        // .where("userId", "==", authUser.uid)
        .orderBy('createdAt', "asc")
        .onSnapshot(snapshot => {
            if (snapshot.size) {
            let myDataArray = []
            snapshot.forEach(doc =>
                myDataArray.push({ ...doc.data() })
            )
            console.log(myDataArray, "data")
            dispatch(updateMessage(myDataArray))
            
            setLoading(false)
            } else {
            setLoading(false)
            }
        })
    return () => {
        unsubscribe()
        }
    }, [firebase, dispatch])
    
    const fetchProfiles = () => {
        console.log(props.firebase)
    }

    return (
        <div className="layout-wrapper d-lg-flex">
        <Navigator />
        <Panes/>
        <ConversationPool/>
        </div>

    )
}   

const condition = authUser => !!authUser;

export default compose(
    withFirebase,
    withEmailVerification,
    withAuthorization(condition),
)(Chat);



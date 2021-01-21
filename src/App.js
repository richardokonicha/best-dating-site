// import './App.css';
import React, { useEffect } from 'react'
import Routes from './router/Routes'
import { Hub } from 'aws-amplify'
import { useDispatch, useSelector } from "react-redux";
// import * as authAction from "./store/actions/auth";
import * as userAction from "./store/actions/user";

// import "bootstrap/dist/css/bootstrap.css";
import "../src/asset/style/app.css"
// import "../src/asset/style/appdark.css"
import "../src/asset/style/bootstrap.css"
import "../src/asset/style/coursole.css"
// import "../src/asset/style/bootstrapdark.css"
import "../src/asset/style/icon.css"

const App = () => {
  const dispatch = useDispatch()
  const { loggedIn } = useSelector(state => state.user)

  useEffect(()=>{
    async function checkUser(){
      try {
        // const user = await Auth.currentAuthenticatedUser()
        dispatch(userAction.updateUser());
      } catch (err){
        console.log('user failed: ', err)
      }
    }
  
    async function setAuthListener(){
      Hub.listen('auth', (data) => {
        switch (data.payload.event){
          case 'signIn':
            console.log('user signed in');
            dispatch(userAction.updateUser());
              break;
          case 'signUp':
             console.log('user signed up');
              break;
          case 'signOut':
            console.log('user signed out');
              break;
          case 'signIn_failure':
              console.log('user sign in failed');
              break;
          default:
            break;
        }
      })
    }
    checkUser()
    setAuthListener()
  },[dispatch])

  return(
    <div>
      <Routes auth={loggedIn}/>
    </div>
  )
}

export default App
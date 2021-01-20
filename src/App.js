import './App.css';
import React, { useEffect, useState } from 'react'
import Routes from './router/Routes'
import { Auth, Hub } from 'aws-amplify'
import { useDispatch, useSelector } from "react-redux";
import * as authAction from "./store/actions/auth";
import * as userAction from "./store/actions/user";

const App = () => {
  const dispatch = useDispatch()
  const { user, loggedIn } = useSelector(state => state.user)

  useEffect(()=>{
    checkUser()
    setAuthListener()
  },[])

  async function checkUser(){
    try {
      const user = await Auth.currentAuthenticatedUser()
      console.log('user: ', user)
      dispatch(userAction.updateUser());
    } catch (err){
      console.log('user failed: ', user)
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

  return(
    <div>
      <Routes auth={loggedIn}/>
    </div>
  )
}

export default App
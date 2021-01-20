// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
// import Routes from './router/Routes'
import { Auth, Hub } from 'aws-amplify'

const initialFormState = {
  username: '',
  password: '', 
  email: '',
  authcode: '',
  formType: 'signIn'
}

const App = () => {
  const [ formState, updateFormState ] = useState(initialFormState)
  const [user, updateUser] = useState(null)
  useEffect(()=>{
    checkUser()
    setAuthListener()
  },[])

  async function setAuthListener(){
    Hub.listen('auth', (data) => {
      switch (data.payload.event){
        case 'signIn':
           console.log('user signed in');
           updateFormState(()=>({...formState, formType: 'signed'}))
            break;
        case 'signUp':
           console.log('user signed up');
            break;
        case 'signOut':
           console.log('user signed out');
           updateFormState(()=>({...formState, formType: 'signIn'}))
            break;
        case 'signIn_failure':
            console.log('user sign in failed');
            break;
        default:
          break;
      }
    })
  }
  async function checkUser(){
    try {
      const user = await Auth.currentAuthenticatedUser()
      console.log('user: ', user)
      updateUser(user)
      updateFormState(()=>({ ...formState, formType: 'signed'}))
    } catch (err){
      //
      console.log('user failed: ', user)
    }
  }

  function onChange(e){
    e.persist()
    updateFormState(() => ({...formState, [e.target.name]: e.target.value}))
  }
  const { formType } = formState

  async function signUp() {
    try {
        const { username, email, password } = formState
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,          // optional
                //phone_number,   // optional - E.164 number convention
                // other custom attributes 
            }
        });
        updateFormState(()=>({ ...formState, formType: 'confirmSignUp'}))
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
  }
 
  async function signIn() {
    try {
      const { username, password } = formState
      const user = await Auth.signIn(username, password);
      updateFormState(()=>({ ...formState, formType: 'signed'}))
    } catch (error) {
        console.log('error signing in', error);
    }
  }

  async function confirmSignUp() {
    try {
      const { username, authcode } = formState
      await Auth.confirmSignUp(username, authcode);
    } catch (error) {
        console.log('error confirming sign up', error);
    }
  }

  async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }
  return (
    <div className='App'>
      {
        formType === 'signUp' && (
          <div>
            <input name="username" onChange={onChange} placeholder="username"></input>
            <input name="password" onChange={onChange} placeholder="password"></input>
            <input name="email" type="email" onChange={onChange} placeholder="Email"></input>
            <button onClick={signUp} >Sign Up</button>
            <button onClick={() => {updateFormState(()=>({ ...formState, formType: 'signIn'}))}}>Sign In</button>

          </div>
        )
      }
      {
        formType === 'signIn' && (
          <div>
            <input name="username" onChange={onChange} placeholder="username"></input>
            <input name="password" onChange={onChange} placeholder="password"></input>
            <button onClick={signIn}>Sign in</button>
            <button onClick={() => {updateFormState(()=>({ ...formState, formType: 'signUp'}))}}>Sign Up</button>

          </div>
        )
      }
      {
        formType === 'confirmSignUp' && (
          <div>
            <input name="authcode" onChange={onChange} placeholder="authcode"></input>
            <button onClick={confirmSignUp}>Comfirm code</button>
          </div>
        )
      }
      {
        formType === 'signed' && (
          <div>
            <h1>Hello user welcome</h1>
            <button onClick={signOut}>signout</button>
          </div>
        )
      }
      {/* <Routes /> */}
    </div>
  )
}

export default App
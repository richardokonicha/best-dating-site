// import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import { Auth, Hub } from 'aws-amplify'
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as authAction from "../../store/actions/auth";
import * as userAction from "../../store/actions/user";

const initialFormState = {
  username: '',
  password: '', 
  email: '',
  authcode: '',
  formType: 'signUp'
}

const AuthView = () => {
  const dispatch = useDispatch()
  const [ formState, updateFormState ] = useState(initialFormState)
  const { user } = useSelector(state => state.user)
  const { formType } = formState

  function onChange(e){
    e.persist()
    updateFormState(() => ({...formState, [e.target.name]: e.target.value}))
  }

  async function signUp() {
    try {
        const { username, email, password } = formState
        await Auth.signUp({
            username,
            password,
            attributes: {
                email
            }
        });
        updateFormState(()=>({ ...formState, formType: 'confirmSignUp'}))
    } catch (error) {
        console.log('error signing up:', error);
    }
  }
 
  async function signIn() {
    try {
      const { username, password } = formState
      await Auth.signIn(username, password);
    } catch (error) {
        console.log('error signing in', error);
    }
  }

  async function confirmSignUp() {
    try {
      const { username, authcode } = formState
      await Auth.confirmSignUp(username, authcode);
      dispatch(userAction.updateUser());
    } catch (error) {
        console.log('error confirming sign up', error);
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
      {user && (<Redirect to="/" />)}
    </div>
  )
}

export default AuthView
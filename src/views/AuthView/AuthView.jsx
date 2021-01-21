import React, { useState } from 'react'
import { Auth } from 'aws-amplify'
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import * as authAction from "../../store/actions/auth";
import * as userAction from "../../store/actions/user";
import Form from './Form'

const initialFormState = {
  username: '',
  password: '', 
  email: '',
  authcode: '',
  formType: 'Sign Up'
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
 
  async function signIn(e) {
    e.preventDefault()
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
        formType === 'Sign Up' && (
          <div>
            <input name="username" onChange={onChange} placeholder="username"></input>
            <input name="password" onChange={onChange} placeholder="password"></input>
            <input name="email" type="email" onChange={onChange} placeholder="Email"></input>
            <button onClick={signUp} >Sign Up</button>
            <button onClick={() => {updateFormState(()=>({ ...formState, formType: 'Sign In'}))}}>Sign In</button>
            <Form formType={formType} onChange={onChange} action={signUp} updateFormState={updateFormState}/>


          </div>
        )
      }
      {
        formType === 'Sign In' && (
          // <div>
          //   <input name="username" onChange={onChange} placeholder="username"></input>
          //   <input name="password" onChange={onChange} placeholder="password"></input>
          //   <button onClick={signIn}>Sign in</button>
          //   <button onClick={() => {updateFormState(()=>({ ...formState, formType: 'Sign Up'}))}}>Sign Up</button>
          // </div>
          <Form formType={formType} onChange={onChange} action={signIn} updateFormState={updateFormState} formState={formState}/>
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
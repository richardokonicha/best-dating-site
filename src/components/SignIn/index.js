import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import Form from '../Widget/Form'
  
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const formType = 'Sign In'

const SignInPage = (props) => {
  const [ formState, updateFormState ] = useState(INITIAL_STATE)

  function onChange(e){
    e.persist()
    updateFormState(() => ({...formState, [e.target.name]: e.target.value}))
  }

  const onSubmit = event => {
    event.preventDefault();
    const { email, password } = formState;

    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        updateFormState({ ...INITIAL_STATE });
        props.history.push(ROUTES.CHATS);
      })
      .catch(error => {
        updateFormState(()=>({...formState, error: error.message}))
      });

  };

  return (
    <Form 
    formType={formType} 
    onChange={onChange} 
    action={onSubmit} 
    updateFormState={updateFormState} 
    formState={formState}
    />
  )
}
export default compose(
  withRouter,
  withFirebase,
)(SignInPage)
  

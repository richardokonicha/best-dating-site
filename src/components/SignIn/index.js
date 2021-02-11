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
  const [ loading, setLoading ] = useState(false)

  function onChange(e){
    e.persist()
    updateFormState(() => ({...formState, [e.target.name]: e.target.value}))
    
  }

  const onSubmit = event => {
    setLoading(true)
    event.preventDefault();
    const { email, password } = formState;

    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        updateFormState({ ...INITIAL_STATE });
        props.history.push(ROUTES.CHATS);
        setLoading(false)
      })
      .catch(error => {
        updateFormState(()=>({...formState, error: error.message}))
        setLoading(false)

      });

  };

  return (
    <Form 
    formType={formType} 
    onChange={onChange} 
    action={onSubmit} 
    updateFormState={updateFormState} 
    formState={formState}
    loading={loading}
    />
  )
}
export default compose(
  withRouter,
  withFirebase,
)(SignInPage)
  

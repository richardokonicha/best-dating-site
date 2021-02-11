import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import Form from '../Widget/Form'

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  isAdmin: false,
  error: null,
}

const formType = 'Sign Up'

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use'

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

const SignUpPage = (props) => {
  const [formState, updateFormState] = useState(INITIAL_STATE)
  const [ loading, setLoading ] = useState(false)

  
  const onChange = e => {
    e.persist()
    updateFormState(() => ({...formState, [e.target.name]: e.target.value}))
  };

  const onChangeCheckbox = event => {
    event.persist()
    updateFormState(() => ({...formState, [event.target.name]: event.target.checked }))
  };

  const onSubmit = event => {
    setLoading(true)

    event.preventDefault();
    const { username, email, password, isAdmin } = formState;
    const roles = {};

    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }

    props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        let userId = authUser.user.uid 
        // Create a user in your Firebase realtime database
        return props.firebase.user(authUser.user.uid).set(
          {
            userId,
            username,
            email,
            roles,
          },
          { merge: true }
        );
        
      }
      
      )
      .then(() => {
        return props.firebase.doSendEmailVerification();
      })
      .then(() => {
        updateFormState({ ...INITIAL_STATE });
        setLoading(false)

        props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }
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
    onChangeCheckbox={onChangeCheckbox}
    loading={loading}
    />
  );
}

export default withRouter(withFirebase(SignUpPage));


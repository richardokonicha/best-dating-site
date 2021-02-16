import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from '../../theme';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';

import NavSection from './Nav';
// import Messages from '../Messages';
// import Chats from '../Chats'

const HomePage = () => (
  <ThemeProvider theme={theme}>
    <NavSection/>
    {/* <Messages /> */}
    {/* <Chats/> */}
  </ThemeProvider>
);

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);

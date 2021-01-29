import React from "react";
import { withRouter, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import About from '../views/About'
import Chat from '../views/Chat'
import Home from '../views/Home'
import AuthView from '../views/AuthView/AuthView'
import SignInView from '../views/AuthView/Form'

import SignInPage from '../components/SignIn';
import SignUpPage from '../components/SignUp';

import Navigation from '../components/Navigation';
// import PasswordForgetPage from '../PasswordForget';
import HomePage from '../components/Home';
// import AccountPage from '../Account';
// import AdminPage from '../Admin';

import LandingPage from '../components/Landing';
import * as ROUTES from '../constants/routes';

const Routes = props => {
  return (
    <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.HOME} component={HomePage} />

      {/* <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
    </div>
  </Router>
  );
};

export default Routes;

// const Routes = props => {
//   return (
//     <div>
//       {/* <NavBar auth={props.state.auth} /> */}
//       <Switch>  
//         <PrivateRoute exact path='/' auth={props.auth}>
//           <Home />
//         </PrivateRoute>
//         <Route path='/auth'>
//           <AuthView />
//         </Route>
//         <Route path='/about'>
//           <About />
//         </Route>
//         <Route path='/signin'>
//           < SignInView />
//         </Route>
//         <Route path='/chat' auth={props.auth}>
//           <Chat />
//         </Route>
//       </Switch>
//     </div>
//   );
// };

// const mapStateToProps = state => ({
//   state: state
// });

// export default withRouter(connect(mapStateToProps)(Routes));


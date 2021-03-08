import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useParams, useRouteMatch } from "react-router-dom";
// import { withRouter, Switch, Route, BrowserRouter as Router , Redirect} from "react-router-dom";
// import { connect } from "react-redux";
// import PrivateRoute from "./PrivateRoute";
// import About from '../views/About'
// import Chat from '../views/Chat'
// import Home from '../views/Home'
// import AuthView from '../views/AuthView/AuthView'
// import SignInView from '../views/AuthView/Form'

import SignInPage from '../components/SignIn';
import SignUpPage from '../components/SignUp';
import LandingPage from '../components/Landing'
import Navigation from '../components/Navigation';
import PasswordForgetPage from '../components/PasswordForget';
import HomePage from '../components/Home';
import AccountPage from '../components/Account';
import AdminPage from '../components/Admin';

// import LandingPage from '../components/Landing';
import * as ROUTES from '../constants/routes';

import Chats from '../components/Chats'
// import ProfilePane from "../components/Chats/Panes/ProfilePane";
 
const Routes = props => {

  return (
    <Router>
      <div>
        {/* <Navigation/>
        <hr /> */}

        <Switch>
          {/* <Route exact path="/">
           <Redirect to={ROUTES.CHATS}/>
          </Route> */}
          <Route path="/u">
            <Chats />
          </Route>
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} /> 
          <Route path={ROUTES.LANDING} component={LandingPage} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;

import React from "react";
import { withRouter, Switch, Route, BrowserRouter as Router , Redirect} from "react-router-dom";
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
import PasswordForgetPage from '../components/PasswordForget';
import HomePage from '../components/Home';
import AccountPage from '../components/Account';
import AdminPage from '../components/Admin';

import LandingPage from '../components/Landing';
import * as ROUTES from '../constants/routes';

import Chats from '../components/Chats'
import ProfilePane from "../components/Chats/Panes/ProfilePane";



const Routes = props => {
  return (
    <Router>
    <div>
      {/* <Navigation /> */}
      {/* <hr /> */}
      <Route exact path={ROUTES.LANDING} component={Chats}>
        {/* <Redirect to="/"/> */}
      </Route>
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} /> 

      {/* <Route path={ROUTES.CHATS} component={Chats} />  */}
      {/* <Route path={ROUTES.PROFILE} component={ProfilePane} />  */}


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


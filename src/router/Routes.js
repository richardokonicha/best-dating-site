import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import About from '../views/About'
import Chat from '../views/Chat'
import Home from '../views/Home'
import AuthView from '../views/AuthView/AuthView'
import SignInView from '../views/AuthView/Form'


const Routes = props => {
  return (
    <div>
      {/* <NavBar auth={props.state.auth} /> */}
      <Switch>  
        <PrivateRoute exact path='/' auth={props.auth}>
          <Home />
        </PrivateRoute>
        <Route path='/auth'>
          <AuthView />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/signin'>
          < SignInView />
        </Route>
        <Route path='/chat' auth={props.auth}>
          <Chat />
        </Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  state: state
});

export default withRouter(connect(mapStateToProps)(Routes));

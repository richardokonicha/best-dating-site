// import './App.css';
import React, { useEffect } from 'react'
import Routes from './router/Routes'
// import { useDispatch, useSelector } from "react-redux";
// import * as authAction from "./store/actions/auth";
// import * as userAction from "./store/actions/user";
// import "bootstrap/dist/css/bootstrap.css";
import "../src/asset/style/app.css"
// import "../src/asset/style/appdark.css"
import "../src/asset/style/bootstrap.css"
import "../src/asset/style/coursole.css"
// import "../src/asset/style/bootstrapdark.css"
import "../src/asset/style/icon.css"

import { withAuthentication } from './components/Session';

const App = () => {
  // const dispatch = useDispatch()
  return(
    <div>
      <Routes />
    </div>
  )
}

export default withAuthentication(App);

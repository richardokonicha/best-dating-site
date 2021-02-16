// import './App.css';
import React from 'react'
import Routes from './router/Routes'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './theme';

import "../src/asset/style/app.css"
// import "../src/asset/style/appdark.css"
import "../src/asset/style/bootstrap.css"
import "../src/asset/style/coursole.css"
// import "../src/asset/style/bootstrapdark.css"
import "../src/asset/style/icon.css"

import { withAuthentication } from './components/Session';
import Rout from "./router/rout";

const App = () => {
  // const dispatch = useDispatch()
  return(
    <ThemeProvider theme={theme}>
      <div>
        <Routes />
        {/* <Rout></Rout> */}
      </div>
    </ThemeProvider>
  )
}

export default withAuthentication(App);

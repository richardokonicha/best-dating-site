
import UserReducer from "./store/reducers/user";
import AuthReducer from "./store/reducers/auth";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    auth: AuthReducer,
    user: UserReducer
  });
  
const store = compose(
    applyMiddleware(thunk),
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined" ? a => a : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )(createStore)(rootReducer);
  

  export default store;
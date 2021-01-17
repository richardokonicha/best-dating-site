import * as authAction from "../store/actions/auth";
import { useDispatch, connect } from "react-redux";
import { Auth } from "aws-amplify";
import { useState, useEffect } from 'react'



const Home = () => {
  const dispatch = useDispatch();
  const logoutHandler = event => {
    event.preventDefault();
    // setLoading(true);
    dispatch(authAction.Logout());
    // setLoading(false);
  };

  const [user, setUser] = useState({});
  async function checkUser() {
    try {
      const data = await Auth.currentUserPoolUser();
      const userInfo = { username: data.username, ...data.attributes };
      setUser(userInfo);
    } catch (err) {
      console.log('error: ', err);
    }
  }
  function signOut() {
    Auth.signOut().catch((err) => console.log('error signing out: ', err));
    setUser({})
  }

  
  useEffect(() => {
    checkUser();
  }, []);

  return(
    <>
    <h1>This is the about Home</h1>
    <div></div>
    ffdf
    <button onClick={logoutHandler} >logout</button>
    </>
  )
  }

export default Home;
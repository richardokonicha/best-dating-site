import * as userAction from "../store/actions/user";
import { useDispatch} from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const signOutHandler = event => {
    event.preventDefault();
    // setLoading(true);
    dispatch(userAction.signOut());
    // setLoading(false);
  };

  return(
    <>
    <h1>This is the about Home</h1>
    <div></div>
    <button onClick={signOutHandler} >SignOut</button>
    </>
  )
  }

export default Home;
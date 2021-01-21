import { useDispatch } from "react-redux";
import * as userAction from "../store/actions/user";

const About = () => {
  const dispatch = useDispatch();
  // const { user } = useSelector(state => state.user)

  const signOutHandler = event => {
    event.preventDefault();
    // setLoading(true);
    dispatch(userAction.signOut());
    // setLoading(false);
  };

  return(
    <>
      <h1>This is the about page</h1>
      <button onClick={signOutHandler}>signOut</button>
    </>
    )
  }
  
export default About;  
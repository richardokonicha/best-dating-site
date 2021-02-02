import "simplebar/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import ProfilePane from './ProfilePane'
import ChatsPane from './ChatsPane'
import GroupsPane from "./GroupsPane"
import SettingPane from "./SettingPane"
import { Switch, Route, BrowserRouter as Router , Redirect} from "react-router-dom";


const userData = [
  {
    name: "Patrick Hendricks",
    lastMessage: "Hey! there I'm available",
    unread: true,
    lastSeen: '05 min',
    profilePicture: 'P'
  }
]

const Panes = () => {
  

  return (
    <div className="chat-leftsidebar mr-lg-1">
    <div className="tab-content">
        <Switch>
          {/* <Route exact path="/">
            <Redirect to="/chat"/>
          </Route>   */}
          <Route path="/profile">
            <ProfilePane/>
          </Route>
          <Route exact path="/">
            <ChatsPane/>
          </Route>
          <Route path="/group">
            <GroupsPane/>
          </Route>
          <Route path="/setting">
        <SettingPane/>
          </Route>
        </Switch>
    </div>
    </div>



  );
};

export default Panes;

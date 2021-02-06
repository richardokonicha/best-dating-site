import "simplebar/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import ProfilePane from './ProfilePane'
import ChatsPane from './ChatsPane'
import GroupsPane from "./GroupsPane"
import SettingPane from "./SettingPane"
import { Switch, Route,  useRouteMatch} from "react-router-dom";


const Panes = () => {
  let { path} = useRouteMatch();
  return (
    <div className="chat-leftsidebar mr-lg-1">
    <div className="tab-content">
        <Switch>
          <Route path={`${path}/profile`}>
            <ProfilePane/>
          </Route>
          <Route path={`${path}/chat`}>
            <ChatsPane/>
          </Route>
          <Route path={`${path}/group`}>
            <GroupsPane/>
          </Route>
          <Route path={`${path}/setting`}>
            <SettingPane/>
          </Route>
        </Switch>
    </div>
    </div>

  );
};

export default Panes;

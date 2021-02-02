import "simplebar/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import ProfilePane from './ProfilePane'
import ChatsPane from './ChatsPane'
import GroupsPane from "./GroupsPane"
import SettingPane from "./SettingPane"

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


      {/* <ProfilePane/> */}
      <ChatsPane/>
      {/* <GroupsPane/> */}
      {/* <SettingPane/> */}


    </div>
    </div>

  );
};

export default Panes;

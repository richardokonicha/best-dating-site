import SimpleBar from "simplebar-react";

const panelList = [
    {
      name: "Patrick Hendricks",
      lastMessage: "Hey! there I'm available",
      unread: true,
      lastSeen: '05 min',
      label: 'P',
      typing: true,
      online: true

    },
    {
      name: "John Doe",
      lastMessage: "Hello sir the job is done.",
      unread: false,
      last: "02 hours",
      label: "J",
      typing: false,
      online: false


    },
     {
      name: "Alfred Inyang",
      lastMessage: "We have a review by 8:00pm",
      unread: true,
      last: "now",
      label: "A",
      typing: true,
      online: true
    }
  ]
  

const ChatsPan = () => {
    return (
        <div
        className="tab-pane fade show active"
        id="pills-chat"
        role="tabpanel"
        aria-labelledby="pills-chat-tab"
      >
        <div>


          <div className="px-4 pt-4">
            <h4 className="mb-4">Chats</h4>
            <div className="search-box chat-search-box">
              <div className="input-group mb-3 bg-light  input-group-lg rounded-lg">
                <div className="input-group-prepend">
                  <button
                    className="btn btn-link text-muted pr-1 text-decoration-none"
                    type="button"
                  >
                    <i className="ri-search-line search-icon font-size-18"></i>
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control bg-light"
                  placeholder="Search messages or users"
                />
              </div>
            </div>
          </div> 


          {/* carousel */}
          {/* <div className="px-4 pb-4" dir="ltr">
            <div className="owl-carousel owl-theme" id="user-status-carousel">
              <div className="item">
                <a href="/chat" className="user-status-box">
                  <div className="avatar-xs mx-auto d-block chat-user-img online">
                    <img
                      src="assets/images/users/avatar-2.jpg"
                      alt="user-img"
                      className="img-fluid rounded-circle"
                    />
                    <span className="user-status"></span>
                  </div>

                  <h5 className="font-size-13 text-truncate mt-3 mb-1">
                    Patrick
                  </h5>
                </a>
              </div>
              <div className="item">
                <a href="/chat" className="user-status-box">
                  <div className="avatar-xs mx-auto d-block chat-user-img online">
                    <img
                      src="assets/images/users/avatar-4.jpg"
                      alt="user-img"
                      className="img-fluid rounded-circle"
                    />
                    <span className="user-status"></span>
                  </div>

                  <h5 className="font-size-13 text-truncate mt-3 mb-1">
                    Doris
                  </h5>
                </a>
              </div>

              <div className="item">
                <a href="/chat" className="user-status-box">
                  <div className="avatar-xs mx-auto d-block chat-user-img online">
                    <img
                      src="assets/images/users/avatar-5.jpg"
                      alt="user-img"
                      className="img-fluid rounded-circle"
                    />
                    <span className="user-status"></span>
                  </div>

                  <h5 className="font-size-13 text-truncate mt-3 mb-1">
                    Emily
                  </h5>
                </a>
              </div>

              <div className="item">
                <a href="/chat" className="user-status-box">
                  <div className="avatar-xs mx-auto d-block chat-user-img online">
                    <img
                      src="assets/images/users/avatar-6.jpg"
                      alt="user-img"
                      className="img-fluid rounded-circle"
                    />
                    <span className="user-status"></span>
                  </div>

                  <h5 className="font-size-13 text-truncate mt-3 mb-1">
                    Steve
                  </h5>
                </a>
              </div>

              <div className="item">
                <a href="/chat" className="user-status-box">
                  <div className="avatar-xs mx-auto d-block chat-user-img online">
                    <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                      T
                    </span>
                    <span className="user-status"></span>
                  </div>

                  <h5 className="font-size-13 text-truncate mt-3 mb-1">
                    Teresa
                  </h5>
                </a>
              </div>
            </div>
          </div> */}
          {/* carousel end */}


          <Recent/>
        </div>
      </div>

    )
}

export default ChatsPan


const Recent = () => {
  return (
    <div className="px-2">
    <h5 className="mb-3 px-3 font-size-16">Recent</h5>

    <SimpleBar className="chat-message-list">
      <ul className="list-unstyled chat-list chat-user-list">

        {panelList.map(data => {
            return(
              // <i className="ri-image-fill align-middle mr-1"></i>{" "}
              // <li className="active">
              // <li className="unread ">
              <ChatTile data={data}/>
            )
          })}
      </ul>
    </SimpleBar>
  </div>

  )
}

const ChatTile = ({data}) => {
  return (
    <li className={data.typing ? "typing" : ""}>
      {/* <li > */}
      <a href="/chat">
        <div className="media">
          <div className="chat-user-img align-self-center mr-3 online">
            <div className="avatar-xs">
              <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                {data.label}
              </span>
            </div>
            {data.online ? <span className="user-status"></span> : null}
          </div>
          <div className="media-body overflow-hidden">
            <h5 className="text-truncate font-size-15 mb-1">{data.name}</h5>
            {data.typing ? (
              <p className="chat-user-message text-truncate mb-0">
                typing
                <span className="animate-typing">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </span>
              </p>
            ) : (
              <p className="chat-user-message text-truncate mb-0">
                {data.lastMessage}
              </p>
            )}
          </div>
          <div className="font-size-11">{data.lastSeen}</div>
          {data.unread ? (
            <div className="unread-message">
              <span className="badge badge-soft-danger badge-pill">02</span>
            </div>
          ) : null}
        </div>
      </a>
    </li>
  );
}
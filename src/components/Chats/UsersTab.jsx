import "simplebar/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";

const UsersTab = () => {
  return (
    <div className="chat-leftsidebar mr-lg-1">

    <div className="tab-content">
      <div
        className="tab-pane"
        id="pills-user"
        role="tabpanel"
        aria-labelledby="pills-user-tab"
      >
        <div>
          <div className="px-4 pt-4">
            <div className="user-chat-nav float-right">
              <div className="dropdown">
                <a
                  href="/chat"
                  className="font-size-18 text-muted dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="ri-more-2-fill"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="/chat">
                    Edit
                  </a>
                  <a className="dropdown-item" href="/chat">
                    Action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/chat">
                    Another action
                  </a>
                </div>
              </div>
            </div>
            <h4 className="mb-0">My Profile</h4>
          </div>

          <div className="text-center p-4 border-bottom">
            <div className="mb-4">
              <img
                src="assets/images/users/avatar-1.jpg"
                className="rounded-circle avatar-lg img-thumbnail"
                alt=""
              />
            </div>

            <h5 className="font-size-16 mb-1 text-truncate">Patricia Smith</h5>
            <p className="text-muted text-truncate mb-1">
              <i className="ri-record-circle-fill font-size-10 text-success mr-1 d-inline-block"></i>{" "}
              Active
            </p>
          </div>
          <SimpleBar className="p-4 user-profile-desc" data-simplebar>
            <div className="text-muted">
              <p className="mb-4">
                If several languages coalesce, the grammar of the resulting
                language is more simple and regular than that of the individual.
              </p>
            </div>

            <div id="profile-user-accordion-1" className="custom-accordion">
              <div className="card shadow-none border mb-2">
                <a
                  href="#profile-user-collapseOne"
                  className="text-dark"
                  data-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="profile-user-collapseOne"
                >
                  <div className="card-header" id="profile-user-headingOne">
                    <h5 className="font-size-14 m-0">
                      <i className="ri-user-2-line mr-2 align-middle d-inline-block"></i>{" "}
                      About
                      <i className="mdi mdi-chevron-up float-right accor-plus-icon"></i>
                    </h5>
                  </div>
                </a>

                <div
                  id="profile-user-collapseOne"
                  className="collapse show"
                  aria-labelledby="profile-user-headingOne"
                  data-parent="#profile-user-accordion-1"
                >
                  <div className="card-body">
                    <div>
                      <p className="text-muted mb-1">Name</p>
                      <h5 className="font-size-14">Patricia Smith</h5>
                    </div>

                    <div className="mt-4">
                      <p className="text-muted mb-1">Email</p>
                      <h5 className="font-size-14">adc@123.com</h5>
                    </div>

                    <div className="mt-4">
                      <p className="text-muted mb-1">Time</p>
                      <h5 className="font-size-14">11:40 AM</h5>
                    </div>

                    <div className="mt-4">
                      <p className="text-muted mb-1">Location</p>
                      <h5 className="font-size-14 mb-0">California, USA</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-1 shadow-none border">
                <a
                  href="#profile-user-collapseTwo"
                  className="text-dark collapsed"
                  data-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="profile-user-collapseTwo"
                >
                  <div className="card-header" id="profile-user-headingTwo">
                    <h5 className="font-size-14 m-0">
                      <i className="ri-attachment-line mr-2 align-middle d-inline-block"></i>{" "}
                      Attached Files
                      <i className="mdi mdi-chevron-up float-right accor-plus-icon"></i>
                    </h5>
                  </div>
                </a>
                <div
                  id="profile-user-collapseTwo"
                  className="collapse"
                  aria-labelledby="profile-user-headingTwo"
                  data-parent="#profile-user-accordion-1"
                >
                  <div className="card-body">
                    <div className="card p-2 border mb-2">
                      <div className="media align-items-center">
                        <div className="avatar-sm mr-3">
                          <div className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                            <i className="ri-file-text-fill"></i>
                          </div>
                        </div>
                        <div className="media-body">
                          <div className="text-left">
                            <h5 className="font-size-14 mb-1">Admin-A.zip</h5>
                            <p className="text-muted font-size-13 mb-0">
                              12.5 MB
                            </p>
                          </div>
                        </div>

                        <div className="ml-4">
                          <ul className="list-inline mb-0 font-size-18">
                            <li className="list-inline-item">
                              <a href="/chat" className="text-muted px-1">
                                <i className="ri-download-2-line"></i>
                              </a>
                            </li>
                            <li className="list-inline-item dropdown">
                              <a
                                className="dropdown-toggle text-muted px-1"
                                href="/chat"
                                role="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ri-more-fill"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="/chat">
                                  Action
                                </a>
                                <a className="dropdown-item" href="/chat">
                                  Another action
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/chat">
                                  Delete
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="card p-2 border mb-2">
                      <div className="media align-items-center">
                        <div className="avatar-sm mr-3">
                          <div className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                            <i className="ri-image-fill"></i>
                          </div>
                        </div>
                        <div className="media-body">
                          <div className="text-left">
                            <h5 className="font-size-14 mb-1">Image-1.jpg</h5>
                            <p className="text-muted font-size-13 mb-0">
                              4.2 MB
                            </p>
                          </div>
                        </div>

                        <div className="ml-4">
                          <ul className="list-inline mb-0 font-size-18">
                            <li className="list-inline-item">
                              <a href="/chat" className="text-muted px-1">
                                <i className="ri-download-2-line"></i>
                              </a>
                            </li>
                            <li className="list-inline-item dropdown">
                              <a
                                className="dropdown-toggle text-muted px-1"
                                href="/chat"
                                role="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ri-more-fill"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="/chat">
                                  Action
                                </a>
                                <a className="dropdown-item" href="/chat">
                                  Another action
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/chat">
                                  Delete
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="card p-2 border mb-2">
                      <div className="media align-items-center">
                        <div className="avatar-sm mr-3">
                          <div className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                            <i className="ri-image-fill"></i>
                          </div>
                        </div>
                        <div className="media-body">
                          <div className="text-left">
                            <h5 className="font-size-14 mb-1">Image-2.jpg</h5>
                            <p className="text-muted font-size-13 mb-0">
                              3.1 MB
                            </p>
                          </div>
                        </div>

                        <div className="ml-4">
                          <ul className="list-inline mb-0 font-size-18">
                            <li className="list-inline-item">
                              <a href="/chat" className="text-muted px-1">
                                <i className="ri-download-2-line"></i>
                              </a>
                            </li>
                            <li className="list-inline-item dropdown">
                              <a
                                className="dropdown-toggle text-muted px-1"
                                href="/chat"
                                role="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ri-more-fill"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="/chat">
                                  Action
                                </a>
                                <a className="dropdown-item" href="/chat">
                                  Another action
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/chat">
                                  Delete
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="card p-2 border mb-2">
                      <div className="media align-items-center">
                        <div className="avatar-sm mr-3">
                          <div className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                            <i className="ri-file-text-fill"></i>
                          </div>
                        </div>
                        <div className="media-body">
                          <div className="text-left">
                            <h5 className="font-size-14 mb-1">Landing-A.zip</h5>
                            <p className="text-muted font-size-13 mb-0">
                              6.7 MB
                            </p>
                          </div>
                        </div>

                        <div className="ml-4">
                          <ul className="list-inline mb-0 font-size-18">
                            <li className="list-inline-item">
                              <a href="/chat" className="text-muted px-1">
                                <i className="ri-download-2-line"></i>
                              </a>
                            </li>
                            <li className="list-inline-item dropdown">
                              <a
                                className="dropdown-toggle text-muted px-1"
                                href="/chat"
                                role="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ri-more-fill"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="/chat">
                                  Action
                                </a>
                                <a className="dropdown-item" href="/chat">
                                  Another action
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/chat">
                                  Delete
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SimpleBar>
        </div>
      </div>

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

          <div className="px-4 pb-4" dir="ltr">
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
          </div>

          <div className="px-2">
            <h5 className="mb-3 px-3 font-size-16">Recent</h5>

            <SimpleBar className="chat-message-list">
              <ul className="list-unstyled chat-list chat-user-list">
                <li>
                  <a href="/chat">
                    <div className="media">
                      <div className="chat-user-img align-self-center mr-3">
                        <div className="avatar-xs">
                          <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                            P
                          </span>
                        </div>
                      </div>

                      <div className="media-body overflow-hidden">
                        <h5 className="text-truncate font-size-15 mb-1">
                          Patrick Hendricks
                        </h5>
                        <p className="chat-user-message text-truncate mb-0">
                          Hey! there I'm available
                        </p>
                      </div>
                      <div className="font-size-11">05 min</div>
                    </div>
                  </a>
                </li>

                <li className="unread">
                  <a href="/chat">
                    <div className="media">
                      <div className="chat-user-img align-self-center mr-3">
                        <div className="avatar-xs">
                          <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                            M
                          </span>
                        </div>
                      </div>
                      <div className="media-body overflow-hidden">
                        <h5 className="text-truncate font-size-15 mb-1">
                          Mark Messer
                        </h5>
                        <p className="chat-user-message text-truncate mb-0">
                          <i className="ri-image-fill align-middle mr-1"></i>{" "}
                          Images
                        </p>
                      </div>
                      <div className="font-size-11">12 min</div>

                      <div className="unread-message">
                        <span className="badge badge-soft-danger badge-pill">
                          02
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="/chat">
                    <div className="media">
                      <div className="chat-user-img align-self-center mr-3">
                        <div className="avatar-xs">
                          <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                            G
                          </span>
                        </div>
                      </div>
                      <div className="media-body overflow-hidden">
                        <h5 className="text-truncate font-size-15 mb-1">
                          General
                        </h5>
                        <p className="chat-user-message text-truncate mb-0">
                          This theme is awesome!
                        </p>
                      </div>
                      <div className="font-size-11">20 min</div>
                    </div>
                  </a>
                </li>

                <li className="active">
                  <a href="/chat">
                    <div className="media">
                      <div className="chat-user-img align-self-center mr-3">
                        <div className="avatar-xs">
                          <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                            G
                          </span>
                        </div>
                      </div>
                      <div className="media-body overflow-hidden">
                        <h5 className="text-truncate font-size-15 mb-1">
                          Broadcast
                        </h5>
                        <p className="chat-user-message text-truncate mb-0">
                          Nice to meet you
                        </p>
                      </div>
                      <div className="font-size-11">10:12 AM</div>
                    </div>
                  </a>
                </li>
                <li className="unread">
                  <a href="/chat">
                    <div className="media">
                      <div className="chat-user-img align-self-center mr-3">
                        <div className="avatar-xs">
                          <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                            D
                          </span>
                        </div>
                      </div>
                      <div className="media-body overflow-hidden">
                        <h5 className="text-truncate font-size-15 mb-1">
                          Designer
                        </h5>
                        <p className="chat-user-message text-truncate mb-0">
                          Next meeting tomorrow 10.00AM
                        </p>
                      </div>
                      <div className="font-size-11">12:01 PM</div>
                      <div className="unread-message">
                        <span className="badge badge-soft-danger badge-pill">
                          01
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/chat">
                    <div className="media">
                      <div className="chat-user-img align-self-center mr-3">
                        <div className="avatar-xs">
                          <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                            S
                          </span>
                        </div>
                      </div>
                      <div className="media-body overflow-hidden">
                        <h5 className="text-truncate font-size-15 mb-1">
                          Steve Walker
                        </h5>
                        <p className="chat-user-message text-truncate mb-0">
                          <i className="ri-file-text-fill align-middle mr-1"></i>{" "}
                          Admin-A.zip
                        </p>
                      </div>
                      <div className="font-size-11">03:20 PM</div>
                    </div>
                  </a>
                </li>
                <li className="typing">
                  <a href="/chat">
                    <div className="media">
                      <div className="chat-user-img align-self-center online mr-3">
                        <div className="avatar-xs">
                          <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                            A
                          </span>
                        </div>
                        <span className="user-status"></span>
                      </div>
                      <div className="media-body overflow-hidden">
                        <h5 className="text-truncate font-size-15 mb-1">
                          Albert Rodarte
                        </h5>
                        <p className="chat-user-message text-truncate mb-0">
                          typing
                          <span className="animate-typing">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                          </span>
                        </p>
                      </div>
                      <div className="font-size-11">04:56 PM</div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="/chat">
                    <div className="media">
                      <div className="chat-user-img align-self-center online mr-3">
                        <div className="avatar-xs">
                          <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                            M
                          </span>
                        </div>
                        <span className="user-status"></span>
                      </div>
                      <div className="media-body overflow-hidden">
                        <h5 className="text-truncate font-size-15 mb-1">
                          Mirta George
                        </h5>
                        <p className="chat-user-message text-truncate mb-0">
                          Yeah everything is fine
                        </p>
                      </div>
                      <div className="font-size-11">12/07</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/chat">
                    <div className="media">
                      <div className="chat-user-img align-self-center mr-3">
                        <div className="avatar-xs">
                          <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                            P
                          </span>
                        </div>
                      </div>
                      <div className="media-body overflow-hidden">
                        <h5 className="text-truncate font-size-15 mb-1">
                          Paul Haynes
                        </h5>
                        <p className="chat-user-message text-truncate mb-0">
                          Good morning
                        </p>
                      </div>
                      <div className="font-size-11">12/07</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/chat">
                    <div className="media">
                      <div className="chat-user-img align-self-center online mr-3">
                        <div className="avatar-xs">
                          <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                            J
                          </span>
                        </div>
                        <span className="user-status"></span>
                      </div>
                      <div className="media-body overflow-hidden">
                        <h5 className="text-truncate font-size-15 mb-1">
                          Jonathan Miller
                        </h5>
                        <p className="chat-user-message text-truncate mb-0">
                          Hi, How are you?
                        </p>
                      </div>
                      <div className="font-size-11">12/07</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/chat">
                    <div className="media">
                      <div className="chat-user-img align-self-center mr-3">
                        <div className="avatar-xs">
                          <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                            O
                          </span>
                        </div>
                      </div>
                      <div className="media-body overflow-hidden">
                        <h5 className="text-truncate font-size-15 mb-1">
                          Ossie Wilson
                        </h5>
                        <p className="chat-user-message text-truncate mb-0">
                          I've finished it! See you so
                        </p>
                      </div>
                      <div className="font-size-11">11/07</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/chat">
                    <div className="media">
                      <div className="chat-user-img align-self-center online mr-3">
                        <div className="avatar-xs">
                          <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                            S
                          </span>
                        </div>
                        <span className="user-status"></span>
                      </div>
                      <div className="media-body overflow-hidden">
                        <h5 className="text-truncate font-size-15 mb-1">
                          Sara Muller
                        </h5>
                        <p className="chat-user-message text-truncate mb-0">
                          Wow that's great
                        </p>
                      </div>
                      <div className="font-size-11">11/07</div>
                    </div>
                  </a>
                </li>
              </ul>
            </SimpleBar>
          </div>
        </div>
      </div>

      <div
        className="tab-pane"
        id="pills-groups"
        role="tabpanel"
        aria-labelledby="pills-groups-tab"
      >
        <div>
          <div className="p-4">
            <div className="user-chat-nav float-right">
              <div
                data-toggle="tooltip"
                data-placement="bottom"
                title="Create group"
              >
                <button
                  type="button"
                  className="btn btn-link text-decoration-none text-muted font-size-18 py-0"
                  data-toggle="modal"
                  data-target="#addgroup-exampleModal"
                >
                  <i className="ri-group-line mr-1"></i>
                </button>
              </div>
            </div>
            <h4 className="mb-4">Groups</h4>

            <div
              className="modal fade"
              id="addgroup-exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="addgroup-exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5
                      className="modal-title font-size-16"
                      id="addgroup-exampleModalLabel"
                    >
                      Create New Group
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body p-4">
                    <form>
                      <div className="form-group mb-4">
                        <label for="addgroupname-input">Group Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="addgroupname-input"
                          placeholder="Enter Group Name"
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label>Group Members</label>
                        <div className="mb-3">
                          <button
                            className="btn btn-light btn-sm"
                            type="button"
                            data-toggle="collapse"
                            data-target="#groupmembercollapse"
                            aria-expanded="false"
                            aria-controls="groupmembercollapse"
                          >
                            Select Members
                          </button>
                        </div>

                        <div className="collapse" id="groupmembercollapse">
                          <div className="card border">
                            <div className="card-header">
                              <h5 className="font-size-15 mb-0">Contacts</h5>
                            </div>
                            <div className="card-body p-2">
                              <SimpleBar
                                data-simplebar
                                style={{ maxHeight: 150 }}
                              >
                                <div>
                                  <div className="p-3 font-weight-bold text-primary">
                                    A
                                  </div>

                                  <ul className="list-unstyled contact-list">
                                    <li>
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="memberCheck1"
                                          checked
                                        />
                                        <label
                                          className="custom-control-label"
                                          for="memberCheck1"
                                        >
                                          Albert Rodarte
                                        </label>
                                      </div>
                                    </li>

                                    <li>
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="memberCheck2"
                                        />
                                        <label
                                          className="custom-control-label"
                                          for="memberCheck2"
                                        >
                                          Allison Etter
                                        </label>
                                      </div>
                                    </li>
                                  </ul>
                                </div>

                                <div>
                                  <div className="p-3 font-weight-bold text-primary">
                                    C
                                  </div>

                                  <ul className="list-unstyled contact-list">
                                    <li>
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="memberCheck3"
                                        />
                                        <label
                                          className="custom-control-label"
                                          for="memberCheck3"
                                        >
                                          Craig Smiley
                                        </label>
                                      </div>
                                    </li>
                                  </ul>
                                </div>

                                <div>
                                  <div className="p-3 font-weight-bold text-primary">
                                    D
                                  </div>

                                  <ul className="list-unstyled contact-list">
                                    <li>
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="memberCheck4"
                                        />
                                        <label
                                          className="custom-control-label"
                                          for="memberCheck4"
                                        >
                                          Daniel Clay
                                        </label>
                                      </div>
                                    </li>
                                  </ul>
                                </div>

                                <div>
                                  <div className="p-3 font-weight-bold text-primary">
                                    I
                                  </div>

                                  <ul className="list-unstyled contact-list">
                                    <li>
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="memberCheck5"
                                        />
                                        <label
                                          className="custom-control-label"
                                          for="memberCheck5"
                                        >
                                          Iris Wells
                                        </label>
                                      </div>
                                    </li>
                                  </ul>
                                </div>

                                <div>
                                  <div className="p-3 font-weight-bold text-primary">
                                    J
                                  </div>

                                  <ul className="list-unstyled contact-list">
                                    <li>
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="memberCheck6"
                                        />
                                        <label
                                          className="custom-control-label"
                                          for="memberCheck6"
                                        >
                                          Juan Flakes
                                        </label>
                                      </div>
                                    </li>

                                    <li>
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="memberCheck7"
                                        />
                                        <label
                                          className="custom-control-label"
                                          for="memberCheck7"
                                        >
                                          John Hall
                                        </label>
                                      </div>
                                    </li>

                                    <li>
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="memberCheck8"
                                        />
                                        <label
                                          className="custom-control-label"
                                          for="memberCheck8"
                                        >
                                          Joy Southern
                                        </label>
                                      </div>
                                    </li>
                                  </ul>
                                </div>

                                <div>
                                  <div className="p-3 font-weight-bold text-primary">
                                    M
                                  </div>

                                  <ul className="list-unstyled contact-list">
                                    <li>
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="memberCheck9"
                                        />
                                        <label
                                          className="custom-control-label"
                                          for="memberCheck9"
                                        >
                                          Michael Hinton
                                        </label>
                                      </div>
                                    </li>

                                    <li>
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="memberCheck10"
                                        />
                                        <label
                                          className="custom-control-label"
                                          for="memberCheck10"
                                        >
                                          Mary Farmer
                                        </label>
                                      </div>
                                    </li>
                                  </ul>
                                </div>

                                <div>
                                  <div className="p-3 font-weight-bold text-primary">
                                    P
                                  </div>

                                  <ul className="list-unstyled contact-list">
                                    <li>
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="memberCheck11"
                                        />
                                        <label
                                          className="custom-control-label"
                                          for="memberCheck11"
                                        >
                                          Phillis Griffin
                                        </label>
                                      </div>
                                    </li>
                                  </ul>
                                </div>

                                <div>
                                  <div className="p-3 font-weight-bold text-primary">
                                    R
                                  </div>

                                  <ul className="list-unstyled contact-list">
                                    <li>
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="memberCheck12"
                                        />
                                        <label
                                          className="custom-control-label"
                                          for="memberCheck12"
                                        >
                                          Rocky Jackson
                                        </label>
                                      </div>
                                    </li>
                                  </ul>
                                </div>

                                <div>
                                  <div className="p-3 font-weight-bold text-primary">
                                    S
                                  </div>

                                  <ul className="list-unstyled contact-list">
                                    <li>
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="memberCheck13"
                                        />
                                        <label
                                          className="custom-control-label"
                                          for="memberCheck13"
                                        >
                                          Simon Velez
                                        </label>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </SimpleBar>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="addgroupdescription-input">
                          Description
                        </label>
                        <textarea
                          className="form-control"
                          id="addgroupdescription-input"
                          rows="3"
                          placeholder="Enter Description"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-link"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Create Groups
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="search-box chat-search-box">
              <div className="input-group bg-light  input-group-lg rounded-lg">
                <div className="input-group-prepend">
                  <button
                    className="btn btn-link text-decoration-none text-muted pr-1"
                    type="button"
                  >
                    <i className="ri-search-line search-icon font-size-18"></i>
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control bg-light"
                  placeholder="Search groups..."
                />
              </div>
            </div>
          </div>

          <SimpleBar
            className="p-4 chat-message-list chat-group-list"
            data-simplebar
          >
            <ul className="list-unstyled chat-list">
              <li>
                <a href="/chat">
                  <div className="media align-items-center">
                    <div className="chat-user-img mr-3">
                      <div className="avatar-xs">
                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                          G
                        </span>
                      </div>
                    </div>
                    <div className="media-body overflow-hidden">
                      <h5 className="text-truncate font-size-14 mb-0">
                        #General
                      </h5>
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a href="/chat">
                  <div className="media align-items-center">
                    <div className="chat-user-img mr-3">
                      <div className="avatar-xs">
                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                          R
                        </span>
                      </div>
                    </div>
                    <div className="media-body overflow-hidden">
                      <h5 className="text-truncate font-size-14 mb-0">
                        #Reporting{" "}
                        <span className="badge badge-soft-danger badge-pill float-right">
                          +23
                        </span>
                      </h5>
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a href="/chat">
                  <div className="media align-items-center">
                    <div className="chat-user-img mr-3">
                      <div className="avatar-xs">
                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                          D
                        </span>
                      </div>
                    </div>
                    <div className="media-body overflow-hidden">
                      <h5 className="text-truncate font-size-14 mb-0">
                        #Designers
                      </h5>
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a href="/chat">
                  <div className="media align-items-center">
                    <div className="chat-user-img mr-3">
                      <div className="avatar-xs">
                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                          D
                        </span>
                      </div>
                    </div>
                    <div className="media-body overflow-hidden">
                      <h5 className="text-truncate font-size-14 mb-0">
                        #Developers{" "}
                        <span className="badge badge-soft-danger badge-pill float-right">
                          New
                        </span>
                      </h5>
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a href="/chat">
                  <div className="media align-items-center">
                    <div className="chat-user-img mr-3">
                      <div className="avatar-xs">
                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                          P
                        </span>
                      </div>
                    </div>
                    <div className="media-body overflow-hidden">
                      <h5 className="text-truncate font-size-14 mb-0">
                        #Project-alpha
                      </h5>
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a href="/chat">
                  <div className="media align-items-center">
                    <div className="chat-user-img mr-3">
                      <div className="avatar-xs">
                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                          B
                        </span>
                      </div>
                    </div>
                    <div className="media-body overflow-hidden">
                      <h5 className="text-truncate font-size-14 mb-0">
                        #Snacks
                      </h5>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </SimpleBar>
        </div>
      </div>

      <div
        className="tab-pane"
        id="pills-contacts"
        role="tabpanel"
        aria-labelledby="pills-contacts-tab"
      >
        <div>
          <div className="p-4">
            <div className="user-chat-nav float-right">
              <div
                data-toggle="tooltip"
                data-placement="bottom"
                title="Add Contact"
              >
                <button
                  type="button"
                  className="btn btn-link text-decoration-none text-muted font-size-18 py-0"
                  data-toggle="modal"
                  data-target="#addContact-exampleModal"
                >
                  <i className="ri-user-add-line"></i>
                </button>
              </div>
            </div>
            <h4 className="mb-4">Contacts</h4>

            <div
              className="modal fade"
              id="addContact-exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="addContact-exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5
                      className="modal-title font-size-16"
                      id="addContact-exampleModalLabel"
                    >
                      Add Contact
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body p-4">
                    <form>
                      <div className="form-group mb-4">
                        <label for="addcontactemail-input">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="addcontactemail-input"
                          placeholder="Enter Email"
                        />
                      </div>
                      <div className="form-group">
                        <label for="addcontact-invitemessage-input">
                          Invatation Message
                        </label>
                        <textarea
                          className="form-control"
                          id="addcontact-invitemessage-input"
                          rows="3"
                          placeholder="Enter Message"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-link"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Invite Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="search-box chat-search-box">
              <div className="input-group bg-light  input-group-lg rounded-lg">
                <div className="input-group-prepend">
                  <button
                    className="btn btn-link text-decoration-none text-muted pr-1"
                    type="button"
                  >
                    <i className="ri-search-line search-icon font-size-18"></i>
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control bg-light "
                  placeholder="Search users.."
                />
              </div>
            </div>
          </div>

          <SimpleBar
            className="p-4 chat-message-list chat-group-list"
            data-simplebar
          >
            <div>
              <div className="p-3 font-weight-bold text-primary">A</div>

              <ul className="list-unstyled contact-list">
                <li>
                  <div className="media align-items-center">
                    <div className="media-body">
                      <h5 className="font-size-14 m-0">Albert Rodarte</h5>
                    </div>

                    <div className="dropdown">
                      <a
                        href="/chat"
                        className="text-muted dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="/chat">
                          Share{" "}
                          <i className="ri-share-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Block{" "}
                          <i className="ri-forbid-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Remove{" "}
                          <i className="ri-delete-bin-line float-right text-muted"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="media align-items-center">
                    <div className="media-body">
                      <h5 className="font-size-14 m-0">Allison Etter</h5>
                    </div>

                    <div className="dropdown">
                      <a
                        href="/chat"
                        className="text-muted dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="/chat">
                          Share{" "}
                          <i className="ri-share-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Block{" "}
                          <i className="ri-forbid-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Remove{" "}
                          <i className="ri-delete-bin-line float-right text-muted"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-3">
              <div className="p-3 font-weight-bold text-primary">C</div>

              <ul className="list-unstyled contact-list">
                <li>
                  <div className="media align-items-center">
                    <div className="media-body">
                      <h5 className="font-size-14 m-0">Craig Smiley</h5>
                    </div>

                    <div className="dropdown">
                      <a
                        href="/chat"
                        className="text-muted dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="/chat">
                          Share{" "}
                          <i className="ri-share-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Block{" "}
                          <i className="ri-forbid-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Remove{" "}
                          <i className="ri-delete-bin-line float-right text-muted"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-3">
              <div className="p-3 font-weight-bold text-primary">D</div>

              <ul className="list-unstyled contact-list">
                <li>
                  <div className="media align-items-center">
                    <div className="media-body">
                      <h5 className="font-size-14 m-0">Daniel Clay</h5>
                    </div>

                    <div className="dropdown">
                      <a
                        href="/chat"
                        className="text-muted dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="/chat">
                          Share{" "}
                          <i className="ri-share-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Block{" "}
                          <i className="ri-forbid-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Remove{" "}
                          <i className="ri-delete-bin-line float-right text-muted"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="media align-items-center">
                    <div className="media-body">
                      <h5 className="font-size-14 m-0">Broadcast</h5>
                    </div>

                    <div className="dropdown">
                      <a
                        href="/chat"
                        className="text-muted dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="/chat">
                          Share{" "}
                          <i className="ri-share-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Block{" "}
                          <i className="ri-forbid-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Remove{" "}
                          <i className="ri-delete-bin-line float-right text-muted"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-3">
              <div className="p-3 font-weight-bold text-primary">I</div>

              <ul className="list-unstyled contact-list">
                <li>
                  <div className="media align-items-center">
                    <div className="media-body">
                      <h5 className="font-size-14 m-0">Iris Wells</h5>
                    </div>

                    <div className="dropdown">
                      <a
                        href="/chat"
                        className="text-muted dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="/chat">
                          Share{" "}
                          <i className="ri-share-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Block{" "}
                          <i className="ri-forbid-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Remove{" "}
                          <i className="ri-delete-bin-line float-right text-muted"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-3">
              <div className="p-3 font-weight-bold text-primary">J</div>

              <ul className="list-unstyled contact-list">
                <li>
                  <div className="media align-items-center">
                    <div className="media-body">
                      <h5 className="font-size-14 m-0">Juan Flakes</h5>
                    </div>

                    <div className="dropdown">
                      <a
                        href="/chat"
                        className="text-muted dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="/chat">
                          Share{" "}
                          <i className="ri-share-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Block{" "}
                          <i className="ri-forbid-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Remove{" "}
                          <i className="ri-delete-bin-line float-right text-muted"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="media align-items-center">
                    <div className="media-body">
                      <h5 className="font-size-14 m-0">John Hall</h5>
                    </div>

                    <div className="dropdown">
                      <a
                        href="/chat"
                        className="text-muted dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="/chat">
                          Share{" "}
                          <i className="ri-share-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Block{" "}
                          <i className="ri-forbid-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Remove{" "}
                          <i className="ri-delete-bin-line float-right text-muted"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="media align-items-center">
                    <div className="media-body">
                      <h5 className="font-size-14 m-0">Joy Southern</h5>
                    </div>

                    <div className="dropdown">
                      <a
                        href="/chat"
                        className="text-muted dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="/chat">
                          Share{" "}
                          <i className="ri-share-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Block{" "}
                          <i className="ri-forbid-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Remove{" "}
                          <i className="ri-delete-bin-line float-right text-muted"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-3">
              <div className="p-3 font-weight-bold text-primary">M</div>

              <ul className="list-unstyled contact-list">
                <li>
                  <div className="media align-items-center">
                    <div className="media-body">
                      <h5 className="font-size-14 m-0">Mary Farmer</h5>
                    </div>

                    <div className="dropdown">
                      <a
                        href="/chat"
                        className="text-muted dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="/chat">
                          Share{" "}
                          <i className="ri-share-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Block{" "}
                          <i className="ri-forbid-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Remove{" "}
                          <i className="ri-delete-bin-line float-right text-muted"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media align-items-center">
                    <div className="media-body">
                      <h5 className="font-size-14 m-0">Mark Messer</h5>
                    </div>

                    <div className="dropdown">
                      <a
                        href="/chat"
                        className="text-muted dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="/chat">
                          Share{" "}
                          <i className="ri-share-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Block{" "}
                          <i className="ri-forbid-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Remove{" "}
                          <i className="ri-delete-bin-line float-right text-muted"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="media align-items-center">
                    <div className="media-body">
                      <h5 className="font-size-14 m-0">Michael Hinton</h5>
                    </div>

                    <div className="dropdown">
                      <a
                        href="/chat"
                        className="text-muted dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="/chat">
                          Share{" "}
                          <i className="ri-share-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Block{" "}
                          <i className="ri-forbid-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Remove{" "}
                          <i className="ri-delete-bin-line float-right text-muted"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-3">
              <div className="p-3 font-weight-bold text-primary">O</div>

              <ul className="list-unstyled contact-list">
                <li>
                  <div className="media align-items-center">
                    <div className="media-body">
                      <h5 className="font-size-14 m-0">Ossie Wilson</h5>
                    </div>

                    <div className="dropdown">
                      <a
                        href="/chat"
                        className="text-muted dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="/chat">
                          Share{" "}
                          <i className="ri-share-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Block{" "}
                          <i className="ri-forbid-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Remove{" "}
                          <i className="ri-delete-bin-line float-right text-muted"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-3">
              <div className="p-3 font-weight-bold text-primary">P</div>

              <ul className="list-unstyled contact-list">
                <li>
                  <div className="media align-items-center">
                    <div className="media-body">
                      <h5 className="font-size-14 m-0">Phillis Griffin</h5>
                    </div>

                    <div className="dropdown">
                      <a
                        href="/chat"
                        className="text-muted dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="/chat">
                          Share{" "}
                          <i className="ri-share-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Block{" "}
                          <i className="ri-forbid-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Remove{" "}
                          <i className="ri-delete-bin-line float-right text-muted"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media align-items-center">
                    <div className="media-body">
                      <h5 className="font-size-14 m-0">Paul Haynes</h5>
                    </div>

                    <div className="dropdown">
                      <a
                        href="/chat"
                        className="text-muted dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="/chat">
                          Share{" "}
                          <i className="ri-share-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Block{" "}
                          <i className="ri-forbid-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Remove{" "}
                          <i className="ri-delete-bin-line float-right text-muted"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-3">
              <div className="p-3 font-weight-bold text-primary">R</div>

              <ul className="list-unstyled contact-list">
                <li>
                  <div className="media align-items-center">
                    <div className="media-body">
                      <h5 className="font-size-14 m-0">Rocky Jackson</h5>
                    </div>

                    <div className="dropdown">
                      <a
                        href="/chat"
                        className="text-muted dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="/chat">
                          Share{" "}
                          <i className="ri-share-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Block{" "}
                          <i className="ri-forbid-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Remove{" "}
                          <i className="ri-delete-bin-line float-right text-muted"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-3">
              <div className="p-3 font-weight-bold text-primary">S</div>

              <ul className="list-unstyled contact-list">
                <li>
                  <div className="media align-items-center">
                    <div className="media-body">
                      <h5 className="font-size-14 m-0">Sara Muller</h5>
                    </div>

                    <div className="dropdown">
                      <a
                        href="/chat"
                        className="text-muted dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="/chat">
                          Share{" "}
                          <i className="ri-share-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Block{" "}
                          <i className="ri-forbid-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Remove{" "}
                          <i className="ri-delete-bin-line float-right text-muted"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media align-items-center">
                    <div className="media-body">
                      <h5 className="font-size-14 m-0">Simon Velez</h5>
                    </div>

                    <div className="dropdown">
                      <a
                        href="/chat"
                        className="text-muted dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="/chat">
                          Share{" "}
                          <i className="ri-share-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Block{" "}
                          <i className="ri-forbid-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Remove{" "}
                          <i className="ri-delete-bin-line float-right text-muted"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media align-items-center">
                    <div className="media-body">
                      <h5 className="font-size-14 m-0">Steve Walker</h5>
                    </div>

                    <div className="dropdown">
                      <a
                        href="/chat"
                        className="text-muted dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="/chat">
                          Share{" "}
                          <i className="ri-share-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Block{" "}
                          <i className="ri-forbid-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="/chat">
                          Remove{" "}
                          <i className="ri-delete-bin-line float-right text-muted"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </SimpleBar>
        </div>
      </div>

      <div
        className="tab-pane"
        id="pills-setting"
        role="tabpanel"
        aria-labelledby="pills-setting-tab"
      >
        <div>
          <div className="px-4 pt-4">
            <h4 className="mb-0">Settings</h4>
          </div>

          <div className="text-center border-bottom p-4">
            <div className="mb-4 profile-user">
              <img
                src="assets/images/users/avatar-1.jpg"
                className="rounded-circle avatar-lg img-thumbnail"
                alt=""
              />
              <button
                type="button"
                className="btn bg-light avatar-xs p-0 rounded-circle profile-photo-edit"
              >
                <i className="ri-pencil-fill"></i>
              </button>
            </div>

            <h5 className="font-size-16 mb-1 text-truncate">Patricia Smith</h5>
            <div className="dropdown d-inline-block mb-1">
              <a
                className="text-muted dropdown-toggle pb-1 d-block"
                href="/chat"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Available <i className="mdi mdi-chevron-down"></i>
              </a>

              <div className="dropdown-menu">
                <a className="dropdown-item" href="/chat">
                  Available
                </a>
                <a className="dropdown-item" href="/chat">
                  Busy
                </a>
              </div>
            </div>
          </div>
          <SimpleBar className="p-4 user-profile-desc" data-simplebar>
            <div id="profile-setting-accordion" className="custom-accordion">
              <div className="card shadow-none border mb-2">
                <a
                  href="#profile-setting-personalinfocollapse"
                  className="text-dark"
                  data-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="profile-setting-personalinfocollapse"
                >
                  <div
                    className="card-header"
                    id="profile-setting-personalinfoheading"
                  >
                    <h5 className="font-size-14 m-0">
                      Personal Info
                      <i className="mdi mdi-chevron-up float-right accor-plus-icon"></i>
                    </h5>
                  </div>
                </a>

                <div
                  id="profile-setting-personalinfocollapse"
                  className="collapse show"
                  aria-labelledby="profile-setting-personalinfoheading"
                  data-parent="#profile-setting-accordion"
                >
                  <div className="card-body">
                    <div className="float-right">
                      <button type="button" className="btn btn-light btn-sm">
                        <i className="ri-edit-fill mr-1 align-middle"></i> Edit
                      </button>
                    </div>

                    <div>
                      <p className="text-muted mb-1">Name</p>
                      <h5 className="font-size-14">Patricia Smith</h5>
                    </div>

                    <div className="mt-4">
                      <p className="text-muted mb-1">Email</p>
                      <h5 className="font-size-14">adc@123.com</h5>
                    </div>

                    <div className="mt-4">
                      <p className="text-muted mb-1">Time</p>
                      <h5 className="font-size-14">11:40 AM</h5>
                    </div>

                    <div className="mt-4">
                      <p className="text-muted mb-1">Location</p>
                      <h5 className="font-size-14 mb-0">California, USA</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow-none border mb-2">
                <a
                  href="#profile-setting-privacycollapse"
                  className="text-dark collapsed"
                  data-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="profile-setting-privacycollapse"
                >
                  <div
                    className="card-header"
                    id="profile-setting-privacyheading"
                  >
                    <h5 className="font-size-14 m-0">
                      Privacy
                      <i className="mdi mdi-chevron-up float-right accor-plus-icon"></i>
                    </h5>
                  </div>
                </a>
                <div
                  id="profile-setting-privacycollapse"
                  className="collapse"
                  aria-labelledby="profile-setting-privacyheading"
                  data-parent="#profile-setting-accordion"
                >
                  <div className="card-body">
                    <div className="py-3">
                      <div className="media align-items-center">
                        <div className="media-body overflow-hidden">
                          <h5 className="font-size-13 mb-0 text-truncate">
                            Profile photo
                          </h5>
                        </div>
                        <div className="dropdown ml-2">
                          <button
                            className="btn btn-light btn-sm dropdown-toggle w-sm"
                            type="button"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Everyone <i className="mdi mdi-chevron-down"></i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="/chat">
                              Everyone
                            </a>
                            <a className="dropdown-item" href="/chat">
                              selected
                            </a>
                            <a className="dropdown-item" href="/chat">
                              Nobody
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="py-3 border-top">
                      <div className="media align-items-center">
                        <div className="media-body overflow-hidden">
                          <h5 className="font-size-13 mb-0 text-truncate">
                            Last seen
                          </h5>
                        </div>
                        <div className="ml-2">
                          <div className="custom-control custom-switch">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="privacy-lastseenSwitch"
                              checked
                            />
                            <label
                              className="custom-control-label"
                              for="privacy-lastseenSwitch"
                            ></label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="py-3 border-top">
                      <div className="media align-items-center">
                        <div className="media-body overflow-hidden">
                          <h5 className="font-size-13 mb-0 text-truncate">
                            Status
                          </h5>
                        </div>
                        <div className="dropdown ml-2">
                          <button
                            className="btn btn-light btn-sm dropdown-toggle w-sm"
                            type="button"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Everyone <i className="mdi mdi-chevron-down"></i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="/chat">
                              Everyone
                            </a>
                            <a className="dropdown-item" href="/chat">
                              selected
                            </a>
                            <a className="dropdown-item" href="/chat">
                              Nobody
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="py-3 border-top">
                      <div className="media align-items-center">
                        <div className="media-body overflow-hidden">
                          <h5 className="font-size-13 mb-0 text-truncate">
                            Read receipts
                          </h5>
                        </div>
                        <div className="ml-2">
                          <div className="custom-control custom-switch">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="privacy-readreceiptSwitch"
                              checked
                            />
                            <label
                              className="custom-control-label"
                              for="privacy-readreceiptSwitch"
                            ></label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="py-3 border-top">
                      <div className="media align-items-center">
                        <div className="media-body overflow-hidden">
                          <h5 className="font-size-13 mb-0 text-truncate">
                            Groups
                          </h5>
                        </div>
                        <div className="dropdown ml-2">
                          <button
                            className="btn btn-light btn-sm dropdown-toggle w-sm"
                            type="button"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Everyone <i className="mdi mdi-chevron-down"></i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="/chat">
                              Everyone
                            </a>
                            <a className="dropdown-item" href="/chat">
                              selected
                            </a>
                            <a className="dropdown-item" href="/chat">
                              Nobody
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card shadow-none border mb-2">
                <a
                  href="#profile-setting-securitynoticollapse"
                  className="text-dark collapsed"
                  data-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="profile-setting-securitynoticollapse"
                >
                  <div
                    className="card-header"
                    id="profile-setting-securitynotiheading"
                  >
                    <h5 className="font-size-14 m-0">
                      Security
                      <i className="mdi mdi-chevron-up float-right accor-plus-icon"></i>
                    </h5>
                  </div>
                </a>
                <div
                  id="profile-setting-securitynoticollapse"
                  className="collapse"
                  aria-labelledby="profile-setting-securitynotiheading"
                  data-parent="#profile-setting-accordion"
                >
                  <div className="card-body">
                    <div>
                      <div className="media align-items-center">
                        <div className="media-body overflow-hidden">
                          <h5 className="font-size-13 mb-0 text-truncate">
                            Show security notification
                          </h5>
                        </div>
                        <div className="ml-2">
                          <div className="custom-control custom-switch">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="security-notificationswitch"
                            />
                            <label
                              className="custom-control-label"
                              for="security-notificationswitch"
                            ></label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card shadow-none border mb-2">
                <a
                  href="#profile-setting-helpcollapse"
                  className="text-dark collapsed"
                  data-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="profile-setting-helpcollapse"
                >
                  <div className="card-header" id="profile-setting-helpheading">
                    <h5 className="font-size-14 m-0">
                      Help
                      <i className="mdi mdi-chevron-up float-right accor-plus-icon"></i>
                    </h5>
                  </div>
                </a>
                <div
                  id="profile-setting-helpcollapse"
                  className="collapse"
                  aria-labelledby="profile-setting-helpheading"
                  data-parent="#profile-setting-accordion"
                >
                  <div className="card-body">
                    <div>
                      <div className="py-3">
                        <h5 className="font-size-13 mb-0">
                          <a href="/chat" className="text-body d-block">
                            FAQs
                          </a>
                        </h5>
                      </div>
                      <div className="py-3 border-top">
                        <h5 className="font-size-13 mb-0">
                          <a href="/chat" className="text-body d-block">
                            Contact
                          </a>
                        </h5>
                      </div>
                      <div className="py-3 border-top">
                        <h5 className="font-size-13 mb-0">
                          <a href="/chat" className="text-body d-block">
                            Terms & Privacy policy
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SimpleBar>
        </div>
      </div>
    </div>
    </div>

  );
};

export default UsersTab;

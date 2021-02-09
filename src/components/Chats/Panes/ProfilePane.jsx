import SimpleBar from "simplebar-react";
import { useSelector}  from "react-redux"

// const profile =
//   {
//     name: 'Richard Okonicha',
//     status: "Active",
//     time: "12:40",
//     location: "California, USA",
//     email: "richardokonicha@gmail.com",
//     about: "I'm a hopeless romantic and always strive to believe in the good within everyone. I'm looking for an equally positive partner who loves to try new experiences and is a great and open communicator."
//   }

const ProfilePane = () => {

    const authUser = useSelector(state => state.sessionState.authUser)
    return (
        
      <div
      className="tab-pane active"
      id="pills-user"
      role="tabpanel"
      aria-labelledby="pills-user-tab"
    >
      <div >
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

          <h5 className="font-size-16 mb-1 text-truncate">{authUser.username}</h5>
          <p className="text-muted text-truncate mb-1">
            <i className="ri-record-circle-fill font-size-10 text-success mr-1 d-inline-block"></i>{" "}
            {authUser.status}
          </p>
        </div>
        <SimpleBar className="p-4 user-profile-desc" data-simplebar>
          <div className="text-muted">
            <p className="mb-4">
            {authUser.about}
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
                    <h5 className="font-size-14">{authUser.username}</h5>
                  </div>

                  <div className="mt-4">
                    <p className="text-muted mb-1">Email</p>
                    <h5 className="font-size-14">{authUser.email}</h5>
                  </div>

                  <div className="mt-4">
                    <p className="text-muted mb-1">Time</p>
                    <h5 className="font-size-14">{authUser.time}</h5>
                  </div>

                  <div className="mt-4">
                    <p className="text-muted mb-1">Location</p>
                    <h5 className="font-size-14 mb-0">{authUser.location}</h5>
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

    )
}

export default ProfilePane
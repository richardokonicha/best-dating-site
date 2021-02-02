import SimpleBar from "simplebar-react";

const GroupsPane = () => {
    return (
        
      <div
      className="tab-pane active"
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

    )
}

export default GroupsPane
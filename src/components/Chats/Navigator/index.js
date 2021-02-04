import { Link, useRouteMatch, useParams } from 'react-router-dom'

import { useState } from 'react'


const SideMenu = () => {
    const [ active, setActive ] = useState(true)
    const { url } = useRouteMatch();

    return (
            <div className="side-menu flex-lg-column mr-lg-1">
                <div className="navbar-brand-box">
                    <a href="index.html" className="logo logo-dark">
                        <span className="logo-sm">
                            <img src="assets/images/logo.svg" alt="" height="30" />
                        </span>
                    </a>

                    <a href="index.html" className="logo logo-light">
                        <span className="logo-sm">
                            <img src="assets/images/logo.svg" alt="" height="30" />
                        </span>
                    </a>
                </div>
 
                <div className="flex-lg-column my-auto">
                    <ul className="nav nav-pills side-menu-nav justify-content-center" role="tablist">
                        <li className="nav-item" data-toggle="tooltip" data-trigger="hover" data-placement="top" title="Profile">
                            <Link to={`${url}/profile`} className="nav-link" id="pills-user-tab" data-toggle="pill" href="#pills-user" role="tab"  >
                                <i className="ri-user-2-line"></i>
                            </Link>
                        </li>
                        <li className="nav-item" data-toggle="toolt#pills-chatip" data-trigger="hover#pills-chat" data-placement="top" title="Chats">
                            <Link to={`${url}/chat`} className={true ? "nav-link active": "nav-link"} id="pills-chat-tab" data-toggle="pill" href="#pills-chat" role="tab">
                                <i className="ri-message-3-line"></i>
                            </Link>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-trigger="hover" data-placement="top" title="Groups">
                            <Link to={`${url}/group`} className={true ? "nav-link active": "nav-link"}  id="pills-groups-tab" data-toggle="pill" href="#pills-groups" role="tab">
                                <i className="ri-group-line"></i>
                            </Link>
                        </li>
                        {/* <li className="nav-item" data-toggle="tooltip" data-trigger="hover" data-placement="top" title="Contacts">
                            <Link to="/contact" className="nav-link" id="pills-contacts-tab" data-toggle="pill" href="#pills-contacts" role="tab">
                                <i className="ri-contacts-line"></i>
                            </Link>
                        </li> */}
                        <li className="nav-item" data-toggle="tooltip" data-trigger="hover" data-placement="top" title="Settings">
                            <Link to={`${url}/setting`} className="nav-link" id="pills-setting-tab" data-toggle="pill" href="#pills-setting" role="tab">
                                <i className="ri-settings-2-line"></i>
                            </Link>
                        </li>
                        {/* <li className="nav-item dropdown profile-user-dropdown d-inline-block d-lg-none">
                            <a className="nav-link dropdown-toggle" href="/chat" role="button" data-toggle="dropdown" aria-expanded="false">
                                <img src="assets/images/users/avatar-1.jpg" alt="" className="profile-user rounded-circle" />
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="/chat">Profile <i className="ri-profile-line float-right text-muted"></i></a>
                                <a className="dropdown-item" href="/chat">Setting <i className="ri-settings-3-line float-right text-muted"></i></a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/chat">Log out <i className="ri-logout-circle-r-line float-right text-muted"></i></a>
                            </div>
                        </li> */}
                    </ul>
                </div>

                <div className="flex-lg-column d-none d-lg-block">
                    <ul className="nav side-menu-nav justify-content-center">
                        {/* <li className="nav-item">
                            <a className="nav-link" id="light-dark" href="/chat" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="Dark / Light Mode">
                                <i className="ri-sun-line theme-mode-icon"></i>
                            </a>
                        </li> */}

                        <li className="nav-item btn-group dropup profile-user-dropdown">
                            <Link to={`${url}/chat`} className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="false">
                                <img src="assets/images/users/avatar-1.jpg" alt="" className="profile-user rounded-circle" />
                            </Link>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="/chat">Profile <i className="ri-profile-line float-right text-muted"></i></a>
                                <a className="dropdown-item" href="/chat">Setting <i className="ri-settings-3-line float-right text-muted"></i></a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/chat">Log out <i className="ri-logout-circle-r-line float-right text-muted"></i></a>
                            </div>
                        </li>
                    </ul>
                </div>
                
            </div>
    )
}

export default SideMenu
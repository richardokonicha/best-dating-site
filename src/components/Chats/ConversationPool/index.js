import SimpleBar from "simplebar-react";
import { useState } from "react"
import ConversationList from "./ConversationList"
import ConversationInput from "./ConversationInput"
import { useSelector } from 'react-redux'
import { withFirebase } from '../../Firebase';
import { withAuthorization, withEmailVerification } from '../../Session';
import { compose } from "recompose"


// later

const initialState = {
    user: 'auth().currentUser',
    chats: [],
    users: [],
    content: "",
    readError: null,
    writeError: null,
    loadingChats: false,
    error: ""
}


const ConversationPool = (props) => {

    const {authUser } = useSelector(state => state.sessionState)
    console.log(props)
    // const [chatState, setChatState] = useState(initialState)
    
    // const handleSubmit = (e) => {
    //     console.log(e)
    // }

    const SignOut = () => {
        // firebase.doSignOut()
    }

    return (
        <div className="user-chat w-100">
            <div className="d-lg-flex">
                <div className="w-100">
                    <div className="p-3 p-lg-4 border-bottom">
                        <div className="row align-items-center">
                            <div className="col-sm-4 col-8">
                                <div className="media align-items-center">
                                    <div className="d-block d-lg-none mr-2">
                                        <a href="/chat" className="user-chat-remove text-muted font-size-16 p-2"><i className="ri-arrow-left-s-line"></i></a>
                                    </div>
                                    <div className="mr-3">
                                        <img src="assets/images/users/avatar-4.jpg" className="rounded-circle avatar-xs" alt="" />
                                    </div>
                                    <div className="media-body overflow-hidden">
                                        <h5 className="font-size-16 mb-0 text-truncate"><a href="/chat" className="text-reset user-profile-show">Broadcast</a> <i className="ri-record-circle-fill font-size-10 text-success d-inline-block ml-1"></i></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-8 col-4">
                                <ul className="list-inline user-chat-nav text-right mb-0">

                                    <li className="list-inline-item">
                                        <div className="dropdown">
                                            <button className="btn nav-btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                                <i className="ri-search-line"></i>
                                            </button>
                                            <div className="dropdown-menu p-0 dropdown-menu-right dropdown-menu-md">
                                                <div className="search-box p-2">
                                                    <input type="text" className="form-control bg-light border-0" placeholder="Search.." />
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="list-inline-item d-none d-lg-inline-block">
                                        <button type="button" className="border border-primary btn nav-btn user-profile-show"
                                            onClick={SignOut} 
                                            title="Logout">
                                            <i className="ri-user-2-line"></i>
                                        </button>
                                    </li>

                                    <li className="list-inline-item">
                                        <div className="dropdown">
                                            <button className="btn nav-btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                                <i className="ri-more-fill"></i>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item d-block d-lg-none user-profile-show" href="/chat">View profile <i className="ri-user-2-line float-right text-muted"></i></a>
                                                <a className="dropdown-item" href="/chat">Archive <i className="ri-archive-line float-right text-muted"></i></a>
                                                <a className="dropdown-item" href="/chat">Muted <i className="ri-volume-mute-line float-right text-muted"></i></a>
                                                <a className="dropdown-item" href="/chat">Delete <i className="ri-delete-bin-line float-right text-muted"></i></a>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <SimpleBar className="chat-conversation p-3 p-lg-4" data-simplebar="init"> */}
                    {/* <ConversationList/> */}
                    {/* </SimpleBar> */}

                    <SimpleBar className="chat-conversation p-3 p-lg-4" data-simplebar="init">
                        <ConversationList />
                    </SimpleBar>


                    <div className="p-3 p-lg-4 border-top mb-0">
                        <ConversationInput/>
                    </div>
                </div>
            
                <div className="user-profile-sidebar d-none">
                    <div className="px-3 px-lg-4 pt-3 pt-lg-4">
                        <div className="user-chat-nav text-right">
                            <button type="button" className="btn nav-btn" id="user-profile-hide">
                                <i className="ri-close-line"></i>
                            </button>
                        </div>
                    </div>

                    <div className="text-center p-4 border-bottom">
                        <div className="mb-4">
                            <img src="assets/images/users/avatar-4.jpg" className="rounded-circle avatar-lg img-thumbnail" alt="" />
                        </div>

                        <h5 className="font-size-16 mb-1 text-truncate">Doris Brown</h5>
                        <p className="text-muted text-truncate mb-1"><i className="ri-record-circle-fill font-size-10 text-success mr-1"></i> Active</p>
                    </div>

                    <SimpleBar className="p-4 user-profile-desc" data-simplebar>
                        <div className="text-muted">
                            <p className="mb-4">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
                        </div>

                        <div id="profile-user-accordion" className="custom-accordion">
                            <div className="card shadow-none border mb-2">
                                <a href="#collapseOne" className="text-dark" data-toggle="collapse"
                                    aria-expanded="true"
                                    aria-controls="collapseOne">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="font-size-14 m-0">
                                            <i className="ri-user-2-line mr-2 align-middle d-inline-block"></i> About
                                <i className="mdi mdi-chevron-up float-right accor-plus-icon"></i>
                                        </h5>
                                    </div>
                                </a>

                                <div id="collapseOne" className="collapse show"
                                    aria-labelledby="headingOne" data-parent="#profile-user-accordion">
                                    <div className="card-body">

                                        <div>
                                            <p className="text-muted mb-1">Name</p>
                                            <h5 className="font-size-14">Doris Brown</h5>
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
                                <a href="#collapseTwo" className="text-dark collapsed" data-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo">
                                    <div className="card-header" id="headingTwo">
                                        <h5 className="font-size-14 m-0">
                                            <i className="ri-attachment-line mr-2 align-middle d-inline-block"></i> Attached Files
                                <i className="mdi mdi-chevron-up float-right accor-plus-icon"></i>
                                        </h5>
                                    </div>
                                </a>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                    data-parent="#profile-user-accordion">
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
                                                        <h5 className="font-size-14 mb-1">admin_v1.0.zip</h5>
                                                        <p className="text-muted font-size-13 mb-0">12.5 MB</p>
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
                                                            <a className="dropdown-toggle text-muted px-1" href="/chat" role="button" data-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-fill"></i>
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a className="dropdown-item" href="/chat">Action</a>
                                                                <a className="dropdown-item" href="/chat">Another action</a>
                                                                <div className="dropdown-divider"></div>
                                                                <a className="dropdown-item" href="/chat">Delete</a>
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
                                                        <p className="text-muted font-size-13 mb-0">4.2 MB</p>
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
                                                            <a className="dropdown-toggle text-muted px-1" href="/chat" role="button" data-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-fill"></i>
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a className="dropdown-item" href="/chat">Action</a>
                                                                <a className="dropdown-item" href="/chat">Another action</a>
                                                                <div className="dropdown-divider"></div>
                                                                <a className="dropdown-item" href="/chat">Delete</a>
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
                                                        <p className="text-muted font-size-13 mb-0">3.1 MB</p>
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
                                                            <a className="dropdown-toggle text-muted px-1" href="/chat" role="button" data-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-fill"></i>
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a className="dropdown-item" href="/chat">Action</a>
                                                                <a className="dropdown-item" href="/chat">Another action</a>
                                                                <div className="dropdown-divider"></div>
                                                                <a className="dropdown-item" href="/chat">Delete</a>
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
                                                        <p className="text-muted font-size-13 mb-0">6.7 MB</p>
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
                                                            <a className="dropdown-toggle text-muted px-1" href="/chat" role="button" data-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-fill"></i>
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a className="dropdown-item" href="/chat">Action</a>
                                                                <a className="dropdown-item" href="/chat">Another action</a>
                                                                <div className="dropdown-divider"></div>
                                                                <a className="dropdown-item" href="/chat">Delete</a>
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
        </div>
    )
}
const condition = authUser => !!authUser;


export default compose(
    withFirebase,
    withEmailVerification,
    withAuthorization(condition),
)(ConversationPool);

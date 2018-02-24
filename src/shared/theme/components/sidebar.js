import React from 'react';
import MdArrowBack from 'react-icons/lib/md/arrow-back';
import MdArrowDropDown from 'react-icons/lib/md/arrow-drop-down';
import MdDashboard from 'react-icons/lib/md/dashboard';
import MdLayers from 'react-icons/lib/md/layers';
import {Link} from 'react-router-dom'

const Sidebar = (props)=>{
    return (
        <aside id="aside" className="aside aside-left" data-fuse-bar="aside" data-fuse-bar-media-step="md" data-fuse-bar-position="left">
        <div className="aside-content-wrapper">

            <div className="aside-content bg-primary-500 text-auto">

                <div className="aside-toolbar">

                    <div className="logo">
                        <span className="logo-icon">GB</span>
                        <span className="logo-text">GroupBi</span>
                    </div>

                    <button id="toggle-fold-aside-button" type="button" className="btn btn-icon d-none d-lg-block" data-fuse-aside-toggle-fold>
                         <MdArrowBack size={24} color="white"/>
                    </button>

                </div>

                <ul className="nav flex-column custom-scrollbar" id="sidenav" data-children=".nav-item">

                    <li className="subheader">
                        <span>APPS</span>
                    </li>
                    <li className="nav-item">
                            <Link to="/home" className="nav-link ripple">
                            <i><MdDashboard  size={16}/></i>
                                <span>Home</span>
                            </Link>
                    </li>
                    <li className="nav-item" role="tab">
                        <a className="nav-link ripple with-arrow " data-toggle="collapse" data-target="#collapse-dashboards" href="#" aria-expanded="true"
                            aria-controls="collapse-dashboards">
                            <i><MdLayers  size={16}/></i>
                            <span>Elements</span>
                            <i><MdArrowDropDown  size={24}/></i>
                        </a>
                        <ul id="collapse-dashboards" className="collapse" role="tabpanel" aria-labelledby="heading-dashboards" data-children=".nav-item">
                            <li className="nav-item">
                                <Link to="alerts" className="nav-link ripple">
                                    <span>Alerts</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="badges" className="nav-link ripple ">
                                    <span>Badges</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="buttons" className="nav-link ripple ">
                                    <span>Buttons</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                   
                </ul>
            </div>
        </div>
    </aside>
    )
}

export default Sidebar;
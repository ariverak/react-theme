import React from 'react';
import MdArrowBack from 'react-icons/lib/md/arrow-back';
import MdArrowDropDown from 'react-icons/lib/md/arrow-drop-down';
import MdDashboard from 'react-icons/lib/md/dashboard';

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
                    <li className="nav-item" role="tab" id="heading-dashboards">

                        <a className="nav-link ripple with-arrow " data-toggle="collapse" data-target="#collapse-dashboards" href="#" aria-expanded="true"
                            aria-controls="collapse-dashboards">
                            <i><MdDashboard  size={16}/></i>
                            <span>Dashboards</span>
                            <i><MdArrowDropDown  size={24}/></i>
                        </a>

                        <ul id="collapse-dashboards" className="collapse show" role="tabpanel" aria-labelledby="heading-dashboards" data-children=".nav-item">
                            <li className="nav-item">
                                <a className="nav-link ripple active" href="apps-dashboards-project.html" data-page-url="/apps-dashboards-project.html">
                                    <span>Option 1</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ripple " href="apps-dashboards-server.html" data-page-url="/apps-dashboards-project.html">

                                    <span>Option 2</span>
                                </a>
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